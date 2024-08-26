<script setup lang="ts">
/**
 * Intro layout, expecting to display at least one h1.
 * Internally uses Title component.
 * Add a bubble background on the first slide and only!
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
