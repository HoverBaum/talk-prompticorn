<script setup lang="ts">
/**
 * Speaker introduction slide.
 * Takes a speakerImage to be displayed to the left.
 */
</script>


<template>
  <div class="slidev-layout speaker">
    <div class="flex h-full justify-around flex-row">
      <figure class="flex flex-col justify-center">
        <img :src="$attrs.speakerImage" class="relative rounded-md w-60" />
      </figure>
      <div class="flex flex-col justify-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.slidev-layout.speaker img {
  border: var(--border);
  box-shadow: 3px 4px 0px 0px var(--primary);
}
</style>
