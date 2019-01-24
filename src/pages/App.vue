<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <CardTest/> -->
    <router-view v-on:test="called"></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CardTest from '../components/CardTest.vue'
// import header from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld
    // CardTest
    // 'app-header' :header
  },
  methods : {
    called : function () {
      alert('eaaaa');
      window.console.log(this.$router.currentRoute);
      this.$router.push({ path: '/'})
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
