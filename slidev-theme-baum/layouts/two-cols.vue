<script setup lang="ts">
/**
 * Layout for two columns on a single slide.
 * Remember to devide content using "::right::".
 */
</script>

<template>
  <div class="slidev-layout two-columns w-full h-full grid grid-cols-2 gap-8">
    <div class="col-left flex flex-col">
      <slot />
    </div>
    <div class="col-right flex flex-col">
      <slot name="right" />
    </div>
  </div>
</template>