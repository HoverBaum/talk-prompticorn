<script setup lang="ts">
/**
 *
 */
</script>

<template>
  <div class="w-full h-full p-4">
    <div
      class="slidev-layout w-full h-full rounded-lg"
      :style="{
        backgroundImage: `url(${$attrs.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: 'var(--shadow)',
      }"
    >
      <slot />
    </div>
  </div>
</template>
