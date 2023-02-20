import $api from './axiosInstance'

const sendFormService = async (formData: FormData) => {
  const res = await $api.post('/form', {
    body: formData,
  })
  return res
}

export default sendFormService
