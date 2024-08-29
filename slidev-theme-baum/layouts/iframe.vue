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
    <Browser
      :url="$attrs.url"
      :fallbackImage="$attrs.fallbackImage"
      class="h-full"
      :browserZoom="props.browserZoom"
    />
  </Slide>
</template>