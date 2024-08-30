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
    class="apple-window console text-xs relative z-10 pt-6 flex flex-col bg-$surface max-h-full"
  >
    <div
      class="absolute top-0 flex flex-row w-full px-3 py-2 border-b-1 dark:border-gray-600"
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
        class="absolute top-1 z--1 flex flex-row w-full justify-center items-center"
      >
        <span class="inline-block">{{ props.title }}</span>
      </div>
    </div>
    <div class="flex-grow max-h-full overflow-hidden">
      <slot />
    </div>
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
