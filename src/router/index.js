require('bootstrap');

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            name: 'homepage',
            path: '/',
            component: resolve => void(require(['../components/homepage.vue'], resolve))
        },
        {
            path: '/userLogin',
            name: 'userLogin',
            meta: {
                showFooter: true,
                showHeader: true
            },
            component: resolve => void(require(['../components/user/userLogin.vue'], resolve)),
        },
        {
            path: '/userRegister',
            name: 'userRegister',
            meta: {
                showFooter: true,
                showHeader: true
            },
            component: resolve => void(require(['../components/user/userRegister.vue'], resolve)),
        },
        {
            path: '/userCont',
            name: 'userCont',
            component: resolve => void(require(['../components/user/userCont.vue'], resolve)),
        },
        {
            path: '/cart',
            name: 'cart',
            component: resolve => void(require(['../components/Cart/Cart.vue'], resolve)),
        },
        {
            name: 'search',
            path: '/search/:data',
            component: resolve => void(require(['../components/search.vue'], resolve))
        },
    ]
})
