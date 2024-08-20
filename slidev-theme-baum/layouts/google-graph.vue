<script setup lang="ts">
/**
 * STATUS: IN_DEVELOPMENT!!!
 *
 * Layout to display published Google Sheet Sharts with more info.
 *
 * Publish your chart frist, follow:
 * https://support.google.com/docs/answer/1047436
 *
 * See styles.css for styling.
 */

import { onUpdated } from "vue";

// Find iframe and scale it to fit the available widt of container, using specified with and height of iframe.
onUpdated(() => {
  console.log("Adjusting");
  const iframe = document.querySelector(
    ".slidev-layout.google-graph iframe"
  ) as HTMLIFrameElement;
  const container = document.querySelector(
    ".slidev-layout.google-graph .iframe-container"
  ) as HTMLDivElement;
  const width = parseInt(iframe.getAttribute("width"), 10);
  const height = parseInt(iframe.getAttribute("height"), 10);
  const scale = Math.min(
    container.offsetWidth / width,
    container.offsetHeight / height
  );
  iframe.style.transform = `scale(${scale})`;

  // Move frame left to border of cotainer.
  iframe.style.position = "absolute";
  // We need to scale the distance ourselves because scaling teh iframe doesn't affect left.
  iframe.style.left = `-${Math.round(
    (iframe.getBoundingClientRect().x - container.getBoundingClientRect().x) *
      scale
  )}px`;
});
</script>

<template>
  <div class="slidev-layout google-graph w-full h-full grid grid-cols-2 gap-8">
    <div class="iframe-container relative">
      <slot name="frame" />
    </div>
    <div>
      <slot name="default" />
    </div>
  </div>
</template>