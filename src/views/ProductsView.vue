<script>
import { ref } from 'vue';
import ProductsTable from '../components/ProductsTable.vue';

export default {
    components: {
        ProductsTable
    },
    setup() {
        const contentData = ref([
            {
                Selected: false,
                ProductName: 'DJI Mini 3 Pro',
                ProductCode: 'DJI RC',
                ThumbnailPath: '/Drone.jpg',
                Source: 'International',
                Stock: 5,
                ExpectedStock: 10,
                Status: 'available',
                StatusText: 'Available'
            },
            {
                Selected: true,
                ProductName: 'GTRACING Gaming Chair with Footrest',
                ProductCode: 'WMT-GT802A-WHITE',
                ThumbnailPath: '/Gaming Chair.webp',
                Source: 'Domestic',
                Stock: 2,
                ExpectedStock: 100,
                Status: 'dwindling',
                StatusText: 'Dwindling'
            },
            {
                Selected: false,
                ProductName: 'Laptop Cooling Pad, Laptop Cooler with 6 Quiet Led Fans for 15.6-17 Inch Laptop Cooling Fan Stand',
                ProductCode: '19019154',
                ThumbnailPath: '/Laptop Cooler.jpg',
                Source: 'International',
                Stock: 0,
                ExpectedStock: 50,
                Status: 'outOfStock',
                StatusText: 'Out of Stock'
            }
        ]);

        const selections = ref([]);

        selections.value =
            contentData.value && contentData.value.length > 0
                ? contentData.value.map((item) => item.Selected)
                : [];

        return {
            contentData,
            selections
        };
    }
};
</script>

<template>
    <div class="w-full h-full max-h-full overflow-hidden">
        <div class="flex justify-between max-w-full mb-5 border-b border-solid border-neutral-300">
            <div class="mr-2">
                <p>Hey Fuad!</p>
                <h1 class="text-2xl font-bold">Products</h1>
            </div>

            <div class="flex justify-between max-w-full mb-5">
                <button
                    class="inline-block px-5 py-2 mb-0 text-sm text-white no-underline transition-all duration-75 ease-in border-0 border-b-4 border-black border-solid rounded-lg cursor-pointer font-Sen w-fit hover:border-b-0 hover:mb-1 hover:translate-y-1 bg-caribbean-green">
                    Export to Excel
                </button>
                <button
                    class="inline-block px-5 py-2 mb-0 ml-5 text-sm text-white no-underline transition-all duration-75 ease-in border-0 border-b-4 border-black border-solid rounded-lg cursor-pointer font-Sen w-fit hover:border-b-0 hover:mb-1 hover:translate-y-1 bg-brandeis-blue">
                    Place Order
                </button>
            </div>
        </div>
        <div class="flex justify-between max-w-full p-2 mb-5 border-b border-solid border-neutral-300">
            <div
                class="flex items-center px-2 border border-solid border-black shadow rounded-md h-8 w-64 transition=all duration-100 ease-in text-black focus-within:border-spiro-disco-ball focus-within:shadow-lg">
                <i class="fa-solid fa-magnifying-glass text-brandeis-blue"></i>
                <input class="w-full h-5 max-h-full pt-1 pb-1 pl-2 m-0 border-none focus:outline-none" type="text"
                    placeholder="Search" />
            </div>

            <div>
                <select name="salesChannel" id="salesChannel"
                    class="p-1 ml-5 rounded cursor-pointer font-Sen outline outline-1">
                    <option value="" selected disabled>Department</option>
                    <option value="122 A">122 A</option>
                    <option value="123 B">123 B</option>
                    <option value="124 C">124 C</option>
                </select>

                <select name="status" id="status" class="p-1 ml-5 rounded cursor-pointer font-Sen outline outline-1">
                    <option value="" selected disabled>Status</option>
                    <option value="available">Available Stock</option>
                    <option value="dwindling">Dwindling Stock</option>
                    <option value="outOfStock">Out of Stock</option>
                </select>

                <select name="moreFilters" id="moreFilters"
                    class="p-1 ml-5 rounded cursor-pointer font-Sen outline outline-1">
                    <option value="" selected disabled>More Filters</option>
                    <option value="international">International</option>
                    <option value="domestic">Domestic</option>
                </select>
            </div>
        </div>

        <div class="grid min-[1200px]:grid-cols-2 min-[900px]:grid-cols-1 gap-10 max-w-full h-full mb-5">
            <div class="h-full min-h-full border-r border-solid border-neutral-300">
                <h2 class="text-xl font-bold mb-5 border-b border-solid border-neutral-300">Departments</h2>
            </div>
            <div>
                <h2 class="text-xl font-bold mb-5 border-b border-solid border-neutral-300">Products</h2>
                <ProductsTable :contentData="contentData" :selections="selections" />
            </div>
        </div>
    </div>
</template>
