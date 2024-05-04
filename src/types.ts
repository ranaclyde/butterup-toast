// Based on https://github.com/midudev/la-velada-web-oficial/blob/main/src/function/toast.ts

/* eslint-disable @typescript-eslint/indent */
export interface ToastOptions {
  title: string
  message?: string
  type?: 'success' | 'error' | 'warning' | 'info'
  location?:
    | 'top-right'
    | 'top-center'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-center'
    | 'bottom-left'
  icon?: boolean
  theme?: string
  dismissable?: boolean
}

export interface ButterupProps {
  options: ButterupOptions
  toast: (toast: ToastOptions) => void
  despawnToast: (id: string) => void
}

export interface ButterupOptions {
  /** Max number of toasts that can be on the screen at once */
  maxToasts: number
  /** How long a toast will stay on the screen before fading away */
  toastLife: number
  /** Current number of toasts on the screen */
  currentToasts: number
  /** Whether or not to stack toasts */
  stackedToasts: boolean
}
