<script >
import { RouterLink, RouterView } from 'vue-router'
export default {
    components: {
        name: "houseSaleHeader"
    }
}

</script>
<template>
    <div class="FanHeader">

        <RouterLink class="" to="/Fandi/FandiHome">
            <div class="FanLeft"></div>
        </RouterLink>


        <div class="Fanh3">
            <h3>会社案内</h3>
            <h3>|</h3>
            <h3>店舗.アクセス</h3>
        </div>

        <div class="FanRight">
            <i class="fa-solid fa-phone"></i>&phone;010-123456 &nbsp; &nbsp; &nbsp;
            <div class="FanRightBtn">
                <RouterLink class="rWhite1  " to="/Fandi/FandiRoguin">ログイン</RouterLink>
                &nbsp; &nbsp;
                <h3>|</h3>
                <RouterLink class="rWhite1  " to="/Fandi/Otoiawa">お問い合せ</RouterLink>


            </div>

        </div>
    </div>
   
</template>

<style scoped>
.rWhite1{
    color: white;
    font-size: 20pt;
}
.FanRightBtnLink {
    font-size: 20pt;
}

.FanHeader {
    display: flex;
    height: 20vh;
    border: 0px solid black;
    justify-content: space-around;

    .FanLeft {
        width: 150px;
        height: 150px;
        background-color: gray;
    }

    .Fanh3 {
        justify-content: space-around;
        margin-top: 100px;
        display: flex;
    }

    .FanRight {
        margin-top: 60px;
        display: flex;
        justify-content: space-between;


        .FanRightBtn {
            display: flex;
            background-color: gray;
            height: 50px;
            width: 250px;
            border-radius: 10px;

        }
    }
}


</style>