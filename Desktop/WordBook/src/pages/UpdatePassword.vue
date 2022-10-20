<template>
  <div>
    <div class="wrapper">
        <Header></Header>
        <div class="section">
            <p class="title">修改密码</p>
            <input type="hidden">
            <ul>
              <li>
                    <span><img src="" alt=""></span>
                    <input class="input" type="text" placeholder="请输入用户名" v-model="username">
                </li>
                <li>
                    <span><img src="" alt=""></span>
                    <input class="input" type="password" placeholder="请输入旧密码" v-model="oldPwd">
                </li>
                <li style="height: 10px;background: #f6f6f6;"></li>
                <li>
                    <span><img src="" alt=""></span>
                    <input class="input" type="password" placeholder="请输入新密码" v-model="pwd">
                </li>
                <li>
                    <span><img src="" alt=""></span>
                    <input class="input" type="password" placeholder="请确认新密码" v-model="pwdAgain">
                </li>
            </ul>
        </div>
        <button class="button1" @click="changePwd">确认修改</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      oldPwd: '',
      pwd: '',
      pwdAgain: ''

    }
  },
  methods: {
    async changePwd () {
      if (this.pwd !== this.pwdAgain) {
        alert('两次密码不一致，请重新输入~~')
        return
      }
      await this.$api.catgory.changePwd({
        username: this.username,
        oldPwd: this.oldPwd,
        pwd: this.pwd
      }).then((res) => {
        alert(res.data.msg)
        this.$router.push('/login')
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
}
.button1{
    border: 0;
    background-color: #41b883;
    border-radius: 3px;
    height: 42px;
    width: calc(100% - 66px);
    margin: 20% 33px 10% 33px;
    font-size: 16px;
    font-weight: bold;
    color: #ffffff;
}
.section{
    background-color: #ffffff;
}
.section li{
    height: 55px;
    line-height: 55px;
    border-bottom: 1px #eee solid;
    font-size: 16px;
    display: flex;
    align-items: center;
    padding: 0 23px;
}
.section input{
    border: none;
    margin-left: 16px;
    font-size: 14px;
}
.title{
    padding-left: 23px;
    margin-bottom: 10px;
    color: #999;
}
</style>
