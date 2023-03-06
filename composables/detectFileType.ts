export const useDetectFileType = () => {
  const parseFileExtension = (url: string) => {
    const filename = url.substring(url.lastIndexOf('/') + 1)
    return '.' + filename.split('.').pop()
  }

  const imageExtensions = [
    '.jpg',
    '.jpeg',
    '.png',
    '.gif',
    '.bmp',
    '.svg',
    '.webp',
  ]
  const videoExtensions = [
    '.mp4',
    '.avi',
    '.wmv',
    '.mov',
    '.mkv',
    '.flv',
    '.3gp',
  ]

  const detectFileType = (url: string): 'image' | 'video' | null => {
    if (imageExtensions.includes(parseFileExtension(url).toLocaleLowerCase())) {
      return 'image'
    }

    if (videoExtensions.includes(parseFileExtension(url).toLocaleLowerCase())) {
      return 'video'
    }

    return null
  }

  return { detectFileType }
}
