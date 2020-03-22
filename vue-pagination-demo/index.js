import pagination from './src/components/pagination' 

export default {
    install (Vue, options) {
        Vue.component(pagination.name, pagination)  
      
    }
} 