import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { useGetStory } from './getStory'
import { iStory } from '~/types/story'

type tAboutStories = () => Promise<{
  story: Ref<iStory>
}>

export const useAboutStory: tAboutStories = async () => {
  const story = useState<iStory>('aboutStory', () => null)

  const res = await useGetStory('about')
  story.value = res.value

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
