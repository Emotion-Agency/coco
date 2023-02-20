export const dateHandler = () => {
  const currentDate = new Date(
    new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
  )

  const month =
    currentDate.getMonth() + 1 > 9
      ? currentDate.getMonth() + 1
      : `0${currentDate.getMonth() + 1}`

  return `[${month}/${currentDate.getDate()}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()} AM]`
}
