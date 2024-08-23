<script setup lang="ts">
/**
 * Title slide without the backgorund bubbles.
 */
</script>

<template>
  <div class="slidev-layout baum-intro baum-simple-intro">
    <Title>
      <slot />
      <p class="mt-2">{{ $slidev.configs.author }}</p>
    </Title>
  </div>
</template>