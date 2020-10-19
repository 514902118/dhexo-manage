<template>
  <div>
    <vLoginHeader/>
    <div class="main">
      <div class="box">
        <div class="left">
          <div class="aside">
            <h4>DHExo</h4>
            <p>WES遗传病全自动解读管理后台</p>
            <img src="../../assets/home-01.png" alt="" ondragstart="return false"/>
          </div>
        </div>
        <div class="right">
          <!-- 登录 -->
          <div class="login-box">
            <p class="title">账号登录</p>
            <el-form class="login-form" ref="loginForm" :rules="loginRules" :model="loginForm">
              <el-form-item label="" prop="userName">
                <el-input class="elinput" v-model="loginForm.userName" placeholder="请输入账号"
                  readonly onfocus="this.removeAttribute('readonly');" onblur="this.setAttribute('readonly',true);">
                  <i slot="prefix" class="el-icon-user el-input__icon"></i>
                </el-input>
              </el-form-item>
              <el-form-item label="" prop="password">
                <el-input class="elinput" v-model="loginForm.password" type="password" placeholder="请输入密码" @keyup.enter.native="login">
                  <i slot="prefix" class="el-input__icon el-icon-lock"></i>
                </el-input>
              </el-form-item>
              <el-form-item>
                <div class="elbtn" @click="login">登&nbsp;&nbsp;录</div>
              </el-form-item>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <vFooter/>
  </div>
</template>

<script>
import vLoginHeader from '@/components/common/vLoginHeader'
import vFooter from '@/components/common/vFooter'

export default {
  components: {
    vLoginHeader,
    vFooter
  },
  data() {
    var checkUserName = (rule, value, callback) => {
      let regx = /[0-9A-Za-z]{6,16}$/
      if (value === '') {
        return callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      let regx = /[0-9A-Za-z]{6,16}$/
      if (value === '') {
        return callback(new Error('请输入密码'))
      } else if (value.length < 6 || value.length > 16 || !regx.test(value)) {
        return callback(new Error('请输入6-16位英文数字'))
      } else {
        callback()
      }
    }
    var checkAgainPassword = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('请再次输入密码'))
      } else if (value !== this.regForm.password) {
        return callback(new Error('请输入正确的密码'))
      } else {
        callback()
      }
    }
    return {
      // 登录
      loginForm: {
        userName: '',
        password: ''
      },
      loginRules: {
        userName: [
          // { required: true, message: '请输入账号', trigger: 'change' },
          { validator: checkUserName, trigger: 'change' },
        ],
        password: [
          { validator: checkPassword, trigger: 'change' },
        ],
      },
    }
  },
  methods: {
    login() {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          if (this.loginForm.userName === 'admin' && this.loginForm.password === '123456') {
            this.$message({
              type: 'success',
              duration: 2000,
              message: '登录成功'
            })
            Cookies.set('userName', 'admin')
            this.$router.push({
              name: 'leaveMessage'
            })
          } else {
            this.$message({
              type: 'error',
              duration: 2000,
              message: '用户名或密码不正确'
            })
          }
          // this.$post(this.$Url.account.login, {
          //   userName: this.loginForm.userName,
          //   password: this.loginForm.password
          // }).then(res => {
          //   if (res.status === 200) {
          //     let token = res.data
          //     Cookies.set("token", token)
          //     this.$router.push({
          //       name: 'home'
          //     })
          //     // Cookies.set('realName', realName)
          //   } else {
          //     this.$message({
          //       type: 'error',
          //       duration: 2000,
          //       message: res.msg
          //     })
          //   }
          // }).catch(err => {})
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/static/_common';
.main {
  position: relative;
  width: 100%;
  height: 800px;
  margin-bottom: 4px;
  background-color: $bgColor1;
  .box {
    display: flex;
    min-width: 1000px;
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    .left {
      position: relative;
      flex: .5;
      .aside {
        position: absolute;
        top: 50%;
        right: 20px;
        width: 450px;
        margin-top: -250px;
        h4 {
          margin-bottom: 4px;
          font-style: italic;
          font-size: 50px;
          letter-spacing: 1px;
          color: #02a7f0;
        }
        p {
          margin-bottom: 26px;
          letter-spacing: 2px;
          font-weight: 600;
          font-size: 28px;
          color: $fontColor2;
        }
        img {
          display: block;
          width: 550px;
          margin-left: -66px;
        }
      }
    }
    .right {
      position: relative;
      flex: .5;
      .login-box, .reg-box {
        position: absolute;
        top: 154px;
        left: 90px;
        width: 412px;
        border-radius: 36px;
        box-shadow: 0 0px 14px 4px rgba(2, 167, 240, 0.1);
        background-color: #fff;
        .title {
          position: relative;
          width: 100%;
          padding: 40px 0;
          text-align: center;
          font-size: 26px;
          i {
            position: absolute;
            top: 47px;
            right: 20px;
            font-size: 22px;
            cursor: pointer;
          }
        }
        .login-form, .reg-form {
          padding: 0 30px;
        }
        .elformitem1 {
          display: inline-block;
          width: 48%;
          
        }
        .elbtn {
          width: 200px;
          height: 48px;
          line-height: 48px;
          border-radius: 36px;
          margin: 28px auto 18px;
          text-align: center;
          font-size: 15px;
          color: #fff;
          background-image: $bgGradient2;
          cursor: pointer;
        }
        .bottom {
          width: 100%;
          height: 66px;
          line-height: 66px;
          border-bottom-left-radius: 36px;
          border-bottom-right-radius: 36px;
          text-align: center;
          background-color: $bgColor4;
          p {
            position: relative;
            font-size: 15px;
            color: #fff;
            cursor: pointer;
            &:after {
              position: absolute;
              bottom: 18px;
              left: 50%;
              width: 200px;
              height: 1px;
              margin-left: -100px;
              background-color: $bgColor2;
              content: '';
            }
          }
        }
      }
      .reg-box {
        top: 84px;
      }
    }
  }
}
.forgot {
  height: 25px;
  margin-top: -10px;
  text-align: right;
  span {
    display: inline-block;
    cursor: pointer;
  }
}
</style>