<script>
import{ RouterLink,RouterView} from 'vue-router'
import houseHeader from '../../components/houseHeader.vue';
import NetHomePage from '../../components/NetHomePage.vue';

export default{
    data(){
        return{
          
}
},
components:{
    houseHeader,
    NetHomePage,

}
}


</script>
<template>
  <NetHomePage/>

<houseHeader/>
<div class="FanUserContenrs">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../../public/上課用圖片/banner1.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../../public/上課用圖片/banner2.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../../public/上課用圖片/banner3.png" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> 
    </div>
    <div class="FanUserFooter">
        
        <RouterLink class="FanUserFooterBtn " to="/Fandi/Sagasu">タッグから探す</RouterLink>
        
       
       <RouterLink class="FanUserFooterBtn " to="/">エリアから探す</RouterLink>
        <RouterLink class="FanUserFooterBtn" to="/">沿線.駅から探す</RouterLink>

    </div>

</template>

<style>


    
    .FanUserFooter{
        background-color: rgb(206, 206, 206);
        height: 50vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .FanUserFooterBtn{ 
            margin: 50px;
            color: white;
            font-size: 25pt;
            border-radius: 10px;
            background-color: grey;
            height: 250px;
            width: 450px;
            display: flex;
        justify-content: center;
        align-items: center;
        
        }
    }

</style>