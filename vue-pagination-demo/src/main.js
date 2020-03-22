import Vue from 'vue';
// import Pagination from './components/pagination';
import Index from './index';
import Pagination from '../dist/vue-pagination-pc';
Vue.use(Pagination)
// Vue.component('Pagination', Pagination);

new Vue({
    el: '#app',
    template: '<Index/>',
    components: { Index },

})