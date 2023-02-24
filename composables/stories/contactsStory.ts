import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { iStory } from '~/types/story'

type tContactsStories = () => Promise<{
  story: Ref<iStory>
}>

type tResStory = {
  data: {
    story: iStory
  }
}

export const useContactsStory: tContactsStories = async () => {
  const story = useState<iStory>('ContactsStory', () => null)
  const config = useRuntimeConfig()

  const storyapi = useStoryblokApi()
  const { isInEditor } = useAppState()

  if (!story.value) {
    try {
      const { data }: tResStory = await storyapi.get('cdn/stories/contacts', {
        version:
          config.public.ENVIROMENT === 'development' || isInEditor.value
            ? 'draft'
            : 'published',
        cv: Date.now(),
      })

      story.value = data.story
    } catch (e) {
      console.log(e.message)
    }
  }

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
