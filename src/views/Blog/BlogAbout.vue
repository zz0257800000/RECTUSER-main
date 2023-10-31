<script>
import{ RouterLink,RouterView} from 'vue-router'
import BlogHeader from '../../components/BlogHeader.vue';
export default {
    data() {
        return {


        }
    },
    components:{
        BlogHeader,
}
}
</script>

<template>



<BlogHeader/>


<div class="blogContent">
    <div class="blogCon">

       
    <h3>About:    古いバイクに精通し、バイクの修理に興味があり、エレキギターを弾くことや漫画のイラストを描くのが趣味です。現在、私は台湾の台南でITのフロントエンドエンジニアリングを学んでいます。</h3>
<img src="../../../public/bikeWeb/13.jpg" height="500" width="800" alt="">
<hr>
<h4>子供の頃から科学ムービーを見ることが好きで、その影響で操作パネルに興味を持ち、色んな新しいことを試して楽しむのが好きです。例えば、コンピューターゲームや電子機器の組み立て、さらには未知の技術に挑戦することも楽しんでいます。新しいことを学び、発見することに興奮しています。</h4>

<br>
<h3>
<ul>
        <li>名前：Liao-Yen-Ming</li>
        <li>学校：虎尾科技大学</li>
        <li>学科：電気工学</li>
        <li>日本語能力：JLPT N2 2023/07</li>
        <li>職歴：博客ライ鍋屋　2019/06~2023/09</li>
        <br>
        <li>資格・ライセンス</li>
        <li>変圧器クラスC 2016/05</li>
        <li>室内配線クラスC 2017/5</li>
        <li>大型バイクの免許 2018/01</li>
        <li>自動車の免許 2018/07</li>
        <li>水上ライフガードライセンス 2018/07</li>
        <li>AutoCad 2019/05</li>
    </ul>

</h3>
</div>
</div>
</template>
<style lang="scss" scoped>


.blogContent{
    z-index: 2;
    border: 0px solid black;
    background-color: white;
    position: relative;
    bottom: 240%;
    left: 27%;
    display: flex;
    
    width: 49vw;
    height: 160vh;
    flex-direction: column;
    .blogCon{
        margin: 20px;

    }




}



</style>