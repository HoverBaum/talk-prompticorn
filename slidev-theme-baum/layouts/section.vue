<script setup lang="ts">
/**
 * Layout for a new section.
 * Visually follows the title slide.
 */
</script>

<template>
  <Slide class="flex flex-col justify-center">
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