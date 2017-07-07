import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexComponent from '../component/indexComponent.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'index', component: IndexComponent }
]

var vueRouter = new VueRouter({
    base: 'notepad',
    // mode: 'history',
    routes: routes
});

export default vueRouter