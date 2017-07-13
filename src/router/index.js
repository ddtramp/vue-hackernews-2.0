import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('../views/Home.vue')
const Users = () => import('../views/Users.vue')
const Items = () => import('../views/Items.vue')

export function createRouter() {
    return new Router({
        mode: 'history',
        scrollBehavior: () => ({y: 0}),
        routes: [
            { path: '/', component: Home },
            { path: '/users', component: Users },
            { path: '/items', component: Items }


        ]
    })
}
