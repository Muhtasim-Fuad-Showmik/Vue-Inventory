<template>
    <Line :data="chartData" :options="options" />
</template>

<script>
// Importing all necessities from chart js library
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'vue-chartjs';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default {
    name: 'App',
    props: {
        height: String,
        width: String,
        chartData: Object,
        options: Object
    },
    components: {
        Line
    }
};
</script>
