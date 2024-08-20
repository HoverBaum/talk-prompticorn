<script setup lang="ts">
/**
 * Prominent and big display of an image.
 */

// TODO: once we can update to a version with working context, use light image for light slides.
</script>

<template>
  <div class="slidev-layout big-image">
    <img :src="$attrs.image" />

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.big-image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.slidev-layout.big-image img {
  max-height: 90%;
  box-shadow: var(--shadow);
  border: var(--border);
  @apply rounded-md;
}
</style>