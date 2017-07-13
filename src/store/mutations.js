import Vue from 'vue'

export default {
    SET_HOME_ITEMS (state, { items }) {
        state.home_items = items
    },
    SET_USERS: (state, { items }) => {
        state.users = items
    },
    SET_ITEMS: (state, { items }) => {
        state.items = items
    }

}
