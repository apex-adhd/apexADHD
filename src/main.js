// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/business-casual.css'
import './assets/css/agency.css'



import jQuery from 'jquery'
global.jQuery = jQuery
var Bootstrap = require('bootstrap')

//import jQuery from 'jquery/dist/jquery.js'
//global.jQuery = jQuery
//import 'bootstrap/dist/js/bootstrap.js'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
