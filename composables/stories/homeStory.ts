import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { iStory } from '~/types/story'

type tHomeStories = () => Promise<{
  story: Ref<iStory>
}>

type tResStory = {
  data: {
    story: iStory
  }
}

export const useHomeStory: tHomeStories = async () => {
  const story = useState<iStory>('HomeStory', () => null)
  const config = useRuntimeConfig()

  const storyapi = useStoryblokApi()
  const { isInEditor } = useAppState()
  const { addToast } = useToasts()

  if (!story.value) {
    try {
      const { data }: tResStory = await storyapi.get('cdn/stories/home', {
        version:
          config.public.ENVIROMENT === 'development' || isInEditor.value
            ? 'draft'
            : 'published',
        cv: Date.now(),
      })

      story.value = data.story
    } catch (e) {
      addToast({
        color: ToastColor.danger,
        id: Date.now().toString(),
        text: 'Oops...an error with our server was occurred. Try to reload page',
      })
      console.log(e.message)
    }
  }

  useCustomBridge(story.value?.id, evStory => {
    story.value = evStory
  })

  return { story }
}
