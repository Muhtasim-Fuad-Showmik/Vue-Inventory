<template>
  <div class="bg-white shadow min-h-[100px] rounded-lg p-5" :class="customStyle">
    <div class="font-bold text-lg">
        {{ title }}
    </div>

    <div class="my-2 flex items-center">
      <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl" :class="bgIcon">
        <i :class="icon"></i>
      </div>

      <div class="h-12 mr-2">
        <p class="h-3 text-xs">{{ valueHeader }}</p>
        <span class="text-xl font-bold">
          {{
            (valuePrefix !== "undefined" ? valuePrefix : '') +
            (value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
          }}
        </span>
      </div>
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
  bgIcon: {
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
