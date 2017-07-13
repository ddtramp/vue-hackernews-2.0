<template>
    <div id="app">
        <div class="nav-tab">
            <router-link to="/">首页</router-link>
            <router-link to="/users">User List</router-link>
            <router-link to="/items">Item LIST</router-link>
        </div>
        <transition name="fade" mode="out-in">
            <router-view class="view"></router-view>
        </transition>
    </div>
</template>

<style lang="scss">
    body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        font-size: 15px;
        background-color: lighten(#eceef1, 30%);
        margin: 0 0;
        color: #34495e;
        overflow-y: scroll;
    }
    .nav-tab {
        display: flex;
        a {
            flex: 1;
            padding: 10px;
            text-align: center;
            text-decoration: none;
            :hover {
                background-color: deepskyblue;
            }
        }
    }

</style>
