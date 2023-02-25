import $api from './axiosInstance'

const sendFormService = async (formData: FormData) => {
  try {
    const res = await $api.post('/email', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })

    return res
  } catch (error) {
    throw new Error(error.response.data.message)
  }
}

export default sendFormService
