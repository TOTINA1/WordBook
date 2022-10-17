<template>
  <div>
    <div class="warpper">
        <img src="" alt="">
        <div>
            <div class="login-warp" v-if="type === 1">
                <p>提示</p>
                <div class="txtWarpper">
                    <div class="imgwarpper">
                        <img src="" alt="">
                    </div>
                    <input class="input" type="text" placeholder="请输入用户名">
                </div>

                <div class="txtWarpper">
                    <div class="imgwarpper">
                        <img src="" alt="">
                    </div>
                    <input class="input" type="password" placeholder="请输入6-16位密码">
                </div>

                <div class="txtWarpper">
                    <div class="imgwarpper">
                        <!-- <img src="" alt=""> -->
                    </div>
                    <!-- <img src="" alt=""> -->
                </div>

                <!-- <button class="button4">登录</button> -->

                <!-- <div class="desc">
                    <span>手机号登录</span>
                    <span>注册</span>
                </div> -->
            </div>

            <div class="login-warp" v-if="type === 2">
                <p>提示</p>
                <div class="txtWarpper">
                    <div class="imgwarpper">
                        <img src="" alt="">
                    </div>
                    <input class="input" type="text" placeholder="请输入手机号" v-model="account">
                </div>

                <div class="txtWarpper">
                    <div class="imgwarpper">
                        <img src="" alt="">
                    </div>
                    <input class="input" type="text" placeholder="请输入验证码" v-model="pwd">
                    <button class="btnCode" @click="sendCode">{{isRun?`${runTime}s后重新获取`:`获取验证码`}}</button>
                </div>

                <!-- <div class="desc">
                    <span>没有账号？马上注册</span>
                    <span>登录</span>
                </div> -->
            </div>

            <button class="button4" @click="loginHandle">登录</button>
            <div class="desc">
                    <span @click="changeType">{{type===1?'短信验证码登录':'用户名密码登录'}}</span>
                    <span>注册</span>
                </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      type: 2,
      account: '',
      pwd: '',
      //   倒计时
      isRun: false,
      runTime: 30
    }
  },
  methods: {
    changeType () {
      this.type = this.type === 2 ? 1 : 2
      this.account = ''
      this.pwd = ''
    },
    async sendCode () {
      //   发送验证码
      if (!/^1\d{10}$/.test(this.account)) {
        window.alert('请确保手机号正确~~')
      }
      // 验证码
      //    验证手机号是否被注册
      //  let data = await this.$api.personal.phone(this.account)
      // if(parseInt(data.code) == 0){
      //     if(parseInt(data.code) == 0){
      //         window.alert('手机没有被注册，请先注册~~')
      //         return
      //     }

      //      通知服务器发送验证码
      //     data = await this.$api.personal.code(this.account)
      //     if(parseInt(data.code) == 1){
      //         window.alert('当前网络繁忙，请稍后再试~~')
      //         return
      //     }
      // }

      // 开启倒计时
      //   if (this.isRun) return
      this.isRun = true
      this.autoTime = setInterval(() => {
        if (this.runTime === 0) {
          this.runTime = 30
          this.isRun = false
          clearInterval(this.autoTime)
          return
        }
        this.runTime--
      }, 1000)
    },
    loginHandle () {
      // 分情况看type是1or2
      // 表单校验
      //   let data = await this.$api.checkCode(this.accout, this.pwd)
    //   if (parseInt(data.code) !== 0) {
    //     window.alert('账号或密码不正确~~')
    //     return
    //   }
    //   data = this.$api.personal.loginPOST(
    //     this.account,
    //     this.pwd,
    //     this.type
    //   )
    //   if (parseInt(data.code) !== 0) {
    //     window.alert('登陆失败~~')
    //     return
    //   }
    //   window.alert('登陆成功~~', {
    //     handled: () => {
    //       this.$router.push('/')
    //     }
    //   })
    }
  }
}
</script>
<style>
.warpper{
    background-color: #ffffff;
    height: 100%;
}
.login-wrap{
    text-align: center;
    padding-top: 46px;
    width: 100%;
}
.txtWrapper{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px #eee solid;
    margin: 0 38px;
    padding-bottom: 12px;
    margin-bottom: 29px;
}
.desc{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 18px 38px;
    font-size: 14px;
    color: #999999;
}
.imgwrapper{
    flex: 0 0 18px;
}
.input{
    display: block;
    outline: none;
    border: 0;
    box-sizing: border-box;
    margin-left: 10px;
    font-size: 16px;
}
.button4{
    display: block;
    width: calc(100% - 76px);
    height: 50px;
    line-height: 50px;
    margin: 0 38px;
    margin-top: calc(100px - 29px);
    border: none;
    background-color: #41b883;
    color: #fff;
    font-size: 18px;
    border-radius: 25px;
}
.btnCode{
    float: right;
    margin-top: -30px;
    margin-right: 20px;
    background-color: #41b883;
    color: #ffffff;
    border: 0;
    border-radius: 3px;
    height: 28px;
    line-height: 28px;
}
span{
    cursor: pointer;
}
span:hover{
    color: #41b883;
}
</style>
