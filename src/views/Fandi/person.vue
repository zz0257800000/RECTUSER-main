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


<div class="PersonRectTeam">

<RouterLink class="personRect1 fs-1" to="/Fandi/FandiHome">
            <div class="PersonRect1"><p>お気に入り物件</p></div>
        </RouterLink>
        <RouterLink class="personRect1 fs-1" to="/Fandi/FandiHome">
            <div class="PersonRect1"><p>お気に入りタッグ</p></div>
            
        </RouterLink>
        <RouterLink class="personRect1 fs-1" to="/Fandi/FandiHome">
            <div class="PersonRect1"><p>ユーザー設定</p></div>
        </RouterLink>
        <RouterLink class="personRect1 fs-1" to="/Fandi/FandiHome">
            <div class="PersonRect1"><p>xxxxxx</p></div>
        </RouterLink>
        <RouterLink class="personRect1 fs-1" to="/Fandi/FandiHome">
            <div class="PersonRect1"><p>oooooo</p></div>
        </RouterLink>
        <RouterLink class="personRect1 fs-1" to="/Fandi/FandiHome">
            <div class="PersonRect1"><p>お問い合せ履歴</p></div>
        </RouterLink>
</div></div>

</template>

<style>
.personRect1{
    color: white;
    text-decoration: none;
}
.houseContent1{
    background-color: rgb(203, 203, 203);
    height: 100vh;
    width: 100vw;
    border: 0px solid black;
    display: flex;
    justify-content: center;
    
    .PersonRectTeam{
        
        padding: 10vw;
        display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    border: 1px solid black;
    height: 120vh;
    width:  100vw;
    .PersonRect1{
        display: flex;
        justify-content: space-around;
    align-items: center;
        background-color: gray;
        height: 200px;
        width: 380px;
        margin: 0;
        border: 0px solid black;
        border-radius: 10px;
    }

}}
</style>