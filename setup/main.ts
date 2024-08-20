import { defineAppSetup } from '@slidev/types'
import Particles from '@tsparticles/vue3'
import { loadFull } from 'tsparticles'

export default defineAppSetup(({ app }) => {
  // Vue App
  app.use(Particles, {
    init: async (engine) => {
      await loadFull(engine) // you can load the full tsParticles library from "tsparticles" if you need it
      // await loadSlim(engine) // or you can load the slim version from "@tsparticles/slim" if don't need Shapes or Animations
    },
  })
  // Somehow without this console.log the particles won't load…
  console.log('Particles Setup fix 🤔')
})
