<script setup lang="ts">
import Card from "../components/Card.vue";
</script>

<template>
  <main class="w-full h-full">
    <div
      class="flex justify-between mb-5 max-w-full border-b border-solid border-slate-300"
    >
      <div class="mr-5">
        <p>Hey Fuad!</p>
        <h1 class="font-bold text-2xl">Overview</h1>
      </div>
    </div>

    <div class="flex justify-between mb-5 max-w-full">
      <Card
        customStyle="w-1/3"
        title="Order Insights"
        icon="fa-solid
      fa-clipboard-list"
        bgIcon="bg-lemon-chiffon text-lemon-chiffon-txt"
        value=62900
        valuePrefix="$"
        increased="{true}"
        increasedByPercentage="{20}"
        secondaryTitle="Last
      Month's Order Value"
        secondaryValue="{89333}"
        secondaryValuePrefix="$"
        tertiaryTitle="Outstanding"
        tertiaryValue="{672000}"
        tertiaryValuePrefix="$"
      />

      <Card
        customStyle="w-1/3 ml-5"
        title="Inventory Insights"
        icon="fa-solid fa-dollar-sign"
        bgIcon="bg-winter-wizard text-winter-wizard-txt"
        value=182900000
        valuePrefix="$"
        valueHeader="Total Stock Value"
      />

      <Card
        customStyle="w-1/3 ml-5"
        title="CoGS Insights"
        icon="fa-solid fa-database"
        bgIcon="bg-magic-mint text-magic-mint-txt"
        value=63400
        valuePrefix="$"
        increased="{false}"
        increasedByPercentage="{10}"
        secondaryTitle="Cost of Goods Sold %"
        secondaryValue="{89}"
        secondaryValueSuffix=" %"
        tertiaryTitle="Turn Over"
        tertiaryValue="{675000}"
        tertiaryValuePrefix="$"
      />
    </div>

    <div class="p-2">
      <h1>Report</h1>
    </div>
  </main>
</template>
