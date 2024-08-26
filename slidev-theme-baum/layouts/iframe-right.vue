<script setup lang="ts">
/**
 * Apple style browser window with an iframe.
 */
</script>

<template>
  <Slide>
    <div class="grid grid-cols-2 w-full h-full">
      <div class="w-full">
        <slot />
      </div>
      <div class="ml-[2rem]">
        <Browser
          :url="$attrs.url"
          :fallbackImage="$attrs.fallbackImage"
          class="h-full w-full"
        />
      </div>
    </div>
  </Slide>
</template>
