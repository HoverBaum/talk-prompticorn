<script setup lang="ts">
/**
 * An Apple style window with a dark bar up top with three colored dots.
 */

const emit = defineEmits<{
  (e: "useFallback"): void;
}>();

const props = defineProps<{
  /**
   * The windows title.
   */
  title: string;
}>();

function onFallbackClick() {
  emit("useFallback");
}
</script>

<template>
  <div
    class="
      apple-window
      baum-window
      console
      text-xs
      relative
      object-cover
      z-10
      flex-grow
      pt-6
    "
    style="background-color: var(--surface); max-height: 100%"
  >
    <div
      class="absolute top-0 flex flex-row w-full px-3 py-2"
      style="height: 1.5rem"
    >
      <ul class="grid grid-cols-4 gap-3">
        <li class="!m-0 rounded w-2 h-2 bg-red-400 inline-block"></li>
        <li class="!m-0 rounded w-2 h-2 bg-yellow-300 inline-block"></li>
        <li class="!m-0 rounded w-2 h-2 bg-green-500 inline-block"></li>
        <li
          @click="onFallbackClick"
          class="!m-0 rounded w-2 h-2 bg-purple-500 inline-block secret-button"
        ></li>
      </ul>
      <div
        class="
          absolute
          top-1
          z--1
          flex flex-row
          w-full
          justify-center
          items-center
        "
      >
        <span class="inline-block">{{ props.title }}</span>
      </div>
    </div>
    <slot />
  </div>
</template>

<style scoped>
.apple-window {
  box-shadow: var(--shadow);
  border: var(--border);
  border-radius: 0.375rem 0.375rem 0 0;
}

.apple-window .secret-button {
  opacity: 0;
  cursor: pointer;
}

.apple-window .secret-button:hover {
  opacity: 1;
}
</style>