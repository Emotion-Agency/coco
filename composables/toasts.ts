export enum ToastColor {
  primary = 'primate',
  danger = 'danger',
  success = 'success',
}

export interface iToast {
  text: string
  color: ToastColor
  id: string
}

export const useToasts = () => {
  const toasts = useState<iToast[]>('toasts', () => [])

  const addToast = (value: iToast) => {
    const updatedValue: iToast = { ...value, id: Date.now().toString() }
    toasts.value = [updatedValue, ...toasts.value]
  }

  const updateToasts = (value: iToast[]) => {
    toasts.value = value
  }

  return { toasts, addToast, updateToasts }
}
