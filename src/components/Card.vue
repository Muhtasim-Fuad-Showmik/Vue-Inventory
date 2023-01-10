<template>
  <div class="bg-white shadow min-h-[100px] rounded-lg p-5" :class="customStyle">
    <div class="font-bold text-lg">
        {{ title }}
    </div>
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
  icon: {
    type: String,
    required: false,
  },
  bg: {
    type: String,
    required: false,
  },
  value: {
    type: Number,
    required: false,
  },
  valuePrefix: {
    type: String,
    required: false,
  },
  valueHeader: {
    type: String,
    required: false,
  },
  increased: {
    type: Boolean,
    required: false,
  },
  increasedByPercentage: {
    type: Number,
    required: false,
  },
  secondaryTitle: {
    type: String,
    required: false,
  },
  secondaryValue: {
    type: Number,
    required: false,
  },
  secondaryValuePrefix: {
    type: String,
    required: false,
  },
  secondaryValueSuffix: {
    type: String,
    required: false,
  },
  tertiaryTitle: {
    type: String,
    required: false,
  },
  tertiaryValue: {
    type: Number,
    required: false,
  },
  tertiaryValuePrefix: {
    type: String,
    required: false,
  },
  olderValueSuffix: {
    type: String,
    required: false,
  },
});
</script>
