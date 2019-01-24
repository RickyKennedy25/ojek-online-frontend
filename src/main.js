import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import Routes from './routes'
import App from './pages/App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  routes : Routes,
  mode : 'history'
});

new Vue({
  el:'#app',
  render: h => h(App),
  router:router
}).$mount('#app')
