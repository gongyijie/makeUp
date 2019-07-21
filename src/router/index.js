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
            component: resolve => void(require(['../components/user/userLogin.vue'], resolve)),
        },
        {
            path: '/userRegister',
            name: 'userRegister',
            component: resolve => void(require(['../components/user/userRegister.vue'], resolve)),
        },
        {
            path: '/userCont',
            name: 'userCont',
            component: resolve => void(require(['../components/user/userCont.vue'], resolve)),
        },
    ]
})
