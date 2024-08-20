<script setup lang="ts">
/**
 * Layout for a big, central statement.
 * Optionally takes an Emoji to be places in the background.
 */
</script>

<template>
  <div class="slidev-layout baum-statement">
    <span class="baum-statement_emoji">{{ $attrs.emoji || "" }}</span>
    <div class="baum-statement_content">
      <slot />
    </div>
  </div>
</template>