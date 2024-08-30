<script setup lang="ts">
/**
 * Intro layout, expecting to display at least one h1.
 * Internally uses Title component.
 * Adds bubbles in the background, use only for first slide!
 */
</script>

<template>
  <Slide class="h-full flex flex-col justify-center">
    <BubbleBackground />
    <FrostedGlass>
      <Title>
        <slot />
        <p class="mt-2">{{ $slidev.configs.author }}</p>
      </Title>
    </FrostedGlass>
  </Slide>
</template>
