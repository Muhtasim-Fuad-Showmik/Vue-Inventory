<template>
    <table class="w-full text-left" cellspacing="0">
        <thead>
            <tr class="drop-shadow-none">
                <th class="p-2 border-b border-solid border-neutral-300">Order ID</th>
                <th class="p-2 border-b border-solid border-neutral-300">Date</th>
                <th class="p-2 border-b border-solid border-neutral-300">Seller</th>
                <th class="p-2 border-b border-solid border-neutral-300">Sales Channel</th>
                <th class="p-2 border-b border-solid border-neutral-300">Source</th>
                <th class="p-2 border-b border-solid border-neutral-300">Items</th>
                <th class="p-2 border-b border-solid border-neutral-300">Status</th>
                <th class="p-2 border-b border-solid border-neutral-300"></th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, i) in contentData" :key="i">
                <tr class="drop-shadow-none" :class="[
                    item.Selected ? 'drop-shadow-selected' : ''
                ]">
                    <td class="p-2 font-bold border-b border-solid border-neutral-300 text-brandeis-blue">{{ item.OrderID }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.Date }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.Seller }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.SalesChannel }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.Source }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.Items }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">
                        <span class="flex items-center justify-center px-1 py-1 font-bold min-w-20 rounded-2xl drop-shadow-none" :class="statusCSS[item.Status]">
                            <span class="flex items-center">
                                <i class="fa-solid fa-circle text-[6px] mr-1"></i>
                            </span>
                            <span>
                                {{ item.Status.charAt(0).toUpperCase() + item.Status.slice(1) }}
                            </span>
                        </span>
                    </td>
                    <td class="p-2 border-b border-solid border-neutral-300">
                        <div class="drop-shadow-none flex items-center justify-center transition-all ease-in border-b-2 border-black border-solid rounded-full h-7 w-7 bg-brandeis-blue duration-50 hover:border-b-0 hover:translate-y-0.5 cursor-pointer">
                            <i class="text-white fa-solid fa-chevron-down"></i>
                        </div> 
                    </td>
                </tr>
                <tr v-if="item.Dependent && item.Dependent.length > 0">
                    <td colspan="8">Dependent Items</td>
                </tr>
                <tr v-else>
                    <td colspan="8">No details available</td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
let statusCSS = {
    'pending': 'bg-arctic-lime text-olive',
    'fulfilled': 'bg-pistachio text-ao',
    'unfulfilled': 'bg-venetian-red text-bright-maroon'
};

export default {
    props: {
        contentData: Array,
        selections: Array
    },
    data () {
        return {
            statusCSS
        }
    }
}
</script>