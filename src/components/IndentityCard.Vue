<template>   
    <div class= "d-flex flex-column justify-content-center">
        <div class= "d-flex justify-content-center">   
            <input type="button" value="callHello" class="btn btn-sm btn-primary">
        </div>
        <div>
            <input type="button" value="callHello" class="btn btn-sm btn-primary">
        </div>
        <div class= "d-flex justify-content-center">   
            <button type="button" class="btn btn-sm btn-primary"> Primary </button>
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
        
            this.$emit()
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
