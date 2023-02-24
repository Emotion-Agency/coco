export const useAppState = () => {
  const isInEditor = useState('inEditor', () => false)
  const isLoaded = useState('inLoaded', () => true)
  const isWaiting = useState('isWaiting', () => false)

  return { isInEditor, isLoaded, isWaiting }
}
