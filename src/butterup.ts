import type { ButterupProps } from './types'

export const butterup: ButterupProps = {
  options: {
    maxToasts: 3,
    toastLife: 3000,
    currentToasts: 0,
    stackedToasts: true
  },
  toast({ title, message, type, location, icon, theme, dismissible }) {},
  despawnToast(toastId) {}
}
