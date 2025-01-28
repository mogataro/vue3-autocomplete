/**
 * targetSelectorの外側の要素をclickした際にclosefunction関数を実行する
 */
export const addClickOutsideEvent = (targetSelector: string, closefunction: () => void) => {
  document.addEventListener('click', listener(targetSelector, closefunction))
}

export const removeClickOutsideEvent = (targetSelector: string, closefunction: () => void) => {
  document.removeEventListener('click', listener(targetSelector, closefunction))
}

const listener =
  (targetSelector: string, closefunction: () => void = () => {}) =>
  (event: MouseEvent) => {
    if (!(event.target instanceof HTMLElement)) return
    if (event.target.closest(targetSelector)) return
    closefunction()
  }
