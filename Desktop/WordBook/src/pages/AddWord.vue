<template>
  <div>
    <div class="wrapper">
        <Header></Header>
        <p class="title">录入新单词</p>
        <!-- <h1>录入新单词</h1> -->
        <div class="section">
            <ul>
                <li>
                    <span>单词</span>
                    <input class="text1" type="text" placeholder="请输入一个单词" v-model="word">
                </li>
                <li>
                    <span>发音</span>
                    <input class="text1" type="text" placeholder="请输入此单词的发音" v-model="pronounce">
                </li>
                <li>
                    <span>中文</span>
                    <input class="text1" type="text" placeholder="请输入汉语意思" v-model="description">
                </li>
            </ul>
        </div>
        <button class="button1" @click="addWord">确认添加</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: '',
      pronounce: '',
      description: ''

    }
  },
  methods: {
    async addWord () {
      await this.$api.catgory.addWord({
        word: this.word,
        pronounce: this.pronounce,
        description: this.description
      }).then((res) => {
        alert(res.data.msg)
        this.$router.push('/words')
      })
        .catch((err) => {
          alert(err.response.data.msg)
        })
    }
  }
}
</script>
<style>
.wrapper{
    margin-top: 55px;
    text-align: left;
}
.title{
    padding-left: 23px;
    margin-bottom: 10px;
    color: #999;
}
.section{
    background-color: #ffffff;
    padding: 0 23px;
}
.section li{
    list-style: none;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px #eee solid;
    font-size: 16px;
}
.section input{
    border: none;
    margin-left: 16px;
    font-size: 14px;
}
.button1{
    border: 0;
    background-color: #41b883;
    border-radius: 3px;
    height: 42px;
    width: calc(100% - 66px);
    margin: 80% 33px 10% 33px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
}
</style>
