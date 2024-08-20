<script setup lang="ts">
/**
 * Layout to display an image on the right half of a slide.
 * This uses the image as a background and thus might crop it.
 */
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full baum-image-left">
    <div class="slidev-layout w-full">
      <slot />
    </div>

    <div class="p-4">
      <div
        class="w-full h-full bg-cover baum-image-left_image rounded-lg"
        :style="{
          backgroundImage: `url(${$attrs.image})`,
          backgroundPosition: 'center',
          border: 'var(--border)',
          boxShadow: 'var(--shadow)',
        }"
      ></div>
    </div>
  </div>
</template>
