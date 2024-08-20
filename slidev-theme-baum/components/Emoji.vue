<template>
  <span role="img" :aria-label="$attrs.label || ''" class="emoji"
    ><slot
  /></span>
</template>
<style scoped>
.emoji {
  font-family: "NotoEmoji", sans-serif;
  color: var(--primary);
}
</style>