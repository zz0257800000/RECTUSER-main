<script>
export default {
  data() {
    return {
      categories: [],
    }
  },
  created() {
    // 模擬從後端或API取得資料
    // 請以實際的資料獲取邏輯取代此處的示範
    this.categories = [
      { id: 1, name: "科技", postCount: 10 },
      { id: 2, name: "旅遊", postCount: 7 },
      { id: 3, name: "美食", postCount: 15 },
      // 根據需求添加更多分類及貼文數量
    ];
  },
}


</script>
<template>
  <RouterLink class=" customLink0 fs-1" to="/">ホームページ</RouterLink>
  <div class="BlogpPage">
    <div class="BlogTitle"><br>
      <h1 class="BlogTitle1">武弄組</h1>
      <h6 class="BlogTitle2">神式技研</h6>
    </div><br>
    <div class="BlogHeader">
      <div class="BlogHeaderLink">
        <RouterLink class="customLink1 " to="/Blog/BlogAbout">About</RouterLink>
        &nbsp; &nbsp;&nbsp; &nbsp;
        <RouterLink class="customLink1 " to="/">Archive</RouterLink>
      </div>
      <input type="text" placeholder="Search" class="BlogHeaderSearch">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>
    <br><br>
    <div class="BlogContents">
      <div class="BlogLeft">
        <div class="BlogLeftTOP">
          <div class="BlogLeftTopPic">
            <img src="../../public/bikeWeb/1.jpg" height=150px>
          </div>
          <h3>武弄組</h3>
          <h5>B-boy + Developer</h5>
          <h6>Yunlin, Taiwan</h6>
          <h3>xxx Posts</h3>
          <hr>
          <div class="BlogLeftTopLink">
           <a href="https://github.com/zz0257800000?tab=repositories"> <i class="fa-brands fa-github"></i></a>
            <a href="https://www.instagram.com/zz025784/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/kami.siyu"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCIgA5TcL1O_WDHc-CIBk0Tg"><i class="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div class="BlogLeftBetween">

        </div>
        <div class="BlogLeftDown">

        </div>
      </div>

      <div class="BlogBetween">
        

      </div>
      <div class="BlogRight">
        <h2>Categories</h2>
       <hr>
        <div>
   <h3>
    <ul>
      
      <li> <RouterLink class=" " to="/Blog/BlogTAINANCODE">台南産業尖兵上課練習</RouterLink>
      </li>
      <li v-for="category in categories" :key="category.id">
        <router-link :to="`/posts/${category.id}`">{{ category.name }}</router-link>
        <span>({{ category.postCount }} 篇貼文)</span>
      </li>
   </ul></h3>
  </div>


      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
$mainColor1: white;

.customLink0 {
  text-decoration: none;
}

.customLink1 {
  text-decoration: none;
  font-size: 20pt;
  color: rgb(112, 112, 112);
}

.BlogpPage {
  z-index: -2;
  margin: 0;
  background-color: rgb(243, 243, 243);
  width: 100vw;
  height: 280vh;

  .BlogTitle {
    .BlogTitle1 {
      font-size: 50pt;
    }

    .BlogTitle2 {
      font-size: 24pt;
      color: rgb(16, 95, 197);
    }
  }

  .BlogHeader {
    height: 10vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .BlogHeaderLink {
      display: flex;
      justify-content: space-around;
      position: relative;
      

    }

    .BlogHeaderSearch {
      border-radius: 10px;
      font-size: 16pt;
      width: 15vw;
      margin-left: 40vw;
      position: relative;
  left: 10%;
    }
 .fa-magnifying-glass{
  position: relative;
  right: 2%;
 }
  }

  .BlogContents {

    display: flex;
    justify-content: space-between;
    border: 0px solid black;
    height: 200vh;
   

    .BlogLeft {
      position: relative;
     left: 5%;
      height: 200vh;
      width: 20vw;
      border: 0px solid black;

      .BlogLeftTOP {
        background-color: $mainColor1;
        height: 58vh;
        width: 340px;
      
        .BlogLeftTopPic{
          height: 25vh;
          border: 0px solid black;
          display: flex;
            align-items: center;
            justify-content: center;
          img{
            
          border-radius: 50%;
        }
        }
        .BlogLeftTopLink{
          justify-content: space-around;
          display: flex;
          border: 0px solid black;
          font-size: 30pt;
        }
        

      }

      .BlogLeftBetween {
        background-color: $mainColor1;
        height: 20vh;
        margin-top: 30px;
        width: 340px;
        border: 0px solid black;

      }

      .BlogLeftDown {
        margin-top: 30px;
        background-color: $mainColor1;
        height: 50vh;
        width: 340px;

      }


    }

    .BlogBetween {
      height: 200vh;
      width: 45vw;
     
    }

    .BlogRight {
      position: relative;
      right: 2%;
      height: 50vh;
      width: 20vw;
      border: 0px solid black;
    }



  }


}</style>