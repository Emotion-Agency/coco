import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { useGetStory } from './getStory'
import { iStory } from '~/types/story'

type tPrivacyStories = () => Promise<{
  story: Ref<iStory>
}>

export const usePrivacyStory: tPrivacyStories = async () => {
  const story = useState<iStory>('PrivacyStory', () => null)

  const res = await useGetStory('privacy-policy')
  story.value = res.value

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
