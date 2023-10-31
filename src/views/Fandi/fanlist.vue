<script>
import{ RouterLink,RouterView} from 'vue-router'
import houseHeader from '../../components/houseHeader.vue';

export default{
    data(){
        return{
          
}
},
components:{
    houseHeader,
}
}


</script>
<template>
<houseHeader/>
<div class="houseContent1">
<div class="userlist">
<div class="headone">
<div class="boxR">

</div>
<h1>都新 A物件<hr></h1>
</div>
<div class="listbox">

</div>
</div>
</div>

</template>

<style lang="scss" scoped>

.houseContent1{
    background-color: rgb(203, 203, 203);
    height: 150vh;
    width: 100vw;
    border: 0px solid black;

    .userlist{
        position: relative;
        left: 14%;
        height: 40vh;
        width: 70vw;
    border: 0px solid black;
    
    .headone{
        
        height: 40vh;
        width: 70vw;
    border: 0px solid rgb(100, 100, 100);
display: flex;
justify-content: center;
align-items: center;
position: relative;
right: 10%;
    .boxR{
        height: 200px;
        width: 200px;
        background-color: rgb(136, 136, 136);
        border-radius: 10px;
    }
    }



    .listbox{
        
        background-color: white;
        height: 100vh;
    }}
}
</style>