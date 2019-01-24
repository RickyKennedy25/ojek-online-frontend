<template>

  <div class="user-home">
    <app-header></app-header>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import header from './Header.vue';
export default {
  name: 'UserHome',
  data : function() {
      return {
          username = ''
      }
  },
  props: {
    msg: String
  },
  components : {
    'app-header' : header,
  },
  mounted(){
      this.username = this.msg;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
