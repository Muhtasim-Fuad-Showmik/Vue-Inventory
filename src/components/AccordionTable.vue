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
                <tr class="bg-gradient-to-b from-blue-100 to-white h-2 min-h-[8px]" :class="[item.Selected ? '' : 'hidden']">
                    <td colspan="8"></td>
                </tr>
                <tr v-if="item.Dependent && item.Dependent.length > 0" class="pb-2" :class="[item.Selected ? '' : 'hidden']">
                    <td colspan="8">
                        <table
                            class="w-full text-left border-l-4 border-solid border-brandeis-blue rounded shadow-inner"
                            cellspacing="0"
                        >
                            <tbody>
                                <tr v-for="(dependentItem, i) in item.Dependent" :key="i" class="shadow" :class="[i !== 0 ? 'border-t border-solid border-neutral-300' : '']">
                                    <td class="p-2 items-start h-20 px-2 py-1">
                                        <img
                                            class="max-w-[80px] max-h-[80px] align-middle"
                                            :src="dependentItem.ThumbnailPath"
                                            alt=""
                                        />
                                    </td>
                                    <td class="p-2 items-start h-20 px-2 py-1">
                                        <div class="font-bold text-left m-0 text-sm w-64 whitespace-nowrap overflow-hidden text-ellipsis">
                                            {{dependentItem.ItemHeader}}
                                        </div>
                                        <div class="text-left m-0 text-sm mt-1">
                                            {{dependentItem.ItemCode}}
                                        </div>
                                    </td>
                                    <td class="p-2 items-start h-20 px-2 py-1">
                                        <div class="font-bold text-left m-0 text-sm">
                                            Pick
                                        </div>
                                        <div class="text-left m-0 text-sm mt-1">
                                            {{dependentItem.Pick}}
                                        </div>
                                    </td>
                                    <td class="p-2 items-start h-20 px-2 py-1">
                                        <div class="font-bold text-left m-0 text-sm">
                                            Bin
                                        </div>
                                        <div class="text-left m-0 text-sm mt-1">
                                            {{dependentItem.Bin}}
                                        </div>
                                    </td>
                                    <td class="p-2 items-start h-20 px-2 py-1">
                                        <div class="font-bold text-left m-0 text-sm">
                                            Vendor
                                        </div>
                                        <div class="text-left m-0 text-sm mt-1">
                                            {{dependentItem.Vendor}}
                                        </div>
                                    </td>
                                    <td class="p-2 items-start h-20 px-2 py-1">
                                        <div class="font-bold text-left m-0 text-sm">
                                            On
                                            Hand
                                        </div>
                                        <div class="text-left m-0 text-sm mt-1">
                                            {{dependentItem.OnHand}}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr v-else>
                    <td colspan="8" class="pb-2" :class="[item.Selected ? '' : 'hidden']">No details available</td>
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