<template>
  <div>
    <div>
        <div class="biaoti">
            <!-- <a href="#" @click="goBack">返回</a> -->
            <router-link :to="{name:'Words'}">返回</router-link>
        </div>
        <!-- <h1>纠正改错</h1>
        <p>一、需要修改的单词</p>
        <hr align="center" width="80%" />
        <br/>
        <div class="text">
            单词:bar <br/>
            发音:bar <br/>
            中文意思：酒吧 <br/>
        </div>

        <hr align="center" width="80%" /> -->
        <p class="font">需要修改内容</p>
        <hr align="center" width="80%" />

        <form class="center">
            单词：<input class="text1" type="text" placeholder="请输入改正后的单词（可选）" v-model="word"><br /><br />
            汉语：<input class="text1" type="text" placeholder="请输入修改的汉语意思（可选）" v-model="description"><br /><br />
            发音：<input class="text1" type="text" placeholder="请输入修改后的发音（可选）" v-model="pronounce"><br /><br />

            <input class="button1" type="submit" value="修改单词" @click="updWord">
        </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      word: '',
      description: '',
      pronounce: ''

    }
  },

  methods: {
    goBack () {
      this.$router.push('/words')
    },
    async updWord () {
      await this.$api.catgory.updWord({
        word: this.word,
        description: this.description,
        pronounce: this.pronounce
      }).then((res) => {
        alert(res.data.msg)
      })
        .catch((err) => {
          alert(err.response.data.msg)
        })
    }

  }
}
</script>
<style>
body{
    text-align: center;
}
.text{
    padding-left: 80px;
    text-align: left;
}
.center{
    margin-top: 40px;
}
.font{
  color: rgb(92, 92, 92);
}
</style>
