<template>
  <div class="bg-white shadow min-h-[100px] border rounded-lg p-5" :class="customStyle">
    <span class="text-lg font-bold">{{ title }}</span>
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  customStyle: {
    type: String,
    required: false,
  },
});
</script>
