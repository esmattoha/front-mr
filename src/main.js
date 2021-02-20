import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import Vueswal  from 'vue-swal';

Vue.config.productionTip = false

// Vue.use(Vueswal);

new Vue({
  el:'#app',
  router,
  store,
  vuetify,
  components:{App},
  template:'<App/>',
  render: function (h) { return h(App) }
}).$mount('#app')
