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

</div>

</template>

<style>

.houseContent1{
    background-color: rgb(203, 203, 203);
    height: 150vh;
    width: 100vw;
    border: 0px solid black;
}
</style>