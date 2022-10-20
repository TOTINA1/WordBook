// 导入
const express = require('express')
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')
let { conMysql } = require('./mysql')

// 创建统一的返回报文对象
class Response {
  constructor (isSucceed, msg, code, data) {
    this.isSucceed = isSucceed
    this.msg = msg
    this.code = code
    this.data = data
  }
}

// 创建
const app = express()

// 处理 x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}))

// 处理 application/json
app.use(bodyParser.json())

// 处理 mutipart/form-data
app.use(multiparty())

// 设置跨域访问
const cors = require('cors')
app.use(cors())

// 测试接口能否正常调用
app.get('/info', (req, res) => {
  res.send('Hello shaoyahu !')
})

// 测试数据库连接的上不上
app.get('/getUser', (req, res) => {
  let sql = 'select * from userinfo'
  conMysql(sql).then(result => {
    res.send(result)
  })
})

// 用户登录
app.post('/loginUser', (req, res) => {
  let sql = `select * from user where username = '${req.body.username}'`
  conMysql(sql).then(result => {
    if (result[0].password === req.body.password) {
      let response = new Response(true, '登录成功', 200, result)
      res.send(response)
      console.log(response)
    } else {
      let response = new Response(false, '用户名或密码错误', 400)
      res.status(400).send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})
// 验证码登录
app.post('/loginCode', (req, res) => {
  let sql = `select * from user where phone = '${req.body.phone}'`
  conMysql(sql).then(result => {
    if (result[0].code === req.body.code) {
      let response = new Response(true, '登录成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '验证码错误', 400)
      res.status(400).send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})
// 查看手机号是否注册
app.get('/phone', (req, res) => {
  let sql = `select phone from user`
  console.log(req.body.phone)
  conMysql(sql).then(result => {
    console.log(result[0].phone)
    console.log(req.body.phone)
    if (result[0].phone === req.body.phone) {
      let response = new Response(true, '手机号已被注册', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '手机号未注册', 400)
      // res.status(400).send(response)
      res.send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})
// 发送验证码
app.post('/code', (req, res) => {
  let code = Math.random().toFixed(6).slice(-6)

  let sql = `update user set code = '${code}' where phone = '${req.body.phone}'`
  conMysql(sql).then(result => {
    console.log(req.body.phone + '的验证码是：' + code)
    if (result.affectedRows === 1) {
      let response = new Response(true, '验证码发送成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '验证码发送失败', 400)
      res.status(400).send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})
// 注册发送验证码
app.post('/register', (req, res) => {
  let sql = `INSERT INTO USER(PASSWORD,phone) VALUES('${req.body.phone}','${req.body.password}')`
  conMysql(sql).then(result => {
    if (result.affectedRows === 1) {
      let response = new Response(true, '注册成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '注册失败', 400)
      res.status(400).send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})

// // 注册
// app.post('/register', (req, res) => {
//   let sql = `select * from user where phone = '${req.body.phone}' `
//   console.log('注册手机号' + req.body.phone + req.body.code)
//   conMysql(sql).then(result => {
//     console.log('验证码数据库：' + result[0].code + '前端验证码' + req.body.code)
//     if (result[0].code === req.body.code) {
//       let response = new Response(true, '注册成功,请重新登录~~', 200, result)
//       res.send(response)
//     } else {
//       let response = new Response(false, '注册失败~~', 400)
//       res.status(400).send(response)
//     }
//   }).catch(_err => {
//     res.status(500).send('数据库连接出错!')
//   })
// })

// 获取所有单词信息并返回到前端
app.get('/queryWord', (req, res) => {
  let sql = `select * from words`
  conMysql(sql).then(result => {
    if (result.length > 0) {
      let response = new Response(true, '查询成功', 200, result)
      res.send(response)
      console.log(result)
    } else {
      let response = new Response(false, '查询失败', 400)
      // res.status(400).send(response)
      res.send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})
// 获取所有单词信息并返回到前端
app.post('/updWord', (req, res) => {
  console.log(typeof req.body.pronounce)
  console.log(typeof req.body.description)
  console.log(typeof req.body.word)
  let sql = `update words set  pronounce= '${req.body.pronounce}',description='${req.body.description}' where word = '${req.body.word}'`
  conMysql(sql).then(result => {
    if (result.affectedRows === 1) {
      let response = new Response(true, '修改成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '修改失败', 400)
      res.send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 修改密码
app.post('/changePwd', (req, res) => {
  let sql = `update user set password = '${req.body.pwd}' where username = '${req.body.username}' and password = '${req.body.oldPwd}'`
  conMysql(sql).then(result => {
    if (result.affectedRows === 1) {
      let response = new Response(true, '修改成功,请重新登录', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '修改失败,请稍后重试', 400)
      res.status(400).send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 添加单词
app.post('/addWord', (req, res) => {
  let sql = `INSERT INTO words(word,pronounce,description) VALUES('${req.body.word}','${req.body.pronounce}','${req.body.description}')`
  conMysql(sql).then(result => {
    if (result.affectedRows === 1) {
      let response = new Response(true, '添加成功', 200, result)
      res.send(response)
    } else {
      let response = new Response(false, '添加失败，请重试~~', 400)
      res.status(400).send(response)
    }
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 获取当前用户信息
app.get('/getUserInfo', (req, res) => {
  let sql = `select * from user where username = '${req.query.username}'`
  conMysql(sql).then(result => {
    let response = new Response(true, '获取成功', 200, result)
    res.send(response)
  }).catch(_err => {
    res.status(500).send('数据库连接出错!')
  })
})

// 启动
app.listen(3000, () => {
  console.log('express server running at http://127.0.0.1:' + 3000)
})
