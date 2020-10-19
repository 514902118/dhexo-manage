<template>
  <div ref="dialogBox" class="dialog-box" @click.stop="" @mouseleave="hideBox">
    <p class="tit">{{data && data.title}}</p>
    <div class="main">
      <div class="box">
        <vue-scroll :ops="scrollOps">
          <div class="vsrcoll-box">
            <p>{{data && data.description}}</p>
          </div>
        </vue-scroll>
      </div>
      <div class="bg-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String
    },
    pos: {
      type: Object
    },
    data: {
      type: Object
    }
  },
  data() {
    return {
      scrollOps: {
        vuescroll: {
          mode: 'native'
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          maxHeight: 290
        },
        // 轨道
        rail: {
          background: '#f1f1f1',
          opacity: 1,
          size: '5px',
          specifyBorderRadius: '6px',
          // gutterOfEnds: '4px',
        },
        // 滚动条
        bar: {
          background: '#959595',
          onlyShowBarOnScroll: true,
          showDelay: 0,
          keepShow: true,
          size: '11px'
        }
      }
    }
  },
  methods: {
    getBoxPos() {
      this.$refs.dialogBox.style.top = this.pos.pageY + 'px'
      this.$refs.dialogBox.style.left = this.pos.pageX + 40 + 'px'
    },
    hideBox() {
      this.$refs.dialogBox.style.top = -999 + 'px'
      this.$refs.dialogBox.style.left = -999 + 'px'
    }
  },
  watch: {
    pos() {
      this.getBoxPos()
    }
  },
  mounted() {
    if (this.pos && this.pos['pageX']) {
      this.getBoxPos()
    }
    
  }
}
</script>

<style lang="scss" scoped>
@import '@/static/_common';
.dialog-box {
  position: absolute;
  top: 50%;
  right: -310px;
  z-index: 2;
  width: 300px;
  height: 360px;
  border-radius: 14px;
  margin-top: -140px;
  cursor: initial;
  background-color: rgba(201,201,201, 0.9);
  .tit {
    position: relative;
    top: -8px;
    left: 0;
    z-index: 3;
    width: 200px;
    height: 50px;
    line-height: 50px;
    padding-left: 25px;
    padding-right: 35px;
    border-radius: 10px;
    border-bottom-right-radius: 70px;
    margin-bottom: 0;
    text-align: left;
    color: #fff;
    background-color: $bgColor13;
  }
  .main {
    position: relative;
    height: 100%;
    .box {
      position: relative;
      padding: 7px 0 8px 30px;
      text-align: left;
      .vsrcoll-box {
        line-height: 26px;
        padding-top: 22px;
        padding-bottom: 22px;
        word-break: break-all;
        word-wrap: break-word;
        font-size: 15px;
        color: $fontColor7;
      }
    }
    .bg-box {
      position: absolute;
      top: 7px;
      left: 12px;
      z-index: -1;
      width: calc(100% - 34px);
      height: calc(100% - 69px);
      border-radius: 8px;
      background-color: #fff;
    }
  }
}
</style>