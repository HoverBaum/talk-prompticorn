<script setup lang="ts">
/**
 * Prominent and big display of an image.
 */

import { defineProps } from "vue";

interface Props {
  image: string;
}

const props = defineProps<Props>();
</script>

<template>
  <Slide class="flex flex-col items-center jusitfy-center h-full border-box">
    <img
      :src="props.image"
      class="bg-$surface max-h-full max-w-full rounded-md overflow-auto"
      style="box-shadow: var(--shadow); border: var(--border)"
    />

    <div class="mt-4">
      <slot />
    </div>
  </Slide>
</template>
