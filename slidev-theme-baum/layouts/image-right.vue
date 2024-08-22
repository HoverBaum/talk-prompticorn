<script setup lang="ts">
/**
 * Layout to display an image on the right half of a slide.
 * This uses the image as a background and thus might crop it.
 */

import { ref, onMounted, onBeforeUnmount, watch } from "vue";

// Define the props
const props = defineProps<{
  image: string;
  darkModeImage?: string; // Optional prop for dark mode image
}>();

// Reactive reference to hold the background image URL
const backgroundImage = ref(`url(${props.image})`);

const updateBackgroundImage = () => {
  const isDarkMode = document.documentElement.classList.contains("dark");
  backgroundImage.value = `url(${
    isDarkMode && props.darkModeImage ? props.darkModeImage : props.image
  })`;
};

onMounted(() => {
  // Initial image setup
  updateBackgroundImage();

  // Set up a MutationObserver to watch for changes in the class attribute of the root HTML element
  const observer = new MutationObserver(() => {
    updateBackgroundImage();
  });

  // Start observing the HTML element's class attribute
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  // Clean up the observer when the component is unmounted
  onBeforeUnmount(() => {
    observer.disconnect();
  });
});

watch(() => props.image, updateBackgroundImage); // Update if the image prop changes
watch(() => props.darkModeImage, updateBackgroundImage); // Update if the darkModeImage prop changes
</script>

<template>
  <div class="grid grid-cols-2 w-full h-full baum-image-left">
    <div class="slidev-layout w-full">
      <slot />
    </div>

    <div class="p-4">
      <div
        class="w-full h-full bg-cover baum-image-left_image rounded-lg"
        :style="{
          backgroundImage: backgroundImage,
          backgroundPosition: 'center',
          border: 'var(--border)',
          boxShadow: 'var(--shadow)',
        }"
      ></div>
    </div>
  </div>
</template>
