import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';

import router from "./router/router.js";
import AppComponent from './component/app.vue';
import store from './store/index.js';

Vue.use(ElementUI);

const app = new Vue({
    el: "#app",
    template: '<app/>',
    store : store,
    router : router,
    components: {
        "app": AppComponent
    }
});