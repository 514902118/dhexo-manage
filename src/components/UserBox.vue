<template>
  <div class="user-box">
    <div class="info" :class="{'active': showUserTools}" @click="showUserTools=!showUserTools">
      <i class="user-logo">
        <img v-if="imgSrc==='default'" src="../assets/user-photo.png" alt="">
        <img v-if="imgSrc!=='default'&&imgSrc!==''" :src="imgSrc" alt="">
      </i>
      <span>{{userName}}</span>
      <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <div v-show="showUserTools" class="user-tools">
      <p class="logout" @click="logout"><span>退出登录</span></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
var jwt = require('jsonwebtoken')

export default {
  inject: ['reload'],
  data() {
    return {
      showUserTools: false,
      userName: '',
      imgSrc: 'default'
    }
  },
  methods: {
    init() {
      if (Cookies.get('userName') && Cookies.get('userName') !== '') {
        this.userName = Cookies.get('userName')
      } else {
        this.$router.push({
          name: 'login'
        })
      }
      
    },
    logout() {
      Cookies.remove('userName')
      this.$router.push({ name: 'login'})
      this.reload()
    }
  },
  mounted() {
    this.init()
  }
}
</script>

<style lang="scss" scoped>
@import '@/static/_common';
.user-box {
  position: relative;
  width: 300px;
  font-size: 15px;
  .info {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    &:hover, &.active {
      color: $mainColor;
    }
    .user-logo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      img {
        display: inline-block;
        max-width: 100%;
        max-height: 100%;
      }
    }
    span {
      
    }
    i {
      width: 40px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
    }
  }
  .user-tools {
    position: absolute;
    top: 66px;
    right: 0;
    z-index: 2;
    // width: 180px;
    list-style: none;
    border-radius: 4px;
    box-shadow: 0 0px 14px 4px rgba(2, 167, 240, 0.1);
    font-size: 15px;
    background-color: #fff;
    &:hover {
      color: #000;
    }
    p {
      position: relative;
      line-height: 50px;
      padding: 0 20px;
      text-align: left;
      cursor: pointer;
      &:hover {
        color: $mainColor;
      }
      &.logout {
        position: relative;
        text-align: right;
        cursor: default;
        &:hover {
          color: initial;
        }
        span {
          cursor: pointer;
          &:hover {
            color: $mainColor;
          }
        }
      }
    }
    i {
      float: right;
      line-height: 50px;
      font-size: 15px;
    }
  }
}
</style>