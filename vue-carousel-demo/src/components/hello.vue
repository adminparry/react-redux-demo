<template>
  <div>
    <vue-seamless-scroll :data="list" :class-option="classOption" class="table-content">
      <ul>
            <li v-for="(item,index) in list"  :key="index">
                  {{item.text}}
            </li>
      </ul>
    </vue-seamless-scroll>
    <el-carousel height="150px">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
  
</template>

<script>
import elCarouselItem from './carousel/item';
import elCarousel from './carousel/main';

  export default {
    
    name: 'Hello',
    data(){
      return {
        list: [
          { text: '滚动条目文本'},
          { text: '滚动条目文本'},
          { text: '滚动条目文本'},
          { text: '滚动条目文本'},
          { text: '滚动条目文本'},
          { text: '滚动条目文本'},
          
        ]
      }
    },
    components:{
      elCarouselItem,
      elCarousel
    },
    computed: {
      classOption () {
        return {
            singleHeight: 17,
            waitTime: 2000,
            step: 0.5,
            hoverStop: false 
          }
      }
    },
  }
</script>
<style>
.table-content {
    height: 57px;
    overflow: hidden;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.el-carousel {
    position: relative
}

.el-carousel--horizontal {
    overflow-x: hidden
}

.el-carousel--vertical {
    overflow-y: hidden
}

.el-carousel__container {
    position: relative;
    height: 300px
}

.el-carousel__arrow {
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    height: 36px;
    width: 36px;
    cursor: pointer;
    transition: .3s;
    border-radius: 50%;
    background-color: rgba(31,45,61,.11);
    color: #fff;
    position: absolute;
    top: 50%;
    z-index: 10;
    transform: translateY(-50%);
    text-align: center;
    font-size: 12px
}

.el-carousel__arrow--left {
    left: 16px
}

.el-carousel__arrow--right {
    right: 16px
}

.el-carousel__arrow:hover {
    background-color: rgba(31,45,61,.23)
}

.el-carousel__arrow i {
    cursor: pointer
}

.el-carousel__indicators {
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    z-index: 2
}

.el-carousel__indicators--horizontal {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%)
}

.el-carousel__indicators--vertical {
    right: 0;
    top: 50%;
    transform: translateY(-50%)
}

.el-carousel__indicators--outside {
    bottom: 26px;
    text-align: center;
    position: static;
    transform: none
}

.el-carousel__indicators--outside .el-carousel__indicator:hover button {
    opacity: .64
}

.el-carousel__indicators--outside button {
    background-color: #c0c4cc;
    opacity: .24
}

.el-carousel__indicators--labels {
    left: 0;
    right: 0;
    transform: none;
    text-align: center
}

.el-carousel__indicators--labels .el-carousel__button {
    height: auto;
    width: auto;
    padding: 2px 18px;
    font-size: 12px
}

.el-carousel__indicators--labels .el-carousel__indicator {
    padding: 6px 4px
}

.el-carousel__indicator {
    background-color: transparent;
    cursor: pointer
}

.el-carousel__indicator:hover button {
    opacity: .72
}

.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 12px 4px
}

.el-carousel__indicator--vertical {
    padding: 4px 12px
}

.el-carousel__indicator--vertical .el-carousel__button {
    width: 2px;
    height: 15px
}

.el-carousel__indicator.is-active button {
    opacity: 1
}

.el-carousel__button {
    display: block;
    opacity: .48;
    width: 30px;
    height: 2px;
    background-color: #fff;
    border: none;
    outline: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: .3s
}

.carousel-arrow-left-enter,.carousel-arrow-left-leave-active {
    transform: translateY(-50%) translateX(-10px);
    opacity: 0
}

.carousel-arrow-right-enter,.carousel-arrow-right-leave-active {
    transform: translateY(-50%) translateX(10px);
    opacity: 0
}

.el-carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: inline-block;
    overflow: hidden;
    z-index: 0
}

.el-carousel__item.is-active {
    z-index: 2
}

.el-carousel__item--card,.el-carousel__item.is-animating {
    transition: transform .4s ease-in-out
}

.el-carousel__item--card {
    width: 50%
}

.el-carousel__item--card.is-in-stage {
    cursor: pointer;
    z-index: 1
}

.el-carousel__item--card.is-in-stage.is-hover .el-carousel__mask,.el-carousel__item--card.is-in-stage:hover .el-carousel__mask {
    opacity: .12
}

.el-carousel__item--card.is-active {
    z-index: 2
}

.el-carousel__mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: .24;
    transition: .2s
}
</style>