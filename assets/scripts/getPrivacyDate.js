export function formatUpdateDate(inputDateString) {
  const inputDate = new Date(inputDateString)

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const formattedDate = `Update date: ${
    monthNames[inputDate.getMonth()]
  } ${inputDate.getFullYear()}`

  return formattedDate
}
