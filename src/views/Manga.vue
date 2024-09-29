<script>
export default{
    data(){
        return{
           
}
},
mounted() {
    // 引用音乐播放器元素
    const musicPlayer = this.$refs.musicPlayer;
    musicPlayer.currentTime = 69; // 1分 = 60秒 + 9秒 = 69秒
    musicPlayer.volume = 0.5;

    // 开始播放音乐
    musicPlayer.play();
  }
}


</script>
<template>
     <RouterLink class="customLink fs-1" to="/">ホームページ</RouterLink>
     <h1 class="BlogTitle1">魔剣の継承者</h1>
    <!-- <img src="../../public/mp3/mp3圖/fripSide - double Decades(Audio).jpg" alt=""> -->
    
      <div class="CarouselTeam page">
      <div class="Carousel1 " alt="輪播">
        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../public/漫畫/19.jpg" class="d-block w-150" width="400px" height="200px" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./../../public/漫畫/20.jpg" class="d-block w-150" width="400px" height="200px" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./../../public/漫畫/21.jpg" class="d-block w-150"  width="400px" height="200px" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    <div class="Carousel2 " alt="輪播">
        <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="./../../public/漫畫/24.jpg" class="d-block2 w-100 " width="400px" height="200px" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./../../public/漫畫/22.jpg" class="d-block2 w-150" width="600px" height="200px" alt="...">
        </div>
        <div class="carousel-item">
          <img src="./../../public/漫畫/23.jpg" class="d-block2 w-150"  width="600px" height="200px" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    </div>
    <div>
    <!-- 音乐播放器 -->
    <audio ref="musicPlayer" autoplay loop controls>
      Your browser does not support the audio element.
    </audio>
  </div>
    
      </div>
      <div class="content0 page">
        <div class="left0">
          <img class="p0" src="./../../public/漫畫/插圖4.jpg" width="400" height="420">
          <br><br>
          <br><br>
          <div class="date-display">
        <p>{{ currentDate }}</p>
      </div>
    </div>
        
        <div class="between0">
          <div class="top0">
            <img class="pb0" src="./../../public/漫畫/-1.jpg" width="360px" height="200px">
            <div class="pt0">
            <h3>[01話]魔剣の継承者</h3>
            <b>作者:武弄組</b>
            <h6>2023/10/13</h6>
           
          </div>
          </div>
          <div class="down0">
            <div class="nineArea">
    <div class="nums">
      <img src="./../../public/漫畫/18.jpg" width="190px" height="180px" alt="">
      <br>
      <b>石川健悟</b>
    </div>
    <div class="nums">
      <img src="./../../public/漫畫/15.jpg" width="190px" height="180px" alt="">
      <br><b>木村愛乃</b>
    </div>
    <div class="nums">
      <img src="./../../public/漫畫/16.jpg" width="190px" height="180px" alt="">
      <br><b>遠藤良人</b>
    </div>
    <div class="nums">
      <img src="./../../public/漫畫/14.jpg" width="190px" height="180px" alt="">
      <br><b>遠藤綾音</b>
    </div>
    <div class="nums">
      <img src="./../../public/漫畫/13.jpg" width="190px" height="180px" alt="">
     <br> <b>山本高助</b>
    </div>
    <div class="nums">
      <img src="./../../public/漫畫/17.jpg" width="190px" height="180px" alt="">
      <br><b>エリオローゼ.えりあ</b>
    </div>
    <div class="nums">
      <img src="" alt="">
      <br><b>板原修司</b>
    </div>
    <div class="nums">
      <img src="" alt="">
      <br><b>回陽理奈</b>
    </div>
    <div class="nums">
      <img src="" alt="">
      <br><b>山口 城</b>
    </div>
            </div>
          </div>
          <div class="footer0">
    
          </div>
        </div>
      <hr>
        <div class="right0">
          <img class="pr0" src="./../../public/漫畫/插圖3.jpg" width="300" height="420">
          
          <input type="text"  placeholder="作品名が作家名で検索" >
        <hr>
        <h5><a href="">あなたの閲覧履歴</a></h5>
        <hr>
        <h5><a href="">連載一覧</a></h5>
        <hr>
        <h5><a href="">読切シリーズ</a></h5>
        <hr>
        <h5><a href="">コミックス情報</a></h5>
        <hr><br>
        <a href=""><img src="./../../public/漫畫/app_appstore_ja.jpg" width="200px" height="70px"></a>
        <a href=""><img src="./../../public/漫畫/app_googleplay_ja.jpg" width="200px" height="70px"></a>
    
        <br><br>
        <p>今すぐダウンロード！
    ※スマートフォン・タブレットからお試しください</p>
        </div>
      </div>
      <div class="second page">
        <h1>イラスト</h1>
        <div class="secondPicture">
          <img class="p1" src="./../../public/漫畫/2.jpg" alt="">
          <img class="p1" src="./../../public/漫畫/6.jpg" alt="">
          <img class="p1" src="./../../public/漫畫/11.jpg" alt="">
        </div>
      </div>
      <div class="footer">
    
    </div>
    </template>
    <style lang="scss" scoped>
    a{
      text-decoration: none;
    }
    .page {
      width: 98vw;
      margin: 10px;
    }
    
    .BlogTitle1 {
      font-size: 50pt;
    }
    .CarouselTeam{
      display: flex;
      border: 1px solid rgb(6, 6, 6);
      height: 32vh;
      background-color: #000000;
    .Carousel1 {
      border: 1px solid rgb(6, 6, 6);
      height: 30vh; 
      width:400px; 
      margin: 10px;
      height :202px;
    }
    .Carousel2 {
      border: 0px solid rgb(6, 6, 6);
       
      width:600px; 
      margin: 10px;
      height :202px;
      
    }
    .music-player{
      border: 1px solid rgb(255, 90, 90);
    }
    }
    .content0{
      
      height: 150vh;
      display: flex;
      justify-content: space-between;
      border: 1px solid rgb(6, 6, 6);
      
    .left0{
    
    
    height: 600px;
      border: px solid rgb(6, 6, 6);
    .p0{
      height: 424px;
      border: 2px solid rgb(6, 6, 6);
      transition: 0.3s;
    &:hover{
      transform: scale(1.2, 1.2);
    }}
    .date-display {
      height: 100vh;
      font-size: 2em;.time {
      font-family: "Arial", sans-serif;
     
    }
    } 
    }
    
    .between0{
      margin: 10px;
      border: 0px solid rgb(6, 6, 6);
      width: 115vh;

    .top0{
      border: 2px solid rgb(6, 6, 6);
      height: 202px;
      display: flex;
      .pb0{
      border: 2px solid rgb(6, 6, 6);
    }
    .pt0{margin: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border: 0px solid rgb(6, 6, 6);
      &:hover{
        color: red;
        
      }
    }
    }
    .down0{
      margin: 10px;
      height: 90vh;
      border: 0px solid rgb(6, 6, 6);
      .nineArea{
        border: 0px solid black;

        display: flex;
        flex-wrap: wrap;
        
        .nums{
          flex-direction: column;
          background-color: white;
          transition: 0.3s;
          width: 24vw;
          font-size: 20pt;

        &:hover{
      transform: scale(1.2, 1.2);
    }
          margin: 2px;
          width: 280px;
      height: 220px;
      border: 2px solid black;
      &:hover{
        color: red;  
      }
        }
        .footer0{
      height: 25vh;
    border: 2px solid rgb(6, 6, 6);
    }
      }
      
    }
    
    
    }
    
    .right0{ 
      border: 0px solid rgb(6, 6, 6);
    width: 18vw;
      hr {    
            height: 4px; /* 设置水平线的高度，这会增加其厚度 */
          background-color: #000000; /* 设置水平线的颜色 */
            }
      .pr0{
        margin-bottom: 50px;
        border: 2px solid rgb(6, 6, 6);
        transition: 0.3s;
    &:hover{
      transform: scale(1.2, 1.2);
    }
      }
      
    }
    }
    .second {
    
      
      border: 0px solid rgb(6, 6, 6);
      flex-direction: column;
        text-align: center;
      h1 {
        flex-direction: column;
        text-align: center;
      }
    
      .secondPicture {
        display: flex;
    
       
        flex-wrap: wrap;
        justify-content: space-around;
        border: 2px solid rgb(6, 6, 6);
    
        .p1 {
          border-color: white;
          margin: 10px;
          border: 2px solid rgb(6, 6, 6);
          height: 80vh;
          width: 30vw;
        }
      }
    
    
    }
    
    </style>