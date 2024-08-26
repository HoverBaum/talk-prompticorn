<script setup lang="ts">
/**
 * Prominent and big display of an image.
 */

// TODO: once we can update to a version with working context, use light image for light slides.
</script>

<template>
  <Slide class="big-image flex flex-col items-center justify-center">
    <img
      :src="$attrs.image"
      class="bg-$surface max-h-[90%] rounded-md"
      style="box-shadow: var(--shadow); border: var(--border)"
    />

    <div class="mt-4">
      <slot />
    </div>
  </Slide>
</template>
