// Vitest global test setup
import { config } from '@vue/test-utils'
import { MotionPlugin } from '@vueuse/motion'

// Globally register MotionPlugin so v-motion directive resolves and avoids warnings
config.global.plugins = [...(config.global.plugins ?? []), MotionPlugin]
