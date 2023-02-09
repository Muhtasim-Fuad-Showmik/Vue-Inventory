<template>
    <table class="w-full text-left" cellspacing="0">
        <thead>
            <tr class="drop-shadow-none">
                <th class="p-2 border-b border-solid border-neutral-300">Image</th>
                <th class="p-2 border-b border-solid border-neutral-300">Product</th>
                <th class="p-2 border-b border-solid border-neutral-300">Source</th>
                <th class="p-2 border-b border-solid border-neutral-300">Stock</th>
                <th class="p-2 border-b border-solid border-neutral-300">Status</th>
                <th class="p-2 border-b border-solid border-neutral-300"></th>
            </tr>
        </thead>
        <tbody>
            <template v-for="(item, i) in contentData" :key="i">
                <tr class="drop-shadow-none" :class="[
                    item.Selected ? 'drop-shadow-selected' : ''
                ]">
                    <td class="p-2 font-bold border-b border-solid border-neutral-300 text-brandeis-blue">
                        <img class="max-w-[60px] max-h-[60px] align-middle" :src="item.ThumbnailPath" />
                    </td>
                    <td class="p-2 border-b border-solid border-neutral-300">
                        <div
                            class="font-bold text-left m-0 text-sm w-64 whitespace-nowrap overflow-hidden text-ellipsis">
                            {{ item.ProductCode }}</div>
                        <div class="text-left m-0 text-xs w-64 whitespace-nowrap overflow-hidden text-ellipsis">{{
                            item.ProductName
                        }}</div>
                    </td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.Source }}</td>
                    <td class="p-2 border-b border-solid border-neutral-300">{{ item.Stock + '/' + item.ExpectedStock }}
                    </td>
                    <td class="p-2 border-b border-solid border-neutral-300">
                        <span
                            class="flex items-center justify-center px-1 py-1 font-bold min-w-20 rounded-2xl drop-shadow-none"
                            :class="statusCSS[item.Status]">
                            <span class="flex items-center">
                                <i class="fa-solid fa-circle text-[6px] mr-1"></i>
                            </span>
                            <span>
                                {{ item.StatusText }}
                            </span>
                        </span>
                    </td>
                    <td class="p-2 border-b border-solid border-neutral-300">
                        <div class="drop-shadow-none flex items-center justify-center transition-all ease-in border-b-2 border-black border-solid rounded-full h-7 w-7 duration-50 hover:border-b-0 hover:translate-y-0.5 cursor-pointer"
                            :class="[
                                item.Selected ? 'bg-caribbean-green' : 'bg-brandeis-blue'
                            ]">
                            <i class="text-white fa-solid" :class="[
                                item.Selected ? 'fa-check' : 'fa-plus'
                            ]"></i>
                        </div>
                    </td>
                </tr>
                <tr class="bg-gradient-to-b from-blue-100 to-white h-2 min-h-[8px]"
                    :class="[item.Selected ? '' : 'hidden']">
                    <td colspan="8"></td>
                </tr>
            </template>
        </tbody>
    </table>
</template>

<script>
let statusCSS = {
    'dwindling': 'bg-arctic-lime text-olive',
    'available': 'bg-pistachio text-ao',
    'outOfStock': 'bg-venetian-red text-bright-maroon'
};

export default {
    props: {
        contentData: Array,
        selections: Array
    },
    data() {
        return {
            statusCSS
        }
    }
}
</script>