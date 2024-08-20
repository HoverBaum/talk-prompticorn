<script setup lang="ts">
/**
 * Layout for questions.
 * Changes the color of text and puts it prominently in the middle.
 */
</script>

<template>
  <div class="slidev-layout baum-questions">
    <slot />
  </div>
</template>

<style scoped>
.slidev-layout.baum-questions {
  color: var(--accent);
}
</style>