import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { useGetStory } from './getStory'
import { iStory } from '~/types/story'

type tContactsStories = () => Promise<{
  story: Ref<iStory>
}>

export const useContactsStory: tContactsStories = async () => {
  const story = useState<iStory>('ContactsStory', () => null)

  const res = await useGetStory('contacts')
  story.value = res.value

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
