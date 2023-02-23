import InstagramService from '~~/api/instagram-service'
import { iInstaPost } from '~~/types'

const getPostId = (url: string) => {
  const regex = /\/p\/([a-zA-Z0-9_-]+)\//
  const match = regex.exec(url)
  const id = match[1]
  return id
}

const galleryImages = [
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/11.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/2.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/3.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/4.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/5.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/6.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/7.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/8.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/9.jpg',
  },
  {
    full_url: 'https://www.instagram.com/',
    display_url: '/images/footer/10.jpg',
  },
]

export const useInstagramPosts = () => {
  const posts = useState<iInstaPost[]>('instagramPosts', () => galleryImages)

  const getPosts = (links: string[]) => {
    if (posts.value.length <= 10) {
      const postIds = links.map(post => getPostId(post))
      postIds.forEach(async postId => {
        const post = await InstagramService.getPost(postId)
        posts.value = [...new Set([...posts.value, post.data])]
      })
    }
  }

  watch(posts, () => {
    if (process.client) {
      localStorage.setItem('posts', JSON.stringify(posts.value))
    }
  })
  return { posts, getPosts }
}
