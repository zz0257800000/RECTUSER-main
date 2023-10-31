<script >
import { RouterLink, RouterView } from 'vue-router'
import bg2 from '../components/bg2.vue';

export default {
  data() {
    return {
      imageUrl: null,
      isZoomed: false,
      currentDate: new Date().toLocaleString(),
      // musicSource: '../../public/mp3/fripSide - double Decades(Audio).mp3', // 歌曲文件的路径，请根据实际情况修改路径
      isLoading: true, // 默认情况下显示加载状态
      currentSongIndex: 0,
      showDialog: false,
      showDialog: false,

      songs: [
        {
          title: "fripSide - double Decades(Audio)",
          image: "../../public/mp3/mp3圖/01.jpg",
          audioSource: "../../public/mp3/song1.mp3"
        },
        {
          title: "藍井エイル「シューゲイザー」Music Video",
          image: "../../public/mp3/mp3圖/02.jpg",
          audioSource: "../../public/mp3/song1.mp3"
        },
        // 添加更多歌曲
      ],

    }
  },
  components: {
    RouterLink,
    RouterView,
    bg2,

  },
  created() {
    // 在组件创建时启动日期更新
    this.updateDate();
  },
  computed: {
    currentSong() {
      return this.songs[this.currentSongIndex];

    },
  },
  methods: {
    updateDate() {
      // 更新当前日期和时间
      this.currentDate = new Date().toLocaleString();
      // 每秒更新一次
      setTimeout(this.updateDate, 1000);
    },
    playSound() {
      const audio = new Audio("../../public/mp3/keypress.mp3"); // 替换为您的声音文件路径
      audio.play();  //聲音按鈕
    },
    //  playMusic() {
    //   this.$refs.audioPlayer.play();
    // }, 自動放歌

    playPreviousSong() {
      this.currentSongIndex = (this.currentSongIndex - 1 + this.songs.length) % this.songs.length;
      this.$refs.audioPlayer.load();
      this.$refs.audioPlayer.play();
    },
    playNextSong() {
      this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
      this.$refs.audioPlayer.load();
      this.$refs.audioPlayer.play();
    },
    ShowDialog() {
      this.showDialog = !this.showDialog;
    },

  },
  mounted() {
    // 模拟加载过程，实际中可以使用异步操作或axios请求
    setTimeout(() => {
      this.isLoading = false; // 加载完成后隐藏加载状态
    }, 5000); // 模拟加载需要3秒
  },
};
</script>
<template>
  <div class="startloading ">
    <div v-show="!isLoading">
    </div>
    <div v-show="isLoading">
      <div class="loading-spinner">
        <div class="spinner">
        </div>
        <p>Loading...</p>
      </div>
    </div>
  </div>
  <div class="userPage">

    <div class="userLeft">
      <div class="userLeftTop">
        <div class="date-display">
          <h1>{{ currentDate }}</h1>
        </div>
        <div class="leftimg">
          <img src="./../../public/首頁/7.gif" height="400" v-on:click="ShowDialog">
        </div>
        <div class="lolidance" v-if="showDialog">
          <img src="./../../public/首頁/9.gif" height="400" v-on:click="ShowDialog">
        </div>
      </div>
      <div class="userLeftDown">
        <div class="container">
          <div class="container__elements">
            <div class="ghost">
              <div class="ghost__eyes"></div>
              <div class="ghost__dimples"></div>
              <div class="ghost__feet">
                <div class="ghost__feet-foot"></div>
                <div class="ghost__feet-foot"></div>
                <div class="ghost__feet-foot"></div>
                <div class="ghost__feet-foot"></div>
              </div>
            </div>
           
            <div class="shadow"></div>
          </div>
          <div class="social-icons">
            <a class="social-icon social-icon--codepen" href="https://github.com/zz0257800000?tab=repositories"
              target="_blank">
              <i class="fa-brands fa-github"></i>
              <div class="tooltip">github</div>
            </a>
            <a class="social-icon social-icon--twitter" href="https://www.instagram.com/zz025784/" target="_blank">
              <i class="fa-brands fa-instagram"></i>
              <div class="tooltip">instagram</div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="userMid">
      <div class="midTopTeam">
        <RouterLink class="routerItemBlack" @mouseover="playSound" to="/Manga">
          <div class="midTop1">
            <br>
            漫画、イラスト
          </div>
        </RouterLink>
        <RouterLink class="routerItemWhite" @mouseover="playSound" to="/Blog/BlogAbout">
          <div class="midTop2">
            <br>ブログ
          </div>
        </RouterLink>
        <RouterLink class="routerItemBlue" @mouseover="playSound" to="/NETpractice">
          <div class="midTop3">
            <br> ウェブサイト
          </div>
        </RouterLink>
      </div>
      <div class="midBetween ">
        
        <img src="./../../public/7.jpg" alt="">
        <div class="midBetweenright">
          <h3>自己紹介</h3>
          <h6>
            はじめまして、リャオエンミンと申します。お貴重な時間をいただき、ありがとうございます。本日はよろしくお願い致します。私は現職で、レストラン業の社員として働いています、もう4年間ほど勤めています。仕事が終わった後は、学校で電動自転車のモーターの取り付けや屋内配線など、さまざまな電気機器の組み立てや修理を学びました。それで私は台湾で4年間勉強した後、最近卒業しました。休暇の際、私は自分で中古の古いバイクを修理し、そしてバイクのエンジンも組み立てることもできます。それから、趣味はエレギタを弾ける、特に日本のバンドが聴いています。普段のところ漫画関するイラストの作品を描くこと。そして写真を撮り、いつか日本でバイクに乗って様々な場所の景色を見って、有名な場所に行きたいと考えています。
          </h6>
          <a href="https://www.instagram.com/zz025784/" target="_blank">Insta:@zz025784 </a>
          <a href="https://twitter.com/kamishu0126" target="_blank">Twitter:@kamishu0126</a>
          <br>
          <h3>実行しなければ、ただの夢でしかない。</h3>
        </div>
      </div>
      <div class="midDownTeam">
        <div class="midDown1">
          <iframe width="427px" height="203px" src="https://www.youtube.com/embed/Ci_zad39Uhw?si=4FZgs2QmMA-7mTPG"
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </div>
        <div class="midDown2">
          <div class="logobox">
            <img src="../../public/LOGO1.png" @click="changeColor">
          </div>

        </div>
      </div>
    </div>
    <div class="userRight">
      <div class="userRightTop">
        <div>
          <img :src="currentSong.image" alt="Album Cover" />
          <div>
            <h2>{{ currentSong.title }}</h2>
            <p>{{ currentSong.artist }}</p>
          </div>
          <audio loop="loop" start:0.5 ref="audioPlayer" :src="musicSource" controls autoplay></audio>
          <button @click="playPreviousSong">上一首</button>
          <button @click="playNextSong">下一首</button>
        </div>
      </div>
      <div class="userRightDown">
<img src="./../../public/首頁/11.png" alt="">   
   </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
$mainColor: #2f8fd9;

.startloading {
  position: fixed;
  display: flex;
  align-items: center;
  z-index: 999;
  /* 使遮罩层显示在最前面 */
  background-color: white;
  width: 100vw;
  justify-content: center;

  .loading-spinner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-size: 24pt;
  }

  .spinner {
    border: 4px solid rgba(12, 12, 12, 0.3);
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 500px;
    height: 500px;
    animation: spin 4s linear infinite;
    background-image: url(../../public/首頁/6.gif);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 170% 100%;
    /* 将背景图像放大到元素的100%宽度和高度 */
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

a {
  text-decoration: none;
}

.routerItemWhite {
  color: none;
  font-size: 28pt;

  &:hover {
    color: white;
  }
}

.routerItemBlue {
  font-size: 28pt;

  &:hover {
    color: white;
  }
}

.routerItemBlack {
  font-size: 28pt;
  color: black;
}

.userPage {
  margin: 20px;
  display: flex;
  border: 0px solid black;
  height: 100vh;
  width: 100vw;

  .userLeft {
    border: 0px solid black;
    height: 97vh;
    width: 20vw;

    .userLeftTop {
      background-color: rgb(255, 255, 255);
      /* 透明背景 */
      border: 2px solid black;
      height: 47vh;
      width: 19vw;
      transition: 0.3s;
      box-shadow: 0px 5px 10px 0px #777;

      .date-display {

        border: 0px solid black;

        font-size: 2.2em;

        .time {
          font-family: "Arial", sans-serif;

        }
      }

      .leftimg {
        border: 0px solid black;
        position: relative;
        right: 50%;
        bottom: 25%;
      }

      .lolidance {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999;

        img {
          width: 150vw;
          height: 150vh;
        }
      }
    }

    .userLeftDown {
      background-color: rgb(255, 255, 255);
      /* 透明背景 */

      margin-top: 10px;
      border: 2px solid black;
      height: 46vh;
      width: 19vw;
      box-shadow: 0px 5px 10px 0px #777;
      $background: rgb(255, 255, 255);
      $white: #ffffff;
      $grey: #dbdbdb;
      $pink: #ffbeff;
      $shadow: #000232;

      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;



      }

      .container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 40vh;
        background: $background;
        position: relative;
        top: 8%;
        border: 0px solid black;
      }

      .ghost {
        position: relative;
        width: 150px;
        height: 225px;
        background: $white;
        box-shadow: -17px 0px 0px $grey inset, 0 0 50px #5939db;
        border-radius: 100px 100px 0 0;
        animation: float 2s infinite;


        &__eyes {
          display: flex;
          justify-content: space-around;
          margin: 0 auto;
          padding: 70px 0 0;
          width: 90px;
          height: 20px;

          &:before,
          &:after {
            content: "";
            display: block;
            width: 15px;
            height: 25px;
            background: $background;
            border-radius: 50%;
            background: $shadow;
          }
        }

        &__dimples {
          display: flex;
          justify-content: space-around;
          margin: 0 auto;
          padding: 35px 0 0;
          width: 130px;
          height: 20px;

          &:before,
          &:after {
            content: "";
            display: block;
            width: 15px;
            height: 15px;
            background: $pink;
            border-radius: 50%;
          }
        }

        &__feet {
          width: 100%;
          position: absolute;
          bottom: -13px;
          display: flex;
          justify-content: space-between;

          &-foot {
            width: 25%;
            height: 26px;
            border-radius: 50%;
            background: $white;

            &:last-child {
              background-image: linear-gradient(to right, $white 55%, $grey 45%);
            }
          }
        }
      }

      .shadow {
        background: $shadow;
        width: 150px;
        height: 40px;
        margin-top: 50px;
        border-radius: 50%;
        animation: shadow 2s infinite;
      }

      @keyframes float {

        0%,
        100% {
          transform: translateY(0);
        }

        50% {
          transform: translateY(-15px);
        }
      }

      @keyframes shadow {

        0%,
        100% {
          transform: scale(1);
        }

        50% {
          transform: scale(0.9);
        }
      }

      /* --------Social Icons-------- */

      /* Color Variables */
      $color-codepen: #000;
      $color-twitter: #ff0d0d;

      /* Social Icon Mixin */
      @mixin social-icon($color) {
        background: $color;
        color: #fff;

        .tooltip {
          background: $color;
          color: currentColor;

          &:after {
            border-top-color: $color;
          }
        }
      }

      .social-icons {
        display: flex;
        position: absolute;
        bottom: 25px;
        right: 25px;
      }

      .social-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 40px;
        height: 40px;
        margin: 0 0.7rem;
        border-radius: 50%;
        cursor: pointer;
        font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-size: 1.5rem;
        text-decoration: none;
        transition: all 0.15s ease;

        &:hover {
          color: #fff;

          .tooltip {
            visibility: visible;
            opacity: 1;
            transform: translate(-50%, -150%);
          }
        }

        &:active {
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5) inset;
        }

        &--twitter {
          @include social-icon($color-twitter);
        }

        &--codepen {
          @include social-icon($color-codepen);
        }

        i {
          position: relative;
          top: 1px;
        }
      }

      /* Tooltips */
      .tooltip {
        display: block;
        position: absolute;
        top: 0;
        left: 50%;
        padding: 0.4rem 0.6rem;
        border-radius: 40px;
        font-size: 0.4rem;
        font-weight: bold;
        opacity: 0;
        pointer-events: none;
        text-transform: uppercase;
        transform: translate(-50%, -100%);
        transition: all 0.3s ease;
        z-index: 1;

        &:after {
          display: block;
          position: absolute;
          bottom: 1px;
          left: 50%;
          width: 0;
          height: 0;
          content: "";
          border: solid;
          border-width: 10px 10px 0 10px;
          border-color: transparent;
          transform: translate(-50%, 100%);
        }
      }
    }
  }

  .userMid {
    height: 95vh;
    width: 58vw;
    border: 0px solid rgb(6, 6, 6);

    .midTopTeam {
      height: 20vh;
      display: flex;
      justify-content: space-around;

      .midTop1 {
        background-color: rgb(255, 255, 255);
        /* 透明背景 */

        height: 20vh;
        width: 19vw;
        border: 2px solid rgb(6, 6, 6);
        transition: 0.8s;
        box-shadow: 0px 5px 10px 0px #777;

        &:hover {

          transition: 0.8s;
          background-image: url("../../public/首頁/3.jpg");
          transform: translateY(-15px);
          background-size: cover;

        }
      }

      .midTop2 {
        background-color: rgb(255, 255, 255);
        /* 透明背景 */

        height: 20vh;
        width: 19vw;
        border: 2px solid rgb(6, 6, 6);
        transition: 0.8s;
        box-shadow: 0px 5px 10px 0px #777;

        &:hover {
          color: #ffffff;
          background-image: url("../../public/首頁/1.jpg");
          background-size: cover;
          transform: translateY(-15px);

        }
      }

      .midTop3 {
        background-color: rgb(255, 255, 255);
        /* 透明背景 */
        color: black;
        height: 20vh;
        width: 19vw;
        border: 2px solid rgb(6, 6, 6);
        transition: 0.5s;
        box-shadow: 0px 5px 10px 0px #777;

        &:hover {
          background-image: url("../../public/首頁/2.jpg");
          background-size: cover;

          color: #4885ff;
          transform: translateY(-15px);
        }
      }
    }


    .midBetween {
      height: 46vh;
      margin-top: 10px;
      display: flex;
      border: 2px solid rgb(6, 6, 6);
      transition: 0.5s;
      background-color: rgb(255, 255, 255);
      box-shadow: 0px 5px 10px 0px #777;
      transform-style: preserve-3d;

      &:hover {
        transform: scale(1.2, 1.2);
      }

      img {
        margin: 0;
        width: 20vw;
        height: 363px;
        border: 2px solid rgb(6, 6, 6);

      }


      .midBetweenright {
        margin: 10px;

        a {
          font-size: 20pt;
          text-decoration: none;

        }
      }

    }

    .midDownTeam {
      margin-top: 10px;
      height: 31vh;
      display: flex;

      border: 0px solid rgb(6, 6, 6);

      .midDown1 {

        width: 28vw;
        height: 26vh;
        border: 2px solid rgb(6, 6, 6);
        box-shadow: 0px 5px 10px 0px #777;
      }

      .midDown2 {
        margin-left: 5px;
        width: 36vw;
        height: 26vh;
        border: 2px solid rgb(0, 0, 0);
        background-color: white;
        overflow: hidden;
        z-index: -1;
        box-shadow: 0px 5px 10px 0px #777;

        .logobox {
          position: relative;
          bottom: 15%;
        }

      }
    }

  }

  .userRight {
    z-index: -2;
    margin-left: 10px;
    height: 97vh;
    width: 18vw;
    border: 0px solid black;


    .userRightTop {
      background-color: rgb(255, 255, 255);
      /* 透明背景 */

      border: 2px solid black;
      height: 55vh;
      box-shadow: 0px 5px 10px 0px #777;
      overflow: hidden;

    }

    .userRightDown {
      margin-Top: 10px;
      border: 2px solid black;
      height: 38vh;
      box-shadow: 0px 5px 10px 0px #777;
      color: #18777c;
    }
  }
}
</style>
