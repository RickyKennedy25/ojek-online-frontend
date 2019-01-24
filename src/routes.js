import helloWorld from '@/components/HelloWorld.vue'
import cardTest from '@/components/CardTest.vue'
import loginPage from '@/components/LoginPage.vue'

export default [
    {path:'/', component : helloWorld},
    {path:'/card', component : cardTest},
    {path:'/login',component : loginPage}

]