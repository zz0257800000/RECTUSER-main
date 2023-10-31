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

    <div class="RoguinPage">
<p>Email</p>
<input type="text" placeholder="xxx@gmail.com">
<p>Password</p>
<input type="text" placeholder="Suji Sen">
<br>
<input type="checkbox">ログイン保&nbsp;&nbsp;

<RouterLink class="fs-1" to="/網站首頁" >新規登録</RouterLink>
<br>　
<RouterLink class="rWhite1 fs-1" to="/Fandi/person" >ログイン</RouterLink>


</div></div>
</template>

<style>
.rWhite1{
    background-color: gray;
    color: white;
    font-size: 20pt;
}
.houseContent1{
    background-color: rgb(203, 203, 203);
    height: 150vh;
    width: 100vw;
    border: 0px solid black;
    .RoguinPage{
        height: 50vh;
    width: 50vw;
        border: 0px solid black;
    position: relative;
    top: 10%;
    left: 0%;
    }
  

}
</style>