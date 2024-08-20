<script setup lang="ts">
/**
 * Layout to display an image in a box to the left.
 */
</script>

<template>
  <div class="slidev-layout image-display">
    <div class="grid grid-cols-2 gap-8 h-full">
      <figure class="flex flex-col justify-center items-center">
        <img
          :src="$attrs.image"
          class="rounded-lg shadow-lg z-10 image-display_image"
          style="max-height: 40vh"
        />
        <img
          :src="$attrs.imageLight || $attrs.image"
          class="rounded-lg shadow-lg z-19 image-display_image__light"
          style="max-height: 40vh"
        />
        <figcaption class="mt-2 text-xs w-full">
          {{ $attrs.caption }}
        </figcaption>
      </figure>
      <div>
        <slot name="default" />
      </div>
    </div>
  </div>
</template>

