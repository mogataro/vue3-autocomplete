# vue3-autocomplete

vue3用の autocomplete コンポーネント

## インストール

`npm i vue3-autocomplete-form`

## 使い方

deepセレクタを使用することで、好きなcssを当てられます。

`autocomplete-form`クラスでcss変数を上書きして使用することをお勧めします。

```vue
<script setup lang="ts">
import { AutocompleteForm } from 'vue3-autocomplete-form'
import 'vue3-autocomplete-form/dist/index.css'
import { ref } from 'vue'

const value = ref(null)
const options = ref([
  { value: 'IS', label: 'Iceland' },
  { value: 'IE', label: 'Ireland' },
  { value: 'US', label: 'United States of America' },
  { value: 'JP', label: 'Japan' },
])
</script>
<template>
  <div class="parent">
    <AutocompleteForm v-model="value" :options="options" placeholder="Please enter any key." />
  </div>
</template>
<style scoped>
.parent:deep(.autocomplete-form) {
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
}
</style>
```

## props, eventなどの詳細はstorybookを確認してください

<https://mogataro.github.io/vue3-autocomplete/storybook-static/?path=/docs/autocompleteform--docs>

入力値で選択肢が絞り込まれる。完全一致した選択肢が1つの場合は選択された状態になる。
Enterキー、Tabキー、Escape、矢印キーで操作可能。

Narrow down your choices by input value. If only one option matches exactly, it will be selected.
Can be operated with Enter key, Tab key, Escape, and arrow keys.
