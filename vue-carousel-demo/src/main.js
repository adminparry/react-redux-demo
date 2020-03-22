import Vue from 'vue';
import Hello from './components/hello.vue'

import scroll from 'vue-seamless-scroll'

Vue.use(scroll)

new Vue({
    el: '#app',
    template: '<Hello/>',
    components: { Hello },
    // render: h => h(Hello)
})