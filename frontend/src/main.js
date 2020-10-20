import Vue from 'vue';
import App from './App.vue';
import Toasted from 'vue-toasted';
import router from './router';
import store from './store';
import './style/index.css';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Toasted, {
    position: 'bottom-center',
    duration: 6000
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
