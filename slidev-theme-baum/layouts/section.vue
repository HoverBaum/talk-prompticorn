<script setup lang="ts">
/**
 * Layout for a new section.
 * Visually follows the title slide.
 */
</script>

<template>
  <Slide class="flex flex-col justify-center">
    <Emoji
      class="color-$primary absolute top-1/3 left-[80%] -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-30 z-[-1]"
      >{{ $attrs.emoji || "" }}</Emoji
    >

    <!-- To match simple intro -->
    <Title class="p-[0.5rem]">
      <slot />
    </Title>
  </Slide>
</template>

<style scoped>
:slotted(p) {
  @apply mt-2;
}
</style>