<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        name: "allNetLink"
    }
}

</script>













<template>
    <div class="Header0">
        <RouterLink class="customLink" to="/">ホームページ</RouterLink>
        <a href="https://zz0257800000.github.io/rectangle1/" target="_blank" class="customLink">方塊一</a>
        <a href="https://zz0257800000.github.io/rectangle2/" target="_blank" class="customLink">方塊二</a>
        <a href="https://zz0257800000.github.io/cake/" target="_blank" class="customLink">甜點</a>
        <RouterLink class="customLink" to="/Fandi/FandiHome">房地産</RouterLink>
        <RouterLink class="customLink" to="/Expense">記帳</RouterLink>

    </div>
    <div class="Header0">
        <a href="https://zz0257800000.github.io/BOKARAI/" target="_blank" class="customLink">博客來火鍋</a>
        <a href="https://zz0257800000.github.io/motoHtml/" target="_blank" class="customLink">機車網站</a>
        
        
    </div>


   
</template>
<style>
.Header0{
    display: flex;
    justify-content: space-around;
    .customLink{
        text-decoration: none;
       font-size: 30pt; 
    }
}

</style>