<script setup lang="ts">
/**
 * Layout for a big, central statement.
 * Optionally takes an Emoji to be placed in the background.
 */
</script>

<template>
  <Slide class="flex flex-col justify-center text-center">
    <Emoji
      class="color-$primary absolute top-[40%] left-[70%] -translate-x-1/2 -translate-y-1/2 text-[16rem] opacity-30 z-[-1]"
      >{{ $attrs.emoji || "" }}</Emoji
    >

    <slot />
  </Slide>
</template>

<style scoped>
:slotted(h1) {
  @apply text-6xl;
}
</style>
