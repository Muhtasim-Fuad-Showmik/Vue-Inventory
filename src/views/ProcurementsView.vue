<template>
  <div class="w-full h-full">
    <div
      class="flex justify-between max-w-full mb-5 border-b border-solid border-neutral-300"
    >
      <div class="mr-2">
        <p>Hey Fuad!</p>
        <h1 class="text-2xl font-bold">Procurement</h1>
      </div>

      <div class="flex justify-between max-w-full mb-5">
        <button
          class="inline-block px-5 py-2 mb-0 text-sm text-white no-underline transition-all duration-75 ease-in border-0 border-b-4 border-black border-solid rounded-lg cursor-pointer font-Sen w-fit hover:border-b-0 hover:mb-1 hover:translate-y-1 bg-caribbean-green"
        >
          Export to Excel
        </button>
        <button
          class="inline-block px-5 py-2 mb-0 ml-5 text-sm text-white no-underline transition-all duration-75 ease-in border-0 border-b-4 border-black border-solid rounded-lg cursor-pointer font-Sen w-fit hover:border-b-0 hover:mb-1 hover:translate-y-1 bg-caribbean-green"
        >
          Import Orders
        </button>
        <button
          class="inline-block px-5 py-2 mb-0 ml-5 text-sm text-white no-underline transition-all duration-75 ease-in border-0 border-b-4 border-black border-solid rounded-lg cursor-pointer font-Sen w-fit hover:border-b-0 hover:mb-1 hover:translate-y-1 bg-brandeis-blue"
        >
          New Order
        </button>
      </div>
    </div>
    <div
      class="flex justify-between max-w-full p-2 mb-5 border-b border-solid border-neutral-300"
    >
      <div
        class="flex items-center px-2 border border-solid border-black shadow rounded-md h-8 w-64 transition=all duration-100 ease-in text-black focus-within:border-spiro-disco-ball focus-within:shadow-lg"
      >
        <i class="fa-solid fa-magnifying-glass text-brandeis-blue"></i>
        <input
          class="w-full h-5 max-h-full pt-1 pb-1 pl-2 m-0 border-none focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
	  
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const contentData = ref([
      {
        OrderID: "#2323",
        Selected: true,
        Date: "23/10/2022",
        Seller: "Julia Roberts",
        SalesChannel: "Amazon",
        Source: "International",
        Items: 5,
        Status: "fulfilled",
        Dependent: [
          {
            ThumbnailPath: "/Drone.jpg",
            ItemHeader: "DJI Mini 3 Pro",
            ItemCode: "DJI RC",
            Pick: 1,
            Bin: "C011-034",
            Vendor: "DJI",
            OnHand: 23,
          },
          {
            ThumbnailPath: "/Gaming Chair.webp",
            ItemHeader: "GTRACING Gaming Chair with Footrest",
            ItemCode: "WMT-GT802A-WHITE",
            Pick: 3,
            Bin: "C023-6121",
            Vendor: "GTRACING",
            OnHand: 13,
          },
          {
            ThumbnailPath: "/Laptop Cooler.jpg",
            ItemHeader:
              "Laptop Cooling Pad, Laptop Cooler with 6 Quiet Led Fans for 15.6-17 Inch Laptop Cooling Fan Stand",
            ItemCode: "19019154",
            Pick: 2,
            Bin: "LC71-023",
            Vendor: "LIANGSTAR",
            OnHand: 18,
          },
        ],
      },
      {
        OrderID: "#2324",
        Selected: false,
        Date: "31/10/2022",
        Seller: "Roberto Gonzales",
        SalesChannel: "Alibaba",
        Source: "Domestic",
        Items: 2,
        Status: "pending",
        Dependent: [],
      },
      {
        OrderID: "#2325",
        Selected: false,
        Date: "17/12/2022",
        Seller: "Margaret Thatcher",
        SalesChannel: "Ebay",
        Source: "International",
        Items: 2,
        Status: "unfulfilled",
        Dependent: [
          {
            ThumbnailPath: "/Gaming Chair.webp",
            ItemHeader: "GTRACING Gaming Chair with Footrest",
            ItemCode: "WMT-GT802A-WHITE",
            Pick: 3,
            Bin: "C023-6121",
            Vendor: "GTRACING",
            OnHand: 31,
          },
          {
            ThumbnailPath: "/Laptop Cooler.jpg",
            ItemHeader:
              "Laptop Cooling Pad, Laptop Cooler with 6 Quiet Led Fans for 15.6-17 Inch Laptop Cooling Fan Stand",
            ItemCode: "19019154",
            Pick: 2,
            Bin: "LC71-023",
            Vendor: "LIANGSTAR",
            OnHand: 81,
          },
        ],
      },
    ]);

    const selections = ref([]);

    selections.value =
      contentData.value && contentData.value.length > 0
        ? contentData.value.map((item) => item.Selected)
        : [];

    return {
      contentData,
      selections,
    };
  },
};
</script>
