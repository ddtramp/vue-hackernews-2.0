
import * as api from './../api/index'
export default {
    FETCH_HOME_ITEMS ({ state, getters, commit, dispatch, rootState }) {
        return api.fetchItems().then(d => {
            commit({
                type: 'SET_HOME_ITEMS',
                items: d.data
            })
        })
    },
    FETCH_USERS ({ state, getters, commit, dispatch, rootState }) {
        return api.fetchItems().then(d => {
            commit({
                type: 'SET_USERS',
                items: d.data
            })
        })
    },
    FETCH_ITEMS ({ state, getters, commit, dispatch, rootState }) {
        return api.fetchItems().then(d => {
            commit({
                type: 'SET_ITEMS',
                items: d.data
            })
        })
    }

}
