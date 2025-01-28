import type { Meta, StoryObj } from '@storybook/vue3'
import AutocompleteForm from '@/components/AutocompleteForm.vue'
import { userEvent, within, expect, fn, waitFor } from '@storybook/test'

const emptyOptionText = 'No data available'
const options = [
  { value: '01', label: '北海道' },
  { value: '06', label: '山形県' },
  { value: '07', label: '福島県' },
  { value: '16', label: '富山県' },
  { value: '19', label: '山梨県' },
  { value: '31', label: '島根県' },
  { value: '32', label: '島根県' },
  { value: '33', label: '岡山県' },
  { value: '34', label: '広島県' },
  { value: '35', label: '山口県' },
  { value: '40', label: '福岡県' },
  { value: '42', label: '長崎県' },
  { value: '43', label: '熊本県' },
  { value: '47', label: '沖縄県' },
]

const meta: Meta<typeof AutocompleteForm> = {
  title: 'AutocompleteForm',
  parameters: {
    docs: {
      subtitle: 'オートコンプリート',
    },
  },
  argTypes: {
    'onUpdate:modelValue': {
      table: { category: 'events', type: { summary: '[v: OptionValue]' }, disable: true }, // NOTE: 自動で表示されるイベントと重複のため表示しない
    },
  },
  args: {
    modelValue: null,
    options: options,
    emptyOptionText: emptyOptionText,
    'onUpdate:modelValue': fn(),
  },
  component: AutocompleteForm,
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const TestNoneMatch: Story = {
  tags: ['!autodocs'],
  args: {
    modelValue: options[0].value,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input')

    await step('一致するオプションが存在しない場合、emptyOptionTextが表示されるか', async () => {
      await userEvent.clear(inputEl)
      await userEvent.type(inputEl, '東京都')
      await waitFor(async () => {
        const liEls: HTMLLIElement[] = canvas.getAllByTestId('autocomplete-form__item')
        await expect(liEls.length).toBe(1)
        await expect(liEls[0]?.innerHTML).toBe(emptyOptionText)
        await expect(args['onUpdate:modelValue']).lastCalledWith(null)
      })
    })
  },
}

export const TestOneExactMatch: Story = {
  tags: ['!autodocs'],
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input')

    await step('完全一致したオプションが1つの場合、そのオプションが選択されるか', async () => {
      await userEvent.type(inputEl, '北海道')
      await waitFor(async () => {
        const liEls: HTMLLIElement[] = canvas.getAllByTestId('autocomplete-form__item')
        const selectedOptions = args.options.filter((option) => option.label.includes('北海道'))
        await expect(liEls.length).toBe(selectedOptions.length)
        await expect(liEls.length).toBe(1)
        await expect(args['onUpdate:modelValue']).lastCalledWith(selectedOptions[0].value)
      })
    })
  },
}

export const TestMultipleExactMatches: Story = {
  tags: ['!autodocs'],
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input')

    await step('完全一致したオプションが2つ以上の場合、値の変更イベントは発火しない', async () => {
      await userEvent.type(inputEl, '島根県')
      const liEls: HTMLLIElement[] = canvas.getAllByTestId('autocomplete-form__item')
      await expect(liEls.every((liEl) => liEl.innerHTML === liEls[0].innerHTML)).toBeTruthy()
      await expect(args['onUpdate:modelValue']).not.toBeCalled()
    })
  },
}

export const TestEscapeKey: Story = {
  tags: ['!autodocs'],
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement)

    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input')
    const ulEl: HTMLUListElement = canvas.getByTestId('autocomplete-form__list')

    inputEl.focus()
    await step('Enterキーでオプションが開くか', async () => {
      await userEvent.keyboard('{Enter}')
      await expect(ulEl).toBeVisible()
    })

    await step('Escapeキーでオプションを閉じるか', async () => {
      await userEvent.keyboard('{Escape}')
      await expect(ulEl).not.toBeVisible()
    })
  },
}

export const TestArrowKey: Story = {
  tags: ['!autodocs'],
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const inputEl: HTMLInputElement = canvas.getByTestId('autocomplete-form__input')
    const ulEl: HTMLUListElement = canvas.getByTestId('autocomplete-form__list')
    inputEl.focus()

    await step('オプションが開いてたか', async () => {
      await userEvent.keyboard('{ArrowUp}')
      await expect(ulEl).toBeVisible()
    })
    await step('最後のオプションが選択されたか', async () => {
      await userEvent.keyboard('{ArrowUp}')
      await userEvent.keyboard('{Enter}')
      await expect(args['onUpdate:modelValue']).lastCalledWith(
        args.options[args.options.length - 1].value,
      )
    })
  },
}
