<script setup lang="ts">
/**
 * Apple style browser window with an iframe.
 */
</script>

<template>
  <Slide>
    <Browser
      :url="$attrs.url"
      :fallbackImage="$attrs.fallbackImage"
      class="h-full"
    />
  </Slide>
</template>