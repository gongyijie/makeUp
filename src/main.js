// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('./bootstrap');

import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/assets/css/plugins.css'
import '../src/assets/css/helper.css'
import '../src/assets/css/style.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use({ axios, VueAxios});
Vue.prototype.$axios = axios

Vue.use(ElementUI)

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
