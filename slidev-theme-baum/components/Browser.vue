<script setup lang="ts">
/**
 * Apple stlye browser window rendering an iframe.
 */

import { ref } from "vue";

const props = defineProps<{
  /**
   * url to display in this browser window.
   */
  url: string;
  /**
   * A fallback image that can manually be toggled in case the frame doesn't load.
   * Useful if you can't be sure you will have internet at your talks venue.
   * Probably a good practice to have this ;)
   */
  fallbackImage: string;
}>();

const usingFallback = ref(false);

/**
 * Toggle the displaying of the fallback image.
 */
function displayFallback() {
  usingFallback.value = !usingFallback.value;
}
</script>

<template>
  <AppleWindow
    @useFallback="displayFallback"
    :title="usingFallback ? 'Displaying Fallback' : ''"
  >
    <iframe
      v-if="!usingFallback"
      id="frame"
      class="w-full h-full"
      :src="props.url"
    />
    <!-- Very rough fix for images overflowing on some frames... -->
    <div
      class="h-full"
      style="overflow-y: scroll; max-height: 100vh"
      v-if="usingFallback"
    >
      <img class="w-full" :src="props.fallbackImage" />
    </div>
  </AppleWindow>
</template>
