<template>
    <div class="">
        <banner/>
        <about class="body-content"/>
        <product class="body-content"/>
        <news class="body-content"/>
    </div>
</template>

<script>
import banner from './banner/banner'
import about from './about/about'
import product from './product/product'
import news from './news/news'
export default {
    name:'index',
    components:{
        banner,
        about,
        product,
        news
    }
}
</script>
<style scoped>
.body-content{
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 15px;
}
</style>