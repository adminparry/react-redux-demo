<template>
    <div class="pagination-p">
        <ul class="page-list">
            <li class="page-button" @click="first" :class="{ 'active': current == 1 }" v-if="isShowStartAndEnd">1</li>
            <li class="page-button fprev" @click="quickPrev" v-show="current >= maxCount"></li>

            <li class="page-button" :class="{active:current == index}" @click="anyClick" v-for="index in indecatorList" :key="index">{{index}}</li>
            

            <li class="page-button fnext" @click="quickNext" v-show="current <= pageTotal - maxCount"></li>
            <li class="page-button total" @click="last" :class="{ 'active': current == pageTotal }"  v-if="isShowStartAndEnd">{{pageTotal}}</li>
        </ul>
        <div class="prev-next">
            <button @click="prevClick" :disabled="current <= 1">&lt;上一页</button>
            <button @click="nextClick" :disabled="current >= pageTotal">下一页&gt;</button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'vuePaginationPc',
    props:{
        'total-count':{
            required: true,
            type: Number,
        },
        'page-length':{
            required: true,
            type: Number,
        },
        'current-page':{
            required: true,
            type: Number,
        },
        'current-change':{
            required: false,
            type: Function,
        }
    },
    data(){
        return {
            // 总页数
            total: this.totalCount,
            // 每页多少条
            pageSize: this.pageLength,
            // 当前页码
            current: this.currentPage,
            // 总页码少于多少全部显示
            maxCount: 5,
            // 是否显示首页尾页
            isShowStartAndEnd: true,
            indecatorList: []

        }
    },
    computed:{
        pageTotal(){
            return Math.ceil(this.total / this.pageSize);
        }
    },
    watch:{
        current(nVal, oVal){
            this.calcPage();
            this.$emit('current-change', arguments);
        }
    },
    created(){  

        this.below();

    },
    methods:{
        below(){
            if(this.current > this.pageTotal){
                console.warn('当前页码超出总页数 ')
                this.current = this.pageTotal;
            }
           
            this.calcPage();
        },
        calcPage(){
            if(this.pageTotal < this.maxCount){
                this.indecatorList = [];
                for (let index = 1; index <= this.pageTotal; index++) {
                    
                    this.indecatorList.push(index);
                }
                this.isShowStartAndEnd = false;
            }else if(this.current < this.maxCount){
                this.indecatorList = [2, 3, 4, 5, 6];
            }else if(this.current > this.pageTotal - this.maxCount){
                const lastNumber = this.pageTotal;
                this.indecatorList = [lastNumber - 5, lastNumber - 4, lastNumber - 3, lastNumber - 2, lastNumber - 1];
            }else{
                this.indecatorList = [this.current - 2, this.current - 1, this.current, this.current + 1, this.current + 2];
            }
        },
        first(){
            this.current = 1;
        },
        last(){
            this.current = this.pageTotal;
        },
        anyClick(ev){
            const text = ev.target.innerText;
            const isInteger = Number.isInteger(Number(text));

            if(!isInteger)return;
            this.current = Number(text);
        },
        prevClick(){
            this.current -= 1;
            this.current = Math.max(1, this.current);
        },
        nextClick(){
            this.current += 1;
            this.current = Math.min(this.current, this.pageTotal)
            
        },
        quickNext(){
            this.current += this.maxCount;
        },
        quickPrev(){
            this.current -= this.maxCount;
        }
    }
}
</script>
<style scoped>
.page-list{
    user-select: none;
    display: inline-block;
    margin: 0;
    padding: 0;
}
.page-list li{
    display: inline-block;
}
.page-button{
    min-width: 30px;
    margin: 0 5px;
    border-radius: 2px;
    color: black;
    background-color: #f4f4f5;
    text-align: center;
}
.page-list .active{
    background-color: #409EFF;
    color: white;
    
}
.page-list .active:hover{
    background-color: #409EFF;
    color: white;
    
}
.page-list .fprev::before{
    content: '...';
}
.page-list .fprev:hover::before{
    content: '<<';
}
.page-list .fnext::before{
    content: '...';
}
.page-list .fnext:hover:before{
    content: '>>';
}
.page-button:hover{
    color: #409EFF;

    cursor: pointer;
}
.prev-next{
    display: inline-block;
}
.prev-next button{
    vertical-align: top;
    cursor: pointer;
}
</style>