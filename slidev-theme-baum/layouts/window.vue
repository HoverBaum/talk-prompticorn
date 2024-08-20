<script setup lang="ts">
/**
 * Layout to diplay content in an apple style window.
 */
</script>

<template>
  <div class="slidev-layout">
    <AppleWindow>
      <div class="surface p-4 h-full">
        <slot></slot>
      </div>
    </AppleWindow>
  </div>
</template>