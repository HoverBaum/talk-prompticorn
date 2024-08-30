<script setup lang="ts">
import { ref, reactive, onMounted, onBeforeUnmount, watch } from "vue";

const background = ref("");
const primaryColor = ref("");
const accentColor = ref("");
const surfaceColor = ref("");

// Create a reactive object for particles options
const particlesOptions = reactive({
  background: {
    color: {
      value: background,
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 600,
      density: {
        enable: true,
        value_area: 1100,
      },
    },
    color: {
      value: primaryColor,
    },
    shape: {
      type: "circle",
      stroke: {
        width: 1,
        color: surfaceColor,
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: {
        min: 0.1,
        max: 0.4,
      },
      animation: {
        enable: true,
        speed: 0.2,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: {
        min: 8,
        max: 12,
      },
      random: true,
    },
    move: {
      enable: true,
      speed: 1.1,
      direction: "top",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  retina_detect: true,
});

const updateColors = () => {
  const styles = getComputedStyle(document.documentElement);
  background.value = styles.getPropertyValue("--background").trim();
  primaryColor.value = styles.getPropertyValue("--primary").trim();
  accentColor.value = styles.getPropertyValue("--accent").trim();
  surfaceColor.value = styles.getPropertyValue("--surface").trim();

  console.log("Colors updated", {
    background: background.value,
    primaryColor: primaryColor.value,
    accentColor: accentColor.value,
    surfaceColor: surfaceColor.value,
  });
};

const observeClassChangesOnHtml = () => {
  const observer = new MutationObserver(() => {
    updateColors();
  });

  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    observer.observe(htmlElement, {
      attributes: true,
      attributeFilter: ["class"],
      subtree: false,
    });
  }

  return observer;
};

onMounted(() => {
  updateColors();
  const observer = observeClassChangesOnHtml();

  onBeforeUnmount(() => {
    observer.disconnect();
  });
});

// Optional: Watch color changes and force reactivity if needed
watch([background, primaryColor, accentColor, surfaceColor], () => {
  // Force reactivity to the particles options
  particlesOptions.background.color.value = background.value;
  particlesOptions.particles.color.value = primaryColor.value;
  particlesOptions.particles.shape.stroke.color = surfaceColor.value;
});
</script>

<template>
  <vue-particles id="tsparticles" :options="particlesOptions" />
</template>

<style scoped>
#tsparticles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
}
</style>
