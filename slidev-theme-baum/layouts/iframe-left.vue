<script setup lang="ts">
/**
 * Apple style browser window with an iframe.
 */
</script>

<template>
  <div class="slidev-layout">
    <div class="grid gap-4 grid-cols-2 w-full h-full">
      <div class="w-full">
        <slot />
      </div>
      <div>
        <Browser
          :url="$attrs.url"
          :fallbackImage="$attrs.fallbackImage"
          class="h-full w-full"
        />
      </div>
    </div>
  </div>
</template>
