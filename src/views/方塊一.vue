<script>
import{ RouterLink,RouterView} from 'vue-router'
import NetHomePage from '../components/NetHomePage.vue';
export default {
    data() {
        return {


        }
    },
    components:{
        NetHomePage,
}
}
</script>
<template>
     <NetHomePage/>

<div class="header">

</div>
<div class="second">
<div class="box1">

</div>
<div class="box2">

</div>
<div class="box3">

</div>

</div>
<div class="third">
    <div class="left">

    </div>
<div class="right">
<h1>Title</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iste error obcaecati, blanditiis exercitationem inventore. Sed nihil, minus voluptates rerum placeat tempora fugit ratione exercitationem esse dolore culpa rem assumenda.</p>

</div>

</div>
<div class="footer">

</div>
</template>
<style>
.header{
    height:30vh ;
    background-color: aqua;
}
.second{
    border: 0px solid black;
display: flex;
height: 50vh;
    .box1{
    display: flex;
    background-color: aqua;
    height:40vh;
    width: 30vw;
    margin: 40px;}
    .box2{
    display: flex;
    background-color: aqua;
    height:40vh;
    width: 30vw;
    margin: 40px;}
    .box3{
    display: flex;
    background-color: aqua;
    height:40vh;
    width: 30vw;
    margin: 40px;}
}

.third{
    border: 0px solid black;
display: flex;
height: 80vh;
.left{
background-color: aqua;
height: 70vh;
width: 40vw;
}.right{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
}}.footer{
background-color: aqua;
height: 30vh;
}
</style>