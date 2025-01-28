/**
 * targetSelectorの外側の要素をclickした際にclosefunction関数を実行する
 */
export declare const addClickOutsideEvent: (targetSelector: string, closefunction: () => void) => void;
export declare const removeClickOutsideEvent: (targetSelector: string, closefunction: () => void) => void;
