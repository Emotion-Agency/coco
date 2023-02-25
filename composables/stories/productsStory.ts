import { Ref } from 'nuxt/dist/app/compat/capi'
import { useCustomBridge } from './helpers/customBridge'
import { iStory } from '~/types/story'

type tProductsStories = () => Promise<{
  stories: Ref<iStory[]>
  listenStory: (arg0: string | string[]) => void
}>

type tResStory = {
  data: {
    stories: iStory[]
  }
}

export const useProductsStories: tProductsStories = async () => {
  const stories = useState<iStory[]>('productsStory', () => [])
  const config = useRuntimeConfig()

  const storyapi = useStoryblokApi()
  const { isInEditor } = useAppState()

  if (!stories.value.length) {
    try {
      const { data }: tResStory = await storyapi.get('cdn/stories/', {
        by_slugs: 'shop/*',
        sort_by: 'name:asc',
        version:
          config.public.ENVIROMENT === 'development' || isInEditor.value
            ? 'draft'
            : 'published',
        cv: Date.now(),
      })

      stories.value = data.stories.filter(s => s.name !== 'Index')
    } catch (e) {
      console.log(e.message)
    }
  }

  const listenStory = (slug: string) => {
    const currentStory = stories.value.find(story => story.slug === slug)

    useCustomBridge(currentStory?.id, evStory => {
      stories.value = stories.value.filter(story => story.slug !== slug)
      stories.value = [...stories.value, evStory]
    })
  }

  return { stories, listenStory }
}
