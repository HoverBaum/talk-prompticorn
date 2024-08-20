<script setup lang="ts">
import { loadFull } from 'tsparticles'

const particlesInit = async (engine) => {
  await loadFull(engine)
}

const particlesLoaded = async (container) => {
  console.log('Particles container loaded', container)
}

const background = getComputedStyle(document.documentElement).getPropertyValue(
  '--background'
)
const primaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue('--primary')
const accentColor = getComputedStyle(document.documentElement).getPropertyValue(
  '--accent'
)
console.log('primaryColor', primaryColor)
const surfaceColor = getComputedStyle(
  document.documentElement
).getPropertyValue('--surface')
</script>

<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :options="{
      background: {
        color: {
          value: background,
        },
      },
      fpsLimit: 120,
      particles: {
        number: {
          value: 600,
          density: {
            enable: true,
            value_area: 1100,
          },
        },
        color: {
          value: '#0073b9',
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 1,
            color: surfaceColor,
          },
          polygon: {
            nb_sides: 5,
          },
        },
        opacity: {
          value: 0.3472249623182,
          random: true,
          anim: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 10,
          random: true,
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: 'top',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
        },
      },
      retina_detect: true,
    }"
  />
</template>

<style scoped>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
