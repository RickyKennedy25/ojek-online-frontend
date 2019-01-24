<template>
    <div id="login" class= "d-flex flex-column justify-content-center align-items-center">
        <div id="form" class= "d-flex flex-column justify-content-center rounded">   
        <h1>Login</h1>
            <form>
                <div class="form-group">
                    <input class="form-control-sm" type="text" name="username" v-model="input.username" placeholder="Input Username"/>
                </div>
                <button type="button" class="btn btn-sm btn-primary" @click="Login"> Login </button>  
            </form>
        </div>     
    </div>

</template>

<script>
import axios from 'axios';

export default {
    name : 'CardTest',
    data : function() {
        return {
            names : 'hallo',
            input : {
                username: '',
            }
        }
    },
    methods : {
        callHelloWorld : function () {
            // this.names = 'HelloWorld'
            // alert("asb") 
            axios
            .get('http://localhost:8080/api/user/username?username=kennedy')
            .then(response => {this.names =response.data})
        
            this.$emit('test')
        },
        Login : function() {
            
            axios
            .get('http://localhost:8080/api/user/username?username='+this.input.username)
            .then(response => {window.console.log(response.data);
                                this.$emit('successLogin',this.input.username);
                             })
            .catch(error => {window.console.log(error.response.status)
                             if(error.response.status == 404) {
                                 alert("unregistered username");
                             }
                            })
        
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

#form {
    margin-top : 200px;
    padding : 20px 50px;
    border: solid 1px #111;
}

h1 {
    margin-bottom: 35px;
}
</style>
