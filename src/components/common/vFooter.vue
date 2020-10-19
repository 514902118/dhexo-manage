<template>
  <div class="footer">
    <div class="info">
      <h4>DHExo</h4>
      <div class="us">
        <h5>联系我们</h5>
        <p>工作时间：周一到周五 9：00-18：00</p>
        <p>邮箱：DHExo@DHtongliang.com</p>
      </div>
      <div class="link">
        <h5>友情链接</h5>
        <p>美国AccuraScience公司</p>
      </div>
    </div>
    <footer>
      Copyright 2020 - 2021宁波鼎禾桐梁科技有限公司 版权所有    浙ICP备18888888号-8
    </footer>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/static/_common';
.footer {
  width: 100%;
  background-color: $bgColor1;
  .info {
    display: flex;
    width: 1200px;
    height: 140px;
    padding: 30px 0;
    margin: 0 auto;
    h4 {
      position: relative;
      width: 330px;
      line-height: 140px;
      padding-left: 40px;
      text-align: center;
      font-size: 57px;
      font-style: italic;
      color: $mainColor;
      &:after {
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: $bgColor2;
        content: '';
      }
    }
    > div {
      flex: 1;
      padding-top: 10px;
      &.us {
        padding-left: 44px;
      }
      h5 {
        line-height: 30px;
        margin-bottom: 16px;
        font-weight: 400;
        font-size: 22px;
        letter-spacing: 2px;
        color: $mainColor;
      }
      p {
        line-height: 24px;
        font-size: 15px;
        color: $fontColor3;
      }
    }
  }
  footer {
    display: block;
    width: 100%;
    height: 25px;
    line-height: 25px;
    padding: 15px 0;
    text-align: center;
    font-size: 15px;
    color: $fontColor4;
    background-color: $bgColor3;
  }
}

</style>