<script>
import Card from '../components/Card.vue';
import ContentCard from '../components/ContentCard.vue';
import ChartJSGraph from '../components/ChartJSGraph.vue';

export default {
    components: {
        Card,
        ContentCard,
        ChartJSGraph
    },
    setup(){
        return {}
    }

}
</script>

<template>
    <main class="w-full h-full">
        <div class="flex justify-between max-w-full mb-5 border-b border-solid border-slate-300">
            <div class="mr-5">
                <p>Hey Fuad!</p>
                <h1 class="text-2xl font-bold">Overview</h1>
            </div>
        </div>

        <div class="grid min-[1200px]:grid-cols-3 min-[900px]:grid-cols-2 gap-4 max-w-full mb-5">
            <Card customStyle="w-full" title="Order Insights" icon="fa-solid fa-clipboard-list"
                bgIcon="bg-lemon-chiffon text-lemon-chiffon-txt" :value="62900" valuePrefix="$" :increased="true"
                :increasedByPercentage="20" secondaryTitle="Last Month's Order Value" :secondaryValue="89333"
                secondaryValuePrefix="$" tertiaryTitle="Outstanding" :tertiaryValue="672000" tertiaryValuePrefix="$" />

            <Card customStyle="w-full" title="Inventory Insights" icon="fa-solid fa-dollar-sign"
                bgIcon="bg-winter-wizard text-winter-wizard-txt" :value="182900000" valuePrefix="$"
                valueHeader="Total Stock Value" />

            <Card customStyle="w-full" title="CoGS Insights" icon="fa-solid fa-database"
                bgIcon="bg-magic-mint text-magic-mint-txt" :value="63400" valuePrefix="$" :increased="false"
                :increasedByPercentage="10" secondaryTitle="Cost of Goods Sold %" :secondaryValue="89"
                secondaryValueSuffix=" %" tertiaryTitle="Turn Over" :tertiaryValue="675000" tertiaryValuePrefix="$" />
        </div>

        <div class="p-2">
            <h1>Report</h1>
        </div>

        <div class="flex justify-between min-w-full p-2 mb-5">
            <select class="p-2 font-normal bg-white border rounded-md shadow cursor-pointer font-Sen"
                name="filterTimeInterval" id="filterTimeIntervalId">
                <option value="7">Last 7 days</option>
                <option value="30">Last month</option>
                <option value="180">Last 6 months</option>
                <option value="365">Last year</option>
            </select>
        </div>

        <div class="grid md:grid-cols-2 grid-cols-1 gap-4 min-w-full p-2 mb-5">
            <ContentCard customStyle="w-full" title="Inventory Value per Outlet">
                <div className="h-5 w-14 text-sm mt-2">
                    <span className="w-full h-full rounded-md p-1 bg-neutral-200 text-neutral-700">100%</span>
                </div>

                <div class="mt-2 bg-white">
                    <ChartJSGraph width="100%" height="25px" :chartData="{
                        labels: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July'
                        ],
                        datasets: [
                            {
                                label: 'Inventory Value per Outlet',
                                data: [65, 59, 80, 81, 56, 55, 40],
                                fill: false,
                                borderColor: 'rgb(75, 192, 192)',
                                tension: 0.1
                            }
                        ]
                    }" :options="{
                        responsive: true,
                        maintainAspectRatio: false
                    }" />
                </div>
            </ContentCard>

            <ContentCard customStyle="w-full" title="Monthly Value per Outlet">
                <div className="h-5 w-14 text-sm mt-2">
                    <span className="w-full h-full rounded-md p-1 bg-neutral-200 text-neutral-700">100%</span>
                </div>

                <div class="mt-2 bg-white">
                    <ChartJSGraph width="100%" height="25px" :chartData="{
                        labels: [
                            'January',
                            'February',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July'
                        ],
                        datasets: [
                            {
                                label: 'Monthly Order Value per Outlet',
                                data: [23, 37, 42, 90, 30, 65, 72],
                                fill: false,
                                borderColor: 'rgb(0, 108, 233)',
                                tension: 0.1
                            }
                        ]
                    }" :options="{
                        responsive: true,
                        maintainAspectRatio: false
                    }" />
                </div>
            </ContentCard>
        </div>
    </main>
</template>
