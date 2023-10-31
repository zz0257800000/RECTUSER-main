<script >
import { RouterLink, RouterView } from 'vue-router'
import NetHomePage from '../components/NetHomePage.vue';

export default {
    components: {
        name: "allNetLink"
    },
    components:{
        NetHomePage,
}
}

</script>













<template>
 <NetHomePage/>


    <h1>プロジェクト</h1>
    <p>2023/9/18～2024/1/5 台南での授業中に制作 ,PS只能連接Github</p>
    <hr>
    <div class="projectALL">
        
    <div class="project1">
        <img src="./../../public/NETLINKPAGE/1.png" height="200px">
        <br>
        <a href="https://zz0257800000.github.io/rectangle1/" target="_blank" class="customLink">方塊一</a>
    </div>
    <div class="project1">
        <img src="./../../public/NETLINKPAGE/2.png" height="200px">
        <br>
        <a href="https://zz0257800000.github.io/rectangle2/" target="_blank" class="customLink">方塊二</a>
    </div>
    <div class="project1">
        <img src="./../../public/NETLINKPAGE/3.png" height="200px">
        <br>
        <a href="https://zz0257800000.github.io/cake/" target="_blank" class="customLink">甜點</a>
    </div>
        

    <br>

    <div class="project1">
        <img src="./../../public/NETLINKPAGE/5.png" height="200px">
        <br>
        <a href="https://zz0257800000.github.io/BOKARAI/" target="_blank" class="customLink">博客來火鍋</a>
    </div>
    <div class="project1">
        <img src="./../../public/NETLINKPAGE/6.png" height="200px">
        <br>
        <a href="https://zz0257800000.github.io/motoHtml/" target="_blank" class="customLink">機車網站</a>
    </div>
    </div>
</template>
<style>

.projectALL{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    font-size: 30pt; 
    flex-wrap: wrap;
    background-color: rgb(255, 255, 255);
    .project1{
        width: 26vw;
    height: 35vh;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
        transition: 0.5s;
       border: 0px solid black;
       flex-direction: column;
       background-color: white;
        &:hover{
            transform: scale(1.2);
            
           
        }
        .customLink{
            text-decoration: none;
            display: inline-block;
            vertical-align: middle;
        

    }
    .customLink:after{
        content: '';
            position: absolute;
            width: 0%;
            height: 2px;
            background-color: rgb(255, 0, 0);
            transition: all .3s linear;
            bottom: 0;
            left: 0;
    }
    .customLink:hover::after{
        width: 100%;

    }}

}
</style>