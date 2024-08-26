<script setup lang="ts">
/**
 * Layout for questions.
 * Changes the color of text and puts it prominently in the middle.
 */
</script>

<template>
  <Slide
    class="baum-questions h-full flex flex-col justify-center text-center text-$accent"
  >
    <slot />
  </Slide>
</template>

<style scoped>
:slotted(h1) {
  @apply text-6xl;
}

:slotted(p) {
  @apply text-3xl;
}
</style>
