<script setup lang="ts">
/**
 * Title slide without the backgorund bubbles.
 */
</script>

<template>
  <Slide class="flex flex-col justify-center">
    <!-- Need 0.5rem to match frosted glass -->
    <Title class="p-[0.5rem]">
      <slot />
      <p class="mt-2">{{ $slidev.configs.author }}</p>
    </Title>
  </Slide>
</template>