<template>
    <div>
        <vue-pagination-pc :total-count="1000" :page-length="20" :current-page="2" @current-change="currentChange"/>
    </div>
    
</template>
<script>

export default {
    methods:{
        currentChange(){

        }
    }
}
</script>