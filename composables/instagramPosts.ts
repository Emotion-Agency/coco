import InstagramService from '~~/api/instagram-service'
import { iInstaPost } from '~~/types'

export const useInstagramPosts = () => {
  const posts = useState<iInstaPost[]>('instagramPosts', () => [])

  const getPosts = (links: string[]) => {
    posts.value = links.map(link => ({
      postUrl: link,
      postMedia: '/images/thumb.jpg',
    }))

    try {
      links.forEach((link, idx) => {
        if (idx >= 10) {
          return
        }

        InstagramService.getPost(link).then(postData => {
          posts.value[idx] = {
            ...postData.data,
            postMedia: postData.data.postMedia,
          }
        })
      })
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
