<template>
  <div class="navBar">
    <div class="nav clearfloat">
      <div class="fl logo">
        <a href="#">
          <img src="~&/images/logo.png" alt="logo">
        </a>
      </div>
      <div class="fr download">
        <img class="download_phone" src="~&/images/phone.png" alt="phone">
        <span>APP下载</span>
        <img class="download_QRCode" src="~&/images/QRCode.png" alt="下载页二维码">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewNav',
  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navBar {
  background-color: #fff;
  height: 66px;
  width: 100%;
  z-index: 101;
  .nav {
    width: 1200px;
    height: 66px;
    margin: 0 auto;
    position: relative;
    .logo {
      line-height: 66px;
      img {
        width: 150px;
        height: 42px;
        vertical-align: middle;
      }
    }
    .download {
      position: relative;
      line-height: 66px;
      cursor: pointer;
      span {
        font-size: 16px;
        font-weight: 500;
        margin-left: -10px;
      }
      .download_QRCode {
        position: absolute;
        left: 18px;
        top: 55px;
        width: 120px;
        height: 120px;
        display: none;
      }
      &:hover .download_QRCode{
        display: block;
      }
    }
  }
}
</style>
