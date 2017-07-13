<template>
    <div>
        Items dd
        <spinner :show="loading"></spinner>
        <ul>
            <li v-for="(item, index) of items" :key="item.id" :item="item">{{ item.value }}</li>
        </ul>
    </div>
</template>
  
<script>
    import Spinner from '../components/Spinner.vue'
    import itemsStore from './../store/modules/items'
    const Items = {
        name: 'Items',
        title () {
            return 'Items'
        },
        data: () => ({
            loading: true
        }),

        computed: {
            items () {
                return this.$store.state.items.items
            }
        },
        destroyed () {
            this.$store.unregisterModule('items')
        },
        asyncData ({ store, route }) {
            store.registerModule('items', itemsStore)
            return store.dispatch('items/FETCH_ITEMS')
//            return store.dispatch('FETCH_ITEMS')
        },
        // Fetch comments when mounted on the client
        beforeMount () {

        },

        methods: {

        },

        components: { Spinner }

    }

    export default Items
</script>
  
<style lang="scss" scoped>

</style>
