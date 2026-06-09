import { cleanup } from '@testing-library/vue'
import { MotionPlugin } from '@vueuse/motion'
import { config } from '@vue/test-utils'
import { afterEach } from 'vitest'

afterEach(() => {
  cleanup()
})

config.global.plugins.push(MotionPlugin)
