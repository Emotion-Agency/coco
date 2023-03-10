import { AxiosResponse } from 'axios'
import InstagramService from '~~/api/instagram-service'
import { iInstaPost } from '~~/types'

export const useInstagramPosts = () => {
  const posts = useState<iInstaPost[]>('instagramPosts', () => [])

  const getPosts = async (links: string[]) => {
    try {
      const promises = links
        .map(postId => InstagramService.getPost(postId))
        .slice(0, 10)

      const postsData = (await Promise.all(
        promises
      )) as unknown as AxiosResponse<iInstaPost>[]

      posts.value = postsData.map(pd => ({
        ...pd.data,
        postMedia: pd.data.postMedia,
      }))

      console.log(posts.value)
    } catch (error) {
      posts.value = links.map(link => ({
        postUrl: link,
        postMedia: '/images/thumb.jpg',
      }))
      console.log(error)
    }
  }

  return { posts, getPosts }
}
