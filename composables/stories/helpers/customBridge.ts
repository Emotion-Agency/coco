import emitter from 'tiny-emitter/instance.js'
import { iStory } from '~/types/story'

type tFunc = (arg0: iStory) => void

export const useCustomBridge = (storyId: number, cb: tFunc) => {
  emitter.on('storyChange', (story: iStory) => {
    if (story?.id === storyId) {
      cb(story)
    }
  })
}
