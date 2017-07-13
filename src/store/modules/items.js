/**
 * Created by jack on 11/07/2017.
 */
import * as api from '../../api/index'
export default {
    namespaced: true,
    name: 'items',
    // 重要信息：state 必须是一个函数，
    // 因此可以创建多个实例化该模块
    state: () => ({
        items: []
    }),
    mutations: {
        SET_ITEMS: (state, { items }) => {
            state.items = items
        }
    },
    actions: {
        FETCH_ITEMS ({ state, getters, commit, dispatch, rootState }) {
            return api.fetchItems().then(d => {
                commit({
                    type: 'SET_ITEMS',
                    items: d.data
                })
            })


        }
    }
}