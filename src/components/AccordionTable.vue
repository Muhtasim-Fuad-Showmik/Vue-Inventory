<template>
    <table class="" cellspacing="0">
        <thead>
            <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Seller</th>
                <th>Sales Channel</th>
                <th>Source</th>
                <th>Items</th>
                <th>Status</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, i) in contentData" :key="i">
                <td>OrderID</td>
                <td>Date</td>
                <td>Seller</td>
                <td>SalesChannel</td>
                <td>Source</td>
                <td>Items</td>
                <td>Status</td>
                <td>Button</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: {
        contentData: Array,
        selections: Array
    },
    setup (props) {
        return {}
    }
}
</script>