<script setup lang="ts">
import {
  ref,
  computed,
  nextTick,
  onMounted,
  watch,
  useTemplateRef,
  onBeforeMount,
  onBeforeUnmount,
} from 'vue'
import { addClickOutsideEvent, removeClickOutsideEvent } from '@/assets/util/click-outside-element'

const autocompleteUniqKey = window.crypto.randomUUID()

const autocompleteUUIDClassName = 'autocomplete-form--' + autocompleteUniqKey

onBeforeMount(() => {
  addClickOutsideEvent(`.${autocompleteUUIDClassName}`, closeOption)
})

onBeforeUnmount(() => {
  removeClickOutsideEvent(`.${autocompleteUUIDClassName}`, closeOption)
})

export type OptionValue = number | string | null | undefined
export type Option = { value: OptionValue; label: string }
interface Props {
  modelValue: OptionValue
  options: Array<Option>
  emptyOptionText?: string // オプションが存在しない場合に表示するテキスト
  placeholder?: string
  autocomplete?: string // autocomplete属性
}

const props = withDefaults(defineProps<Props>(), {
  emptyOptionText: 'No data available',
  placeholder: '入力または選択してください',
  autocomplete: 'off',
})
interface Emits {
  (e: 'update:modelValue', v: OptionValue): void
}
const emits = defineEmits<Emits>()

const optionList = computed(() => {
  const emptyOption = { label: props.emptyOptionText, value: undefined }
  const list: Array<Option> = props.options.length > 0 ? props.options : [emptyOption]
  if (inputText.value === '') return list
  const filteredList = list.filter((item) => item.label.indexOf(inputText.value) > -1)
  if (filteredList.length === 0) return [emptyOption]
  return filteredList
})

const inputText = ref('')
const initInputText = () => {
  const selectedOption = props.options.find(
    (option) => option.value != null && option.value === selectedValue.value,
  )
  if (selectedOption && selectedOption.label) {
    inputText.value = selectedOption && selectedOption.label
  }
}
const resetInputText = () => (inputText.value = '')

const selectedValue = computed<OptionValue>({
  get: () => props.modelValue,
  set: (value: OptionValue) => emits('update:modelValue', value),
})

const shownOption = ref(false)
const openOption = () => (shownOption.value = true)
const closeOption = () => (shownOption.value = false)

const listboxId = `listboxId_${autocompleteUniqKey}`
const optionId = (value: string | number | null = 'null') =>
  `optionId_${autocompleteUniqKey}_${value}`

const activeDescendant = computed(() => {
  return selectedValue.value === null ? undefined : optionId(selectedValue.value)
})

const focusOption = (index: number) => {
  const value: string | number | null | undefined =
    optionList.value[adjustOptionIndex(index)]?.value
  const focusEl = document.getElementById(optionId(value))
  focusEl?.focus()
}

const autocompleteInputRef = useTemplateRef('autocomplete-form__input')
const preventDefault = (event: Event) => event.preventDefault()

const selectOption = (option: Option) => {
  inputText.value = option.label
  selectedValue.value = option.value
  closeOption()
}
const decide = (option: Option) => {
  inputText.value = option.label
  selectedValue.value = option.value
  cancel()
}
const cancel = () => {
  closeOption()
  const inputEl = autocompleteInputRef.value
  if (inputEl !== null) {
    inputEl.focus()
  }
}

const btnKeydown = (event: KeyboardEvent) => {
  const key = event.key
  if (key === 'Escape') {
    closeOption()
    return
  }
  if (key === 'Enter') {
    openOption()
    return
  }
  if (key === 'ArrowDown' || key === 'ArrowUp') {
    if (!shownOption.value) {
      openOption()
      return
    }
    const index = key === 'ArrowDown' ? 0 : optionList.value.length - 1
    focusOption(index)
    return
  }
  removePrevent()
}

const inputEvent = (): void => {
  openOption()
  if (inputText.value === '') {
    selectedValue.value = null
    return
  }
  // NOTE: 入力値と完全一致したオプション
  const exactMatchOptions = optionList.value.filter((option) => option.label === inputText.value)
  if (exactMatchOptions.length === 1) {
    selectedValue.value = exactMatchOptions[0].value
    return
  }
  if (selectedValue.value !== null && exactMatchOptions.length === 0) {
    selectedValue.value = null
    return
  }
}

const adjustOptionIndex = (index: number) => {
  if (index >= optionList.value.length) {
    return 0
  } else if (index < 0) {
    return optionList.value.length - 1
  }
  return index
}

const optionKeydown = (event: KeyboardEvent, index: number) => {
  const key = event.key
  if (!['ArrowDown', 'ArrowUp'].includes(key)) return
  const nowIndex = adjustOptionIndex(index)
  if (key === 'ArrowDown') return focusOption(nowIndex + 1)
  return focusOption(nowIndex - 1)
}

const scrollEl = ref<HTMLElement | null>(null)

watch(selectedValue, initInputText, { immediate: true })

onMounted(async () => {
  await nextTick()
  scrollEl.value = document.body
})

const addPrevent = () => {
  // NOTE: 上下キーでスクロールさせない
  const el = scrollEl.value as HTMLElement
  el.addEventListener('keydown', preventDefault)
}
const removePrevent = () => {
  // NOTE: 上下キーでスクロールさせる
  const el = scrollEl.value as HTMLElement
  el.removeEventListener('keydown', preventDefault)
}

defineExpose({ resetInputText })
</script>

<template>
  <div class="autocomplete-form" :class="autocompleteUUIDClassName">
    <div class="autocomplete-form__inner">
      <input
        ref="autocomplete-form__input"
        v-model="inputText"
        class="autocomplete-form__input"
        type="text"
        :placeholder="props.placeholder"
        role="combobox"
        aria-haspopup="listbox"
        :aria-controls="listboxId"
        :aria-expanded="shownOption"
        :aria-activedescendant="activeDescendant"
        :autocomplete="props.autocomplete"
        data-testid="autocomplete-form__input"
        @input="inputEvent"
        @click="openOption"
        @keydown="btnKeydown($event)"
        @focus="addPrevent"
        @blur="removePrevent"
      />
      <i
        class="autocomplete-form__icon"
        :class="{ 'autocomplete-form__icon--up': shownOption }"
      ></i>
    </div>
    <ul
      v-show="shownOption"
      :id="listboxId"
      class="autocomplete-form__list"
      role="listbox"
      data-testid="autocomplete-form__list"
      :value="selectedValue"
    >
      <li
        v-for="(option, index) in optionList"
        :id="optionId(option.value)"
        :key="`key_${option.value}`"
        class="autocomplete-form__item"
        :class="{
          'autocomplete-form__item--empty': option.label === props.emptyOptionText,
        }"
        :value="option.value ?? ''"
        role="option"
        tabindex="0"
        data-testid="autocomplete-form__item"
        :aria-selected="selectedValue !== null && selectedValue === option.value"
        @click="selectOption(option)"
        @keydown="optionKeydown($event, index)"
        @keydown.enter="decide(option)"
        @keydown.esc="cancel"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.autocomplete-form {
  /* --icon-color: */
  /* --icon-right: */
  /* --icon-height: */
  /* --icon-width: */

  /* --input-font-size: */
  /* --input-background-color: */
  /* --input-border-radius: */
  /* --input-border: */
  /* --input-padding: */
  /* --input-placeholder-color: */

  /* --option-list-top: */
  /* --option-list-border: */
  /* --option-list-box-shadow: */
  /* --option-list-background: */

  /* --option-item-font-size: */
  /* --option-item-padding: */
  /* --option-item-background-hover: */
  /* --option-item-background-selected: */

  position: relative;
  width: 100%;
}
.autocomplete-form__icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin-block: auto;
  background: var(--icon-color, #000000);
  right: var(--icon-right, 10px);
  height: var(--icon-height, 6px);
  width: var(--icon-width, 12px);
  clip-path: polygon(0 0, 100% 0, 50% 100%);
  transition: transform 0.3s ease-in;
  &.autocomplete-form__icon--up {
    transform: scaleY(-1);
  }
}
.autocomplete-form__input {
  appearance: none;
  box-sizing: border-box;
  width: 100%;
  letter-spacing: normal;
  line-height: 1;
  margin: 0;
  cursor: pointer;
  font-size: var(--input-font-size, 1rem);
  background: var(--input-background-color, #ffffff);
  border-radius: var(--input-border-radius, 0);
  border: var(--input-border, 1px solid #b7b2b2);
  padding: var(--input-padding, 8px 30px 8px 12px);
  &::placeholder {
    color: var(--input-placeholder-color, revert);
  }
}
.autocomplete-form__list {
  transition: 0.3s ease-in;
  position: absolute;
  box-sizing: border-box;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  top: var(--option-list-top, calc(100% + 8px));
  border: var(--option-list-border, 1px solid #b7b2b2);
  box-shadow: var(--option-list-box-shadow, 2px 2px 3px 0 #00000030);
  background: var(--option-list-background, #ffffff);
}
.autocomplete-form__item {
  letter-spacing: normal;
  list-style-type: none;
  line-height: 1;
  font-size: var(--option-item-font-size, 1rem);
  padding: var(--option-item-padding, 8px 12px);
  &:hover {
    background: var(--option-item-background-hover, #f0eaea);
    cursor: pointer;
  }
  &[aria-selected='true'] {
    background: var(--option-item-background-selected, #d9d2d2);
    cursor: default;
  }
  &.autocomplete-form__item--empty {
    pointer-events: none;
  }
}
</style>
