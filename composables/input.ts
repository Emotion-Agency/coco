import validator from '~/assets/scripts/utils/Validation'

export interface iInputData {
  id: string
  value: string
  error: boolean
}

export const useInput = (emit, props) => {
  const inputValue = ref(props.value ?? '')
  const inputFocus = ref(false)
  const error = ref(false)
  const $input = ref(null)

  const onFocus = () => {
    inputFocus.value = true
  }

  const onBlur = () => {
    if (!inputValue.value.trim().length) {
      inputFocus.value = false
    }
  }

  const updateFields = () => {
    if (inputValue.value.trim() !== '') {
      onFocus()
      $input.value.focus()
      emit('inputValue', {
        id: props.id,
        value: inputValue.value,
        error: error.value,
      })
    }
  }

  const validationResult = () => {
    if (!props.validation) {
      return [false]
    }
    const options = props.validation.split(' ')

    const validators = options.map(option => {
      const method = option.replace(/[\d(].{0,}/gm, '')
      const param = option.replace(/.{0,}\(|\)/gm, '')
      return { method, param }
    })

    return validators.map(
      v => !validator[v.method](inputValue.value, v.param && v.param)
    )
  }

  const onInput = () => {
    error.value = validationResult().includes(true)

    emit('inputValue', {
      id: props.id,
      value: inputValue.value,
      error: error.value,
    })
  }

  const throwError = () => {
    if (validationResult().includes(true)) {
      inputFocus.value = true
      error.value = true
      $input.value.focus()
    }
  }

  const reset = () => {
    inputValue.value = ''
    error.value = false
    onBlur()
    updateFields()
  }

  const resetSearch = () => {
    reset()
    emit('inputValue', {
      id: props.id,
      value: '',
      error: error.value,
    })
  }

  onMounted(() => {
    updateFields()
  })

  return {
    inputValue,
    inputFocus,
    error,
    $input,
    onFocus,
    onBlur,
    onInput,
    reset,
    resetSearch,
    throwError,
  }
}
