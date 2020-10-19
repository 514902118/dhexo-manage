<template>
  <header>
    <div class="logo">DHExo</div>
    <div class="no-login">
      <nav class="nav">
        <router-link :to="{ name: 'geneticInterpretation'}" tag="span">遗传病解读</router-link>
        <span class="query">查询
          <ul class="query-list">
            <router-link :to="{ name: 'diseaseQuery'}" tag="li">疾病查询</router-link>
            <router-link :to="{ name: 'genesQuery'}" tag="li">基因查询</router-link>
            <router-link :to="{ name: 'variationQuery'}" tag="li">变异查询</router-link>
            <router-link :to="{ name: 'symptomsQuery'}" tag="li">症状查询</router-link>
          </ul>
        </span>
        <router-link :to="{ name: 'home'}" tag="span">关于我们</router-link>
      </nav>
      <div v-if="!isLogin" class="tools">
        <router-link :to="{ name: 'login'}" tag="span">登录</router-link>
        <i>/</i>
        <router-link :to="{ name: 'login', query: {'register': true}}" tag="span">注册</router-link>
      </div>
      <UserBox v-if="isLogin"/>
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
      isLogin: Cookies.get("token") ? true : false,
    }
  },
  methods: {
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
    width: 200px;
    text-align: center;
    font-size: 34.38px;
    font-style: italic;
    color: $mainColor;
  }
  .no-login {
    flex: 1;
    display: flex;
    padding-right: 20px;
    text-align: center;
    .nav {
      flex: 1;
      font-weight: 400;
      font-size: 18px;
      > span {
        position: relative;
        display: inline-block;
        width: 180px;
        cursor: pointer;
        &:after {
          position: absolute;
          top: 50%;
          right: 0;
          width: 1px;
          height: 18px;
          margin-top: -9px;
          background-color: #000;
          content: '';
        }
        &:hover {
          color: $mainColor;
        }
        &.query:hover {
          .query-list {
            display: block;
          }
        }
        .query-list {
          display: none;
          position: absolute;
          top: 66px;
          left: -8px;
          z-index: 2;
          width: calc(100% + 16px);
          list-style: none;
          border-radius: 4px;
          box-shadow: 0 0px 14px 4px rgba(2, 167, 240, 0.1);
          background-color: #fff;
          li {
            display: block;
            height: 50px;
            line-height: 50px;
            font-size: 15px;
            color: #000;
            &:hover {
              color: $mainColor;
            }
          }
        }
      }
      .main-color {
        color: $mainColor;
      }
    }
    .tools {
      width: 300px;
      font-size: 18px;
      span {
        cursor: pointer;
        &:hover {
          color: $mainColor;
        }
      }
      i {
        font-style: normal;
        padding: 0 6px;
      }
    }
    
  }
}
</style>