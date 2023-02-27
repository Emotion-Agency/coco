import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { useGetStory } from './getStory'
import { iStory } from '~/types/story'

type tHomeStories = () => Promise<{
  story: Ref<iStory>
}>

export const useHomeStory: tHomeStories = async () => {
  const story = useState<iStory>('HomeStory', () => null)

  const res = await useGetStory('home')
  story.value = res.value

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
