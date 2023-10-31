<script>
import{ RouterLink,RouterView} from 'vue-router'
import BlogHeader from '../../components/BlogHeader.vue';
export default {
    data() {
        return {


        }
    },
    components:{
        BlogHeader,
}
}
</script>

<template>



<BlogHeader/>


<div class="blogContent">
    <div class="blogCon">
<iframe src="../../../codeBox.html" frameborder="0" class="iframebox"></iframe>
     
    
</div>
</div>
</template>
<style lang="scss" scoped>


.blogContent{
    z-index: 2;
    border: 0px solid black;
    background-color: white;
    position: relative;
    bottom: 240%;
    left: 27%;
    display: flex;
    
    width: 49vw;
    height: 160vh;
    flex-direction: column;
    .blogCon{
        margin: 20px;
      .iframebox{
        height: 60vh;
        width: 45vw;
      }

    }




}



</style>