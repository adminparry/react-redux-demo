# vue-pagination-pc

> pagination for pc, based Vue2.x

### 安装（Install）
``
npm install vue-pagination-pc -save
``

### 导入（Import）
#### *.js
```javascript
import Pagination from 'vue-pagination-pc'
```

### 可全局注册使用
```javascript
Vue.use(Pagination);
```

### demo
```html
 <template>
    <div>
        <vue-pagination-pc :total-count="1000" :page-length="20" :current-page="2" @current-change="currentChange"/>
    </div>
    
</template>
<script>

export default {
    methods:{
        currentChange(nVal, oVal){

        }
    }
}
</script>
```

### 功能（Api）

| Options         | Type     | Description                 | Default | Necessary | Result |
|-----------------|:--------:|:---------------------------:|:-------:|:---------:|:------:|
| total-count | number | 总条数 | 0 | 是 | |
| page-length | number | 每页条数 | 0 | 是 | |
| current-page | number | 当前页 |  | 是 | |
| current-change | function | 页数变化时执行 |  | 是 | 返回变化后的当前页 |
