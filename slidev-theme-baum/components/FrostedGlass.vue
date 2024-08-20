<script lang="ts" setup>
/**
 * Frosted glass background.
 */
</script>

<template>
  <div class="baum-frosted-glass">
    <slot />
  </div>
</template>

<style scoped>
.baum-frosted-glass {
  backdrop-filter: blur(2px);
  padding: 0.5rem;
}
</style>
