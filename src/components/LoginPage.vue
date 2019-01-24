<template>
    <div class= "d-flex flex-column justify-content-center">
        {{names}}
        <div class= "d-flex justify-content-center">   
            <button type="button" class="btn btn-sm btn-primary" @click="callHelloWorld"> Primary </button>
        </div>     
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name : 'CardTest',
    data : function() {
        return {
            names : 'hallo'
        }
    },
    methods : {
        callHelloWorld : function () {
            // this.names = 'HelloWorld'
            // alert("asb") 
            axios
            .get('http://localhost:8080/user')
            .then(response => {this.names =response.data})
        
            this.$emit('test')
        }
    },
    modules: [
    'bootstrap-vue/nuxt',

    // Or if you have custom bootstrap CSS...
    // ['bootstrap-vue/nuxt', { css: false }],
  ]

}
</script>

<style>
.btn {
    height : 25px;
}
</style>
