<template>
  <header>
    <div class="logo">DHExo</div>
    <div class="no-login">
      <span>{{title}}</span>
      <!-- <router-link v-if="!showUserBox" :to="{ name: 'home' }" tag="span"><i class="el-icon-d-arrow-left"></i>返回首页</router-link> -->
      <span v-if="showUserBox" class="user-box" style="text-align:center">
        <UserBox/>
      </span>
    </div>
  </header>
</template>

<script>
import UserBox from '../UserBox'

export default {
  components: {
    UserBox
  },
  data() {
    return {
      title: '',
      showUserBox: false
    }
  },
  methods: {
    getTitle() {
      let name = this.$route.name
      switch (name) {
        case 'forgot':
          this.title = '忘记密码'
          // if (this.$route.query.update) {
          //   this.title = '修改密码'
          // } else {
          //   this.title = '忘记密码'
          // }
          
          break;
        case 'leaveMessage':
          this.title = '留言总览'
          this.showUserBox = true
          break;
        default:
          this.title = '欢迎使用'
          break;
      }
    }
  },
  mounted() {
    this.getTitle()
  }
}
</script>

<style lang="scss" scoped>
@import '@/static/_common';
header {
  display: flex;
  width: 100%;
  max-width: 1270px;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
  .logo {
    position: relative;
    width: 200px;
    text-align: center;
    font-size: 34.38px;
    font-style: italic;
    color: $mainColor;
    &:after {
      position: absolute;
      top: 50%;
      right: 20px;
      width: 2px;
      height: 40px;
      margin-top: -20px;
      background-color: $bgColor2;
      content: '';
    }
  }
  .no-login {
    flex: 1;
    padding-right: 20px;
    text-align: left;
    span {
      font-weight: 400;
      font-size: 18px;
      letter-spacing: 1px;
      color: #000;
      &:nth-of-type(2) {
        float: right;
        font-weight: normal;
        color: $fontColor2;
        cursor: pointer;
        &:hover {
          color: $mainColor;
        }
        .user-box {
          &:hover {
            color: #000;
          }
        }
      }
    }
  }
}
</style>