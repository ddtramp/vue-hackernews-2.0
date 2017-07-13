import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

import items from './modules/items'

export function createStore() {
    return new Vuex.Store({
        name: 'index',
        state: {
            items: [],
            users: [],
            home_items: []
        },
        modules: {
            items
        },
        actions,
        mutations,
        getters
    })
}
