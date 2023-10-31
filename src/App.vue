<script setup>
import HomeView from './views/HomeView.vue';
import Footer from './components/Footer.vue';
import{ RouterLink,RouterView } from 'vue-router'
</script>

<template>
  
 <div class="content">
<RouterView/>
 </div>

 
</template>

<style lang="scss" scoped>

.content{

  width: 100vw;
  height: 100vh;
  border: 0px solid rgb(255, 19, 19);
  text-align: center;
}
.footer{
  background-color: rgb(0, 0, 0);
  height: 30vh;
}
</style>
