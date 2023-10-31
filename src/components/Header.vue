<script >
import {RouterLink,RouterView}from 'vue-router'
export default{
  components:{
    RouterLink
  }
}
</script>

<template>
    <nav class="topNav">
 <RouterLink to="/">首頁</RouterLink>
    <RouterLink class="routerItem" to="/VtextAndVModel">VtextAndVModel</RouterLink>
    <RouterLink class="routerItem" to="/Vfor">Vfor</RouterLink>
    <RouterLink class="routerItem" to="/Von">Von</RouterLink>
    <RouterLink class="routerItem" to="/Vbind">Vbind</RouterLink>
    <RouterLink class="routerItem" to="/VifAndVshow">v-if &v-show</RouterLink>
    <RouterLink class="routerItem" to="/Props">Props</RouterLink>
    <RouterLink class="routerItem" to="/child">child</RouterLink>

</nav>
</template>

<style lang="scss" scoped>

.topNav{
    width: 100%;
    height: 100%;
    font-size: 24pt;
    display: flex;
    justify-content: space-around;

}
a{
    text-decoration: none;
    transition: 0.3ms;
    &:hover{
        color: aqua;
        background-color: rgb(149, 149, 149);
    }
}
</style>

