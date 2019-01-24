<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <CardTest/> -->
    <router-view v-on:successLogin="successLogin" :msg=this.userLoggedin.username></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CardTest from '../components/CardTest.vue'
// import header from '@/components/Header.vue'

export default {
  name: 'app',
  data : function() {
    return {
      userLoggedin: {
        username : '',
        role : ''
      }

    }
  },
  components: {
    // HelloWorld
    // CardTest
    // 'app-header' :header
  },
  methods : {
    successLogin : function (event) {
      window.console.log(this.$router.currentRoute);
      this.userLoggedin.username = event;
      this.$router.push({ path: '/hello'})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
