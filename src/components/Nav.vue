<template>
  <div class="navBar">
    <div class="nav clearfloat">
      <div class="fl logo">
        <a href="#">
          <img src="../../static/images/logo.png" alt="logo">
        </a>
      </div>
      <div class="fl mainbav">
        <ul class="clearfloat">
          <li class="tab">
            <router-link to="/">首页</router-link> 
          </li>
          <li class="tab">
            <router-link to="/info">红绿灯</router-link> 
          </li>
          <li class="tab">
            <router-link to="/activity">活动</router-link> 
          </li>
        </ul>
      </div>
      <div class="fr download">
        <img class="download_phone" src="../../static/images/phone.png" alt="phone">
        <span>APP下载</span>
        <img class="download_QRCode" src="../../static/images/QRCode.png" alt="下载页二维码">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navBar {
  position: fixed;
  left: 0;
  top: 0;
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
    .mainbav {
      width: 600px;
      margin-left: 40px;
      font-size: 16px;
      padding-top: 5px;
      .tab {
        float: left;
        line-height: 60px;
        cursor: pointer;
        display: block;
        width: 72px;
        color: #222;
        text-align: center;
        font-weight: 500;
        &:hover {
          color: orange;
        }
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
        // border: 1px solid red;
      }
    }
  }
}
.router-link-exact-active {
  color: orangered;
}
</style>
