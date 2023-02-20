import { iInputData } from './input'
import sendFormService from '~~/api/wishlist-service'

export const useForm = (formData, $inputs) => {
  const { isWaiting } = useAppState()
  const { addToast } = useToasts()

  const emmitError = () => {
    $inputs.value.forEach(input => input.throwError())
  }

  const resetForm = () => {
    formData.inputs?.forEach(inp => {
      inp.error = true
      inp.value = ''
    })

    $inputs.value.forEach(input => input.reset())
    formData.hasErrors = false
  }

  const onInputValue = (data: iInputData) => {
    const idx = formData.inputs.findIndex(el => el.id === data.id)
    formData.inputs[idx].value = data.value
    formData.inputs[idx].error = data.error
  }

  const onSubmit = async () => {
    const inputs = formData.inputs
    const isError = inputs.find(el => el.error)

    if (isError) {
      emmitError()
      return
    }

    const formSendData = new FormData()
    formSendData.append('From:', 'Coco Website')
    inputs.forEach(el => {
      formSendData.append(el.name, el.value)
    })

    try {
      isWaiting.value = true
      await sendFormService(formSendData)

      addToast({
        color: ToastColor.success,
        id: Date.now().toString(),
        text: 'You have successfully subscribed to your updates',
      })
      resetForm()
    } catch (error) {
      console.log(error.message)
      formData.hasErrors = true
      addToast({
        color: ToastColor.danger,
        id: Date.now().toString(),
        text: 'An error has occurred:(',
      })
    } finally {
      setTimeout(() => {
        isWaiting.value = false
      }, 400)
    }
  }

  return { onInputValue, onSubmit }
}
