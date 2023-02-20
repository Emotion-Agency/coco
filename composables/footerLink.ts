type nextPageText = 'home' | 'about' | 'shop' | 'contacts'

type nextPage = {
  link: '/' | '/shop/' | '/about/' | '/contacts/'
  text: nextPageText
}

const pages: nextPage[] = [
  {
    text: 'home',
    link: '/',
  },
  {
    text: 'about',
    link: '/about/',
  },
  {
    text: 'shop',
    link: '/shop/',
  },
  {
    text: 'contacts',
    link: '/contacts/',
  },
]

export const useFooterLink = () => {
  const nextPage = useState<nextPage>('nextPage', () => ({
    link: '/',
    text: 'home',
  }))

  const updateNextPage = (pageName: nextPageText) => {
    setTimeout(() => {
      nextPage.value = pages.find(page => page.text === pageName)
    }, 500)
  }

  return { nextPage, updateNextPage }
}
