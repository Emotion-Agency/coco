import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { useGetStory } from './getStory'
import { iStory } from '~/types/story'

type tReturnsStories = () => Promise<{
  story: Ref<iStory>
}>

export const useReturnsStories: tReturnsStories = async () => {
  const story = useState<iStory>('ReturnsStory', () => null)

  const res = await useGetStory('returns-exchanges')
  story.value = res.value

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
