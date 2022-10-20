<template>
  <div>
    <div class="login-warp">
        <p>提示</p>

        <div class="txtWarpper">
            <div class="imgwarpper">
                <img src="" alt="">
            </div>
            <input class="input" type="text" placeholder="请输入手机号" v-model="phone">
        </div>

        <div class="txtWarpper">
            <div class="imgwarpper">
                <img src="" alt="">
            </div>
            <input class="input" type="password" placeholder="请输入6-16位密码" v-model="password">
        </div>

        <div class="txtWarpper">
            <div class="imgwarpper">
                <img src="" alt="">
            </div>
            <input class="input" type="password" placeholder="请再次输入密码" v-model="pwdAgain">
        </div>

        <div class="txtWarpper">
            <div class="imgwarpper">
                <img src="" alt="">
            </div>
            <!-- <input class="input" type="text" placeholder="请输入验证码" v-model="code">
            <button class="btnCode" @click="sendCode">{{isRun?`${runTime}s后重新获取`:`获取验证码`}}</button> -->
            <img src="" alt="">
        </div>

        <button class="button4" @click="register">注册</button>

        <div class="desc">
            <span @click="loginPush">已有账号？马上登录</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      password: '',
      pwdAgain: '',
      code: '',
      //   倒计时
      isRun: false,
      runTime: 30
    }
  },
  methods: {
    loginPush () {
      this.$router.push('/login')
    },
    // async sendCode () {
    //   //   发送验证码
    //   if (!/^1\d{10}$/.test(this.phone)) {
    //     window.alert('请确保手机号正确~~')
    //   }
    //   if (this.pwd === this.pwdAgain) {
    //     alert('两次密码不一致，请重新输入~~')
    //     this.isRun = false
    //   }
    //   //   验证手机号是否被注册
    //   await this.$api.personal.phone(this.phone).then((res) => {
    //     // alert(res.data.msg)
    //     // 手机号已经存在，给这个手机号发送验证码
    //     this.$api.personal.codeReg({
    //       phone: this.phone,
    //       password: this.password
    //     }).then((res) => {
    //       console.log('查询手机号响应信息:' + '验证码发送成功')
    //       // 开启倒计时
    //       //   if (this.isRun) return
    //       this.isRun = true
    //       this.autoTime = setInterval(() => {
    //         if (this.runTime === 0) {
    //           this.runTime = 30
    //           this.isRun = false
    //           clearInterval(this.autoTime)
    //           return
    //         }
    //         this.runTime--
    //       }, 1000)
    //     })
    //   }).catch((_err) => {
    //     alert('手机号已注册，请选择验证码或密码登录~~')
    //   })

    //   // 验证码
    //   //    验证手机号是否被注册
    //   //  let data = await this.$api.personal.phone(this.phone)
    //   // if(parseInt(data.code) == 0){
    //   //     if(parseInt(data.code) == 0){
    //   //         window.alert('手机号已被注册，请选择登录~~')
    //   //         return
    //   //     }

    //   //      通知服务器发送验证码
    //   //     data = await this.$api.personal.code(this.phone)
    //   //     if(parseInt(data.code) == 1){
    //   //         window.alert('当前网络繁忙，请稍后再试~~')
    //   //         return
    //   //     }
    //   // }

    //   // 开启倒计时
    //   //   if (this.isRun) return
    //   this.isRun = true
    //   this.autoTime = setInterval(() => {
    //     if (this.runTime === 0) {
    //       this.runTime = 30
    //       this.isRun = false
    //       clearInterval(this.autoTime)
    //       return
    //     }
    //     this.runTime--
    //   }, 1000)
    // },
    async register () {
      if (this.password === '' || this.phone === '') {
        alert('手机号和密码不能为空')
        return
      }
      if (!/^1\d{10}$/.test(this.phone)) {
        window.alert('请确保手机号正确~~')
        return
      }
      if (this.password !== this.pwdAgain) {
        alert('两次密码不一致，请重新输入~~')
        return
      }
      await this.$api.personal.register({
        phone: this.phone,
        password: this.password
      }).then((res) => {
        alert(res.data.msg)
        this.$router.push('/about')
      })
        .catch((_err) => {
          alert('注册失败~~')
        })

    //   表单验证
    //   验证验证码的有效性
    //   let data = await this.$api.checkCode(this.phone, this.code)
    //   if (parseInt(data.code) !== 0) {
    //     window.alert('验证码不正确~~')
    //     return
    //   }

    //   完成注册
    //   data = await this.$personal.register({
    //     phone: this.phone,
    //     pwd: this.pwd,
    //     code: this.code
    //   })
    //   if (parseInt(data.code) !== 0) {
    //     window.alert('网络繁忙，请稍后再试~~')
    //     return
    //   }
    //   window.alert('恭喜您，注册成功!~~', {
    //     handled: () => {
    //       this.$router.push('/login')
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
.btnCode{
  float: right;
  margin-top: -30px;
  margin-right: 30px;
  background-color: #41b883;
  color: #ffffff;
  border: 0;
  border-radius: 3px;
  height: 28px;
  line-height: 28px;
}
</style>
