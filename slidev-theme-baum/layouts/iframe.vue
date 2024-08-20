<script setup lang="ts">
/**
 * Apple style browser window with an iframe.
 */
</script>

<template>
  <div class="slidev-layout">
    <Browser
      :url="$attrs.url"
      :fallbackImage="$attrs.fallbackImage"
      class="h-full"
    />
  </div>
</template>