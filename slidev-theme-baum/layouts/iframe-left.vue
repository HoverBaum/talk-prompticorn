<script setup lang="ts">
/**
 * Apple style browser window with an iframe.
 */
</script>

<template>
  <div class="slidev-layout">
    <div class="grid grid-cols-2 w-full h-full">
      <div style="max-height: 100%; overflow: scroll">
        <Browser
          :url="$attrs.url"
          :fallbackImage="$attrs.fallbackImage"
          class="h-full w-80"
          style="margin: 0 auto"
        />
      </div>
      <div class="w-full pl-10">
        <slot />
      </div>
    </div>
  </div>
</template>