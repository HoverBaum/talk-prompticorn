<script setup lang="ts">
/**
 * Intro layout, expecting to display at least one h1.
 * Internally uses Title component.
 * Add a bubble background on the first slide and only!
 */
</script>


<template>
  <div class="slidev-layout baum-intro">
    <BubbleBackground />
    <FrostedGlass>
      <Title>
        <slot />
      </Title>
    </FrostedGlass>
  </div>
</template>
