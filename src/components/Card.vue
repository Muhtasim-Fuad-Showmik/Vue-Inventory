<template>
    <div
        class="bg-white shadow min-h-[100px] border rounded-lg p-5"
        :class="customStyle"
    >
        <div class="text-lg font-bold">
            {{ title }}
        </div>

        <div class="flex items-center my-2">
            <div
                class="flex items-center justify-center w-10 h-10 text-xl rounded-full"
                :class="bgIcon"
            >
                <i :class="icon"></i>
            </div>

            <div class="h-12 mr-2">
                <p class="h-3 text-xs">{{ valueHeader }}</p>
                <span class="text-xl font-bold">
                    {{
                        (valuePrefix !== 'undefined' ? valuePrefix : '') +
                        (value &&
                            value
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ','))
                    }}
                </span>
            </div>

            <div class="w-16 h-5 text-xs">
                <span
                    class="w-full h-full p-1 rounded bg-pistachio text-ao"
                    v-if="increased && increasedByPercentage > 0"
                >
                    <i class="fa-solid fa-arrow-up"></i>
                    <span>
                        {{ increasedByPercentage }}
                    </span>
                </span>
                <span
                    class="w-full h-full p-1 rounded bg-venetian-red text-bright-maroon"
                    v-else-if="!increased && increasedByPercentage > 0"
                >
                    <i class="fa-solid fa-arrow-down"></i>
                    <span>
                        {{ increasedByPercentage }}
                    </span>
                </span>
            </div>
        </div>

        <div class="flex items-center justify-between my-2">
            <div class="w-1/2">
                <p class="text-sm">{{ secondaryTitle }}</p>
                <p class="text-xl font-bold">
                    <span v-if="secondaryValuePrefix">{{
                        secondaryValuePrefix
                    }}</span>
                    <span v-if="secondaryValue >= 0">{{
                        secondaryValue
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }}</span>
                    <span v-if="secondaryValueSuffix">{{
                        secondaryValueSuffix
                    }}</span>
                </p>
            </div>
            <div class="w-1/2">
                <p class="text-sm">{{ tertiaryTitle }}</p>
                <p class="text-xl font-bold">
                    <span v-if="tertiaryValuePrefix">{{
                        tertiaryValuePrefix
                    }}</span>
                    <span v-if="tertiaryValue >= 0">{{
                        tertiaryValue
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                    }}</span>
                    <span v-if="tertiaryValueSuffix">{{
                        tertiaryValueSuffix
                    }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    customStyle: {
        type: String,
        required: false
    },
    icon: {
        type: String,
        required: false
    },
    bgIcon: {
        type: String,
        required: false
    },
    value: {
        type: Number,
        required: false
    },
    valuePrefix: {
        type: String,
        required: false
    },
    valueHeader: {
        type: String,
        required: false
    },
    increased: {
        type: Boolean,
        required: false
    },
    increasedByPercentage: {
        type: Number,
        required: false
    },
    secondaryTitle: {
        type: String,
        required: false
    },
    secondaryValue: {
        type: Number,
        required: false
    },
    secondaryValuePrefix: {
        type: String,
        required: false
    },
    secondaryValueSuffix: {
        type: String,
        required: false
    },
    tertiaryTitle: {
        type: String,
        required: false
    },
    tertiaryValue: {
        type: Number,
        required: false
    },
    tertiaryValuePrefix: {
        type: String,
        required: false
    },
    tertiaryValueSuffix: {
        type: String,
        required: false
    }
});
</script>
