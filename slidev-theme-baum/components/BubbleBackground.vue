<script setup lang="ts">
const background = getComputedStyle(document.documentElement).getPropertyValue(
  "--background"
);
const primaryColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--primary");
const accentColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--accent"
);
const surfaceColor = getComputedStyle(
  document.documentElement
).getPropertyValue("--surface");
</script>

<template>
  <vue-particles
    id="tsparticles"
    :options="{
      background: {
        color: {
          value: background,
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 600,
          density: {
            enable: true,
            value_area: 1100,
          },
        },
        color: {
          value: primaryColor,
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
          value: {
            min: 0.1,
            max: 0.4,
          },
          animation: {
            enable: true,
            speed: 0.2,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: {
            min: 8,
            max: 12,
          },
          random: true,
        },
        move: {
          enable: true,
          speed: 1.1,
          direction: 'top',
          random: false,
          straight: false,
          speed: 1.5,
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
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
