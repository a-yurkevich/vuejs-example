import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import * as fb from 'firebase'
import vuetify from '../plugins/vuetify'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: "AIzaSyDK8s5SPQwgCrQbPWXULsJBMGOvBvMKYjw",
      authDomain: "itc-ads-e8bfa.firebaseapp.com",
      databaseURL: "https://itc-ads-e8bfa.firebaseio.com",
      projectId: "itc-ads-e8bfa",
      storageBucket: "itc-ads-e8bfa.appspot.com",
      messagingSenderId: "830294659010",
      appId: "1:830294659010:web:dc8c1014e10cea45ed905b"
    });
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})
