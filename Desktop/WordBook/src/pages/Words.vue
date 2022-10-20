<template>
  <div>
        <div class="drawer" slot="drawer">
            <div class="text">
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul class="drawerList">
                    <li><p class="user">sdf</p></li>
                    <li @click="goPwd">
                        <img src="" alt="">修改密码
                    </li>
                    <li @click="goBack">
                        <img src="" alt="">安全退出
                    </li>
                    <li>
                        <!-- <a href="javascript:void(0)" class="close">
                            <img src="" alt="">&nbsp;返回
                        </a> -->
                    </li>
                </ul>
            </div>

        </div>
        <div class="content" slot="content" ref="viewBox">
            <!-- <Header :title="title"></Header> -->
            <div class="section">
                <ul class="list" v-for="(item , index) in words" :key="index">
                    <li>
                        <div >
                            <div>
                                <span class="words">{{item.word}}</span><br/>
                                <span class="syllable">{{item.pronounce}}</span>
                            </div>
                            <p class="chinese">{{item.description}}</p>
                        </div>
                        <div class="btngroud">
                            <button class="delbtn" @click="goAdd">添加</button>
                            <button class="modifybtn" @click="goUpdate">修改</button>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- <a href="javascript:void(0)" class="btn">
                <img src="" alt="菜单按钮">
            </a> -->
        </div>

        <!-- 上一页下一页跳转 -->
        <form class="center">
            <button class="button2">首页</button>
            <button class="button2">上一页</button>
            <button class="button2">下一页</button>
            <button class="button2">末页</button> <br/>
            <input class="text1" type="text" placeholder="请输入需要跳转的页数">
            <button class="button2">转到</button><br/>
        </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      words: []

    }
  },
  created () {
    this.$api.catgory.queryWord().then((res) => {
    //   alert(res.data.msg)
      //   console.log(res.data.data)
      this.words = res.data.data
      console.log(this.words)
    })
      .catch((_err) => {
        // alert(err.response.data.msg)
      })
  },
  methods: {
    goBack () {
      this.$router.push('/login')
    },
    goUpdate () {
      this.$router.push('/UpdWord')
    },
    goAdd () {
      this.$router.push('/AddWord')
    },
    goPwd () {
      this.$router.push('/UpdatePassword')
    }

  }
}
</script>
<style>
.user{
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    font-weight: bold;
}
.section{
    margin-top: 55px;
    margin-bottom: 40px;
}

.list li{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #ffffff;
    border-radius: 3px;
    margin: 0 10px;
    padding: 12px;
    text-align: left;
    border: 1px #eee solid;
    margin-top: 12px;
}

.content{
    height: 100%;
    overflow: auto;
}

.list li .words{
    font-size: 16px;
    font-weight: bold;
    margin-right: 8px;
}

.list li .syllable{
    font-size: 12px;
    color: #666;
}

.list li .chinese {
    font-size: 12px;
    color: #666;
}

.list li .delbtn{
    border-radius: 20px;
    width: 48px;
    height: 19px;
    line-height: 16px;
    color: #41b883;
    border: 1px #41b883 solid;
    font-size: 10px;
    text-align: center;
    display: inline-block;
}

.list li .modifybtn{
    border-radius: 20px;
    width: 48px;
    height: 19px;
    line-height: 16px;
    color: #ffffff;
    border: 1px #ffffff solid;
    background-color: #41b883;
    font-size: 10px;
    text-align: center;
    display: inline-block;
}

.btn{
    position: fixed;
    left: 10px;
    top: 0;
    top: 12px;
    z-index: 2;
}

.btngroud{
    flex: 0 0 100px;
}

.drawerList li{
    display: flex;
    align-items: center;
    /* margin-left: 20px; */
    line-height: 35px;
}

.drawerList li img{
    margin-right: 10px;
}

button{
    background: none;
}

.close{
    position: fixed;
    bottom: 10px;
    right: 55%;
    color: #41b883;
    text-decoration: none;
    font-size: 14px;
    align-items: center;
    display: flex;
    font-weight: bold;
}

h1, h2{
    font-weight: normal;
    text-align: center;
}

ul li{
    list-style: none;
}

.drawer{
    height: 100%;
}

.text{
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    box-shadow: 3 px 3px 6px 6px #888888;
    font-family: '微软雅黑';
    font-size: 2.1vh;
}

.button{
    display: flex;
    flex-direction: row;
    padding-left: 50%;
    padding: 2%;
}
/* 汉堡菜单实现 */
.text {
    display: block;
    position: relative;
    top: 20px;
    left: 52px;

    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
}

.text li {
    text-decoration: none;
    color: #232323;

    transition: color 0.3s ease;
}

.text li:hover {
    color: tomato;
}

.text input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
}

.text span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;

    background: #4c4c4c;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0),
        opacity 0.55s ease;
}

.text span:first-child {
    transform-origin: 0% 0%;
}

.text span:nth-last-child(2) {
    transform-origin: 0% 100%;
}

.text input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

/*
* But let's hide the middle one.
*/
.text input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}

/*
* Ohyeah and the last one should go the other direction
*/
.text input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}
.drawerList {
    position: absolute;
    width: 150px;
    height: 600px;
    /* margin: -49px 0 0 -370px; */
    margin-top: -56px;
    margin-left: -60px;
    padding: 30px;
    padding-top: 70px;
    text-align: right;

    background: rgb(245, 244, 244);

    list-style-type: none;
    -webkit-font-smoothing: antialiased;

    transform-origin: 0% 0%;
    transform: translate(-100%, 0);

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
}

.drawerList li {
    /* margin-left: -20px; */
    /* padding: 10px 0; */
    /* font-size: 22px; */
}
.text input:checked~ul {
    transform: none;
}
/* 新增分页 */
.center{
    margin-bottom: 10px;
    text-align: center;

}
/* .center input{
    border: none;
    border: 1px #41b883 solid;
} */
.button2{
    /* display: block; */
    /* margin: 0 49px; */
    /* margin-top: calc(100px - 29px); */
    margin-bottom: 10px;
    border: none;
    background-color: #ccc;
    color: #fff;
    font-size: 13px;
    border-radius: 5px;
}
</style>
