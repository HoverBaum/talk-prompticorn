<script setup lang="ts">
/**
 * Layout for a new section.
 * Visually follows the title slide.
 */

import { defineProps } from "vue";

// Define the props
interface Props {
  emoji?: string;
}

// Define the props with default values
const props = defineProps<Props>();
</script>

<template>
  <Slide class="flex flex-col justify-center bg-$surface">
    <Emoji
      v-if="props.emoji"
      class="color-$primary absolute top-1/3 left-[80%] -translate-x-1/2 -translate-y-1/2 text-[12rem] opacity-30"
      >{{ props.emoji }}</Emoji
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
