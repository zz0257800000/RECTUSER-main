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

<div class="mukken1">
<div class="muBox">
    <div class="boxrect">

    </div>
    <RouterLink class=" fs-1 " to="/Fandi/fanlist">都新區 A物件<hr></RouterLink>

  

</div>
<div class="muBox">
    <div class="boxrect">

    </div>
    <RouterLink class=" fs-1 " to="/Fandi/fanlist">都新區 B物件<hr></RouterLink>

   

</div>
<div class="muBox">
    <div class="boxrect">

    </div>
    <h1>都新區 C物件<hr></h1>

</div>
<div class="muBox">
    <div class="boxrect">

    </div>
    <h1>都新區 D物件<hr></h1>

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
    display: flex;
    justify-content: center;
   .mukken1{


    height: 150vh;
    width: 60vw;
    border: 0px solid black;
    .muBox{
       display: flex; 
    height: 200px;
    width: 60vw;;
    border: 0px solid black;
    margin-top: 50px;
   
    .boxrect{
        padding: 10px;
        background-color: rgb(95, 95, 95);
        height: 200px;
    width: 200px;
    border-radius: 10px;
    }
    
    }

   }
}
</style>