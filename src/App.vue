<template>
  <div id="app">
    <router-view v-if="isReload"/>
  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isReload: true
    }
  },
  methods: {
    reload() {
      this.isReload = false
      this.$nextTick(() => {
        this.isReload = true
      })
    },
  },
}
</script>

<style lang="scss">
@import '@/static/_common';
* {
  padding: 0;
  border: 0;
  margin: 0;
}
#app {
  min-width: 1000px;
  font-family: Noto Sans SC, venir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
textarea {
  font-family: Noto Sans SC, venir, Helvetica, Arial, sans-serif;
}
.home {
  .elcarousel {
    .el-carousel__container {
      height: 530px;
    }
    .el-carousel__indicator {
      padding: 12px 10px !important;
      &.is-active button {
        background-color: $mainColor !important;
      }
    }
    .el-carousel__indicators--outside {
      margin-top: 10px;
    }
    .el-carousel__button {
      width: 52px;
      height: 5px;
      border-radius: 10px;
    }
  }
}

.login-box {
  .el-form-item {
    margin-bottom: 22px;
    &.forgot-form-item {
      margin-bottom: 0;
    }
  }
  .elinput {
    .el-input__icon {
      width: 40px;
      line-height: 56px;
      font-size: 22px;
      color: #000;
    }
    .el-input__inner {
      height: 56px;
      line-height: 56px;
      padding-left: 42px;
      padding-right: 42px;
      border-radius: 18px;
      text-align: center;
      font-size: 15px;
    }
  }
}
.el-input__icon {
  font-size: 25px !important;
  &.el-icon-lock {
    font-size: 26px !important;
  }
  &.icon-yonghu {
    display: inline-block;
    width: 40px !important;
    font-size: 21px !important;
  }
  &.icon-yanzhengma {
    display: inline-block;
    width: 40px !important;
    font-size: 26px !important;
  }
}
.reg-box, .from-box, .upload-form, .user-form {
  .elinput {
    .el-input__icon {
      width: 40px;
      line-height: 48px;
      font-size: 22px;
      color: #000;
    }
    .el-input__inner {
      height: 48px;
      line-height: 48px;
      padding-left: 42px;
      padding-right: 42px;
      border-radius: 18px;
      text-align: center;
      font-size: 15px;
    }
  }
  .elinput2 {
    display: inline-block;
    width: 48%;
    &:nth-of-type(1) {
      margin-right: 4%;
    }
  }
  .elinput3 {
    .el-input__inner {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .el-input-group__append {
      padding: 0;
      border: 0;
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
      color: #fff;
      background-color: $bgColor4;
      cursor: pointer;
      overflow: hidden;
      .elinput3-append {
        display: block;
        width: 68px;
        line-height: 48px;
        text-align: center;
      }
    }
  }
}
// 公共查询样式
.query-box {
  position: relative;
  width: 100%;
  height: 470px;
  background: url(./assets/query-bg.jpg) no-repeat center center;
  background-size: cover;
  h5 {
    width: 100%;
    padding-top: 158px;
    padding-bottom: 53px;
    text-align: center;
    font-weight: normal;
    font-size: 28px;
    letter-spacing: 4px;
    color: #fff;
  }
  .box {
    position: absolute;
    top: 254px;
    left: 50%;
    width: 700px;
    margin-left: -350px;
    height: 60px;
    .query-btn {
      display: inline-block;
      width: 100px;
      line-height: 34px;
      border-top-left-radius: 2px;
      border-top-right-radius: 2px;
      border: 0;
      margin-right: 2px;
      text-align: center;
      font-size: 14px;
      color: #7674a3;
      background-color: rgba(255, 255, 255, .7);
      vertical-align: bottom;
      cursor: pointer;
    }
    .query-btn-active {
      line-height: 40px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      font-weight: 600;
      color: #fff;
      background-color: $mainColor;
    }
    .query-inp {
      width: 100%;
    }
    .el-input-group__append {
      padding: 0;
    }
    .el-input__icon {
      display: inline-block;
      width: 104px;
      text-align: center;
    }
  }

  .query-inp, .multiple-box {
    .el-input__inner {
      height: 48px;
      line-height: 48px;
      padding-right: 66px;
      border: 1px solid $mainColor;
      border-right: 0;
      border-radius: 0;
      text-align: left;
      font-size: 15px;
    }
    .el-input-group__append {
      width: 64px;
      border: 0;
      border-top-right-radius: 24px;
      border-bottom-right-radius: 24px;
      text-align: center;
      font-size: 27px;
      color: #fff;
      background-color: $mainColor;
      cursor: pointer;
      overflow: hidden;
    }
  }
  .multiple-box {
    .el-input__inner {
      padding-left: 42px;
    }
    .el-select {
      width: 90%;
      .el-input__inner {
        border: 0;
      }
      .el-input__suffix {
        // right: 45px;
      }
      .el-select__caret {
        font-size: 20px !important;
        color: $mainColor;
      }
    }
    .select-box {
      .el-select {
        width: 100%;
        .el-tag.el-tag--info {
          height: auto;
          min-height: 24px;
          > span {
            display: inline-block;
            max-width: 170px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .el-tag__close.el-icon-close {
          top: -5px;
        }
      }
      .el-select__tags {
        top: 14% !important;
        transform: none;
        background-color: #fff;
      }
      &:nth-of-type(2) {
        .el-input__inner {
          height: 46px !important;
          line-height: normal !important;
          border-radius: 0;
        }
      }
    }
  }
}
.query-box2 {
  text-align: center;
  .query-inp {
    margin: 0 auto !important;
    .el-input-group__append {
      width: 80px !important;
      padding: 0;
    }
    .el-input__inner {
      padding-left: 42px;
      border-top-left-radius: 24px !important;
      border-bottom-left-radius: 24px !important;
    }
  }
}
.query-box3 {
  .query-inp, .multiple-box {
    .el-input__inner {
      border-top-left-radius: 24px !important;
      border-bottom-left-radius: 24px !important;
    }
  }
}

.brief-info, .diseases-info {
  position: relative;
  width: 880px;
  margin: 56px auto 120px;
  list-style: none;
  li {
    position: relative;
    display: block;
    width: 100%;
    height: 68px;
    border-top-left-radius: 70px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 70px;
    margin-bottom: 4px;
    background-color: $bgColor1;
    i {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 318px;
      height: 68px;
      line-height: 68px;
      border-top-left-radius: 70px;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      text-align: center;
      font-style: normal;
      font-size: 22px;
      color: #fff;
    }
    span {
      display: inline-block;
      width: 100%;
      line-height: 68px;
      padding-left: 386px;
      padding-right: 70px;
      box-sizing: border-box;
      font-size: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
.query-details {
  position: relative;
  // width: 1270px;
  max-width: 80%;
  margin: 0 auto;
  > h4 {
    line-height: 40px;
    padding: 30px;
    text-align: center;
    font-size: 36px;
    color: $fontColor2;
    .tit {
      position: relative;
      padding: 0 80px;
      span {
        display: block;
        width: 100%;
      }
      i {
        position: absolute;
        top: 0;
        right: 0;
        display: block;
        width: 80px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        text-align: center;
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        color: #fff;
        background-color: $bgColor9;
        cursor: pointer;
        &:hover {
          background-color: $bgColor8;
        }
        &.collected {
          background-color: $bgColor9;
          &:hover {
            background-color: $bgColor9;
          }
        }
      }
    }
    .subheading {
      line-height: 24px;
      padding-top: 10px;
      text-align: center;
      font-weight: normal;
      font-size: 20px;
      color: $fontColor9;
    }
  }
  .block {
    margin-top: 40px;
    .title {
      position: relative;
      width: 100%;
      padding-bottom: 6px;
      border-bottom: 2px solid $bgColor7;
      margin-bottom: 50px;
      color: $bgColor5;
      em {
        display: inline-block;
        letter-spacing: 2px;
        font-style: normal;
        font-size: 28px;
      }
      span {
        position: relative;
        margin-left: 20px;
        padding-left: 20px;
        letter-spacing: 2px;
        font-size: 20px;
        vertical-align: middle;
        &:before {
          position: absolute;
          top: -10px;
          left: 0;
          width: 2px;
          height: 34px;
          background-color: $bgColor5;
          content: '';
        }
      }
    }
  }
}
.gene-tab, .diseases-tab, .symptoms-tab, .variation-tab, .results-tab, .patients-tab {
  position: relative;
  // width: 1168px;
  width: 100%;
  // max-width: 80%;
  margin: 0 auto 116px;
  .tit {
    position: relative;
    display: flex;
    width: 100%;
    height: 68px;
    padding: 0 35px;
    border-top-left-radius: 70px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 70px;
    box-sizing: border-box;
    margin-bottom: 12px !important;
    background: $bgGradient1;
    span {
      flex: 1;
      line-height: 68px;
      text-align: center;
      font-size: 22px;
      color: #fff;
    }
  }
  .context {
    position: relative;
    width: 100%;
    border: 1px solid $bgColor5;
    border-top-left-radius: 56px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 56px;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0 35px;
      box-sizing: border-box;
      margin: 20px 0;
      p {
        position: relative;
        flex: 1;
        padding: 0 10px;
        font-size: 15px;
        color: $fontColor6;
        text-align: center;
        word-break: break-all;
        word-wrap: break-word;
        &:nth-of-type(1) {
          text-align: left;
        }
        span {
          position: relative;
          &.active {
            color: $fontColor8;
          }
          &.show {
            &:hover {
              color: $fontColor8;
              cursor: pointer;
            }
          }
        }
        .remark {
          display: block;
          padding: 0 40px;
          box-sizing: border-box;
        }
      }
    }
  }
}
.complete-information {
  position: relative;
  width: 100%;
  height: 803px;
  margin-bottom: 40px;
  background-color: $bgColor1;
  .all {
    position: relative;
    display: flex;
    width: 1270px;
    margin: 0 auto;
    .aside {
      position: relative;
      width: 220px;
      padding-top: 20px;
      border-right: 8px solid #fff;
      list-style: none;
      z-index: 2;
      li {
        display: block;
        height: 54px;
        line-height: 54px;
        text-indent: 50px;
        font-size: 20px;
        color: #000;
        &:hover {
          cursor: pointer;
        }
        &.active {
          position: relative;
          width: calc(100% + 36px);
          color: #fff;
          background: url(./assets/arrow.png) no-repeat left center;
          background-size: 100% 100%;
          cursor: pointer;
        }
      }
    }
    .container {
      position: relative;
      flex: 1;
      height: 803px;
      border-right: 8px solid #fff;
      z-index: 1;
      .context {
        width: calc(100% - 24px);
        height: calc(100% - 24px);
        border-radius: 8px;
        margin-top: 12px;
        margin-left: 12px;
        background-color: #fff;
        .box {
          position: relative;
          padding: 40px 20px 40px 90px;
          h6 {
            width: 100%;
            padding-bottom: 30px;
            text-align: center;
            font-weight: normal;
            font-size: 22px;
            line-height: 40px;
            background-color: #fff;
          }
          > div {
            line-height: 26px;
            padding-top: 100px;
            padding-left: 40px;
            padding-right: 40px;
            word-break: break-all;
            word-wrap: break-word;
            font-size: 20px;
          }
        }
      }
    }
  }
}
// vuescroll
.__vuescroll {
  .__panel {
    padding-right: 70px;
  }
  .__rail-is-vertical {
    right: 14px !important;
  }
  .__bar-wrap-is-vertical {
    left: 50%;
    border-radius: 20px !important;
    margin-left: -7px;
    .__bar-is-vertical {
      background-color: $mainColor;
      background-image: url(./assets/menu-01.png) !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      background-size: 74% auto !important;
    }
  }
}
.dialog-box {
  .__vuescroll {
    .__panel {
      padding-right: 40px;
    }
    .__rail-is-vertical {
      right: 8px !important;
    }
    .__bar-wrap-is-vertical {
      left: 50%;
      border-radius: 20px !important;
      margin-left: -6px;
      .__bar-is-vertical {
        // background-color: $mainColor;
      }
    }
  }
}
.horizontal-bar {
  .__panel {
    padding-bottom: 50px;
    overflow: hidden !important;
  }
  .__rail-is-horizontal {
    bottom: 13px !important;
    height: 7px !important;
    .__bar-is-horizontal {
      height: 14px !important;
      background-color: $mainColor !important;
      background-image: url(./assets/menu-01.png) !important;
      background-position: center center !important;
      background-repeat: no-repeat !important;
      background-size: auto 74% !important;
    }
  }
  // .__bar-wrap-is-horizontal {
  //   left: 50%;
  //   border-radius: 20px !important;
  //   margin-left: -7px;
  //   .__bar-is-horizontal {
  //     background-color: $mainColor;
  //     background-image: url(./assets/menu-01.png) !important;
  //     background-position: center center !important;
  //     background-repeat: no-repeat !important;
  //     background-size: 74% auto !important;
  //   }
  // }
}
.sort-box {
  position: relative;
  display: flex;
  width: 346px;
  height: 50px;
  line-height: 50px;
  border-radius: 36px;
  border: 1px solid $bgColor5;
  overflow: hidden;
  .tit {
    flex: 1;
    text-align: center;
    font-size: 20px;
    color: #fff;
    background-color: $bgColor5;
  }
  p {
    position: relative;
    flex: 1;
    text-align: center;
    font-size: 20px;
    color: $fontColor10;
    &:last-of-type {
      &:after {
        width: 0;
      }
    }
    &:hover {
      cursor: pointer;
    }
    &:after {
      position: absolute;
      top: 50%;
      right: 0;
      width: 1px;
      height: 40px;
      margin-top: -20px;
      background-color: $fontColor10;
      content: '';
    }
    &.active {
      color: $bgColor5;
    }
  }
}

.eldialog {
  .el-dialog {
    border-radius: 36px;
    box-shadow: 0 0px 14px 4px rgba(2, 167, 240, 0.1);
    background-color: #fff;
  }
}
.v-modal {
  background: #bdc5cb !important;
}
.upload-dialog, .user-form {
  .el-input__inner {
    padding-left: 15px !important;
    border-radius: 36px !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
  .el-form-item__label {
    line-height: 49px;
  }
  .multiple-box {
    .select-box {
      .el-input__inner {
        border: 0;
      }
    }
  }
}
.user-form {
  .el-input__inner {
    text-align: left !important;
  }
  .el-textarea__inner {
    padding-left: 15px !important;
    border-radius: 18px !important;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }
}

.leave-message-box {
  .el-upload {
    border: 1px solid $fontColor12; 
  }
}

.icon-sousuo1 {
  font-size: 27px;
}

.spn {
  cursor: pointer;
  &:hover {
    color: $fontColor8;
  }
}

.change-txt {
  span {
    display: block;
    text-indent: 2em;
  }
}

.patients-info {
  .el-input__inner {
    height: 23px;
    line-height: 23px;
    border: 0;
    text-align: center;
    font-size: 15px;
    // background-color: transparent;
  }
  .el-input.is-disabled .el-input__inner {
    background-color: transparent;
    color: $fontColor6;
    cursor: text;
  }
}

.note-inp {
  .el-textarea__inner {
    border: 0;
    border-radius: 0;
    font-size: 15px;
    color: $fontColor6;
    background-color: $bgColor1 !important;
    cursor: text;
  }
  &.el-textarea.is-disabled .el-textarea__inner {
    background-color: transparent !important;
    color: $fontColor6 !important;
    cursor: text !important;
  }
}

.query-inp2 {
  .el-input__prefix {
    left: 0;
  }
  .el-input__inner {
    padding-left: 120px !important;
  }
}
.field-type-select {
  width: 110px;
  .el-input__inner {
    padding-left: 20px !important;
    padding-right: 20px !important;
    font-size: 14px !important;
  }
  .el-input.is-focus .el-input__inner {
    border-color: $bgColor17 !important;
  }
  .el-input__icon {
    width: 25px !important;
  }
  .el-input__suffix {
    right: 0;
    
    .el-input__icon {
      font-size: 14px !important;
    }
  }
}

.select-box2 {
  margin-bottom: 10px;
  .el-select {
    width: 100%;
    .el-tag.el-tag--info {
      // max-width: 210px;
      height: auto;
      min-height: 24px;
      > span {
        display: inline-block;
        max-width: 170px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .el-tag__close.el-icon-close {
      top: -5px;
    }
    .el-select__caret {
      &.el-icon-circle-close {
        font-size: 18px !important;
      }
    }
  }
}
</style>
