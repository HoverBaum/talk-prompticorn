<script setup lang="ts">
/**
 * Apple style browser window with an iframe.
 */

const props = defineProps<{
  /**
   * Optionally provide a zoom level for the iframe.
   * Usefull to display entire website in  a smaller frame.
   * 0.x is zooming out.
   */
  browserZoom?: number;
}>();
</script>

<template>
  <Slide>
    <div class="grid grid-cols-2 w-full h-full">
      <div class="w-full">
        <slot />
      </div>
      <div class="ml-[2rem] overflow-auto h-full">
        <Browser
          :url="$attrs.url"
          :fallbackImage="$attrs.fallbackImage"
          class="h-full w-full"
          :browserZoom="props.browserZoom || 1"
        />
      </div>
    </div>
  </Slide>
</template>
