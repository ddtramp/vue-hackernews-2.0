<template>
    <div>
        Users
        <ul>
            <li
                    v-for="(item, index) of items"
                    :key="index"
            >
                {{ item.value }}
            </li>
        </ul>
    </div>
</template>

<script>
    const Users = {
        name: 'Users',
        data: function () {
            return {
                d: 'you data'
            }
        },
        title () {
            return 'Users'
        },
        asyncData ({ store, route }) {
            return store.dispatch('FETCH_USERS')
        },
        computed: {
            items () {
                return this.$store.state.users
            }
        }
    }

    export default Users
</script>

<style lang="scss" scoped>

</style>
