<template>
    <div>
        <ul>
            <li
                v-for="(item, index) of  items"
                :key="index"
            >
                {{ item.value }}
            </li>
        </ul>
    </div>
</template>
  
<script>
    const Home = {
        name: 'Home',
        data: function () {
            return {
                d: 'you data'
            }
        },
        title () {
            return 'home'
        },
        computed: {
            items () {
                return this.$store.state.home_items
            }
        },
        asyncData ({ store, route }) {
            return store.dispatch('FETCH_HOME_ITEMS')
        }
    }
      
    export default Home
</script>
  
<style lang="scss" scoped>

</style>
