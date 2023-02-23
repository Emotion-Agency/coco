import InstagramService from '~~/api/instagram-service'
import { iInstaPost } from '~~/types'

const getPostId = (url: string) => {
  const regex = /\/p\/([a-zA-Z0-9_-]+)\//
  const match = regex.exec(url)
  const id = match[1]
  return id
}

export const useInstagramPosts = () => {
  const posts = useState<iInstaPost[]>('instagramPosts', () => [])

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
