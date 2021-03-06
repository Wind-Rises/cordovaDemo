// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';


import VueResource from 'vue-resource'

Vue.use(Vant)

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {},
  mounted() {

  },
  methods: {
    initDBHelper: function () {
      alert("123");
      cordova.plugins.DBHelper.coolMethod("hello", onSuccess, onError);
    },
    onSuccess: function () { },
    onerror: function () { },
  },
})
if (process.env.NODE_ENV === 'production') {
  window.document.addEventListener('deviceready', function () { }, false);


  window.setTimeout(function () {
    var e = document.createEvent('Events');
    e.initEvent("deviceready", true, false);
    document.dispatchEvent(e);
  }, 50);
}

