<template>
  <div>
    {{ useRuntimeConfig().privateValue }}
    <div>This should be server rendered: {{ data }}</div>
  </div>
</template>
<script setup lang="ts">
const { data } = await useFetch("/api/test");
</script>
