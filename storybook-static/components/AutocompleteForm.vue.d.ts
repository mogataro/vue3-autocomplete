export type OptionValue = number | string | null | undefined;
export type Option = {
    value: OptionValue;
    label: string;
};
interface Props {
    modelValue: OptionValue;
    options: Array<Option>;
    emptyOptionText?: string;
    placeholder?: string;
    autocomplete?: string;
}
declare const _default: import('vue').DefineComponent<Props, {
    resetInputText: () => string;
}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {} & {
    "update:modelValue": (v: OptionValue) => any;
}, string, import('vue').PublicProps, Readonly<Props> & Readonly<{
    "onUpdate:modelValue"?: ((v: OptionValue) => any) | undefined;
}>, {
    emptyOptionText: string;
    placeholder: string;
    autocomplete: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {
    'autocomplete-form__input': HTMLInputElement;
}, HTMLDivElement>;
export default _default;
