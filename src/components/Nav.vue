<template>
  <div class="navBar">
    <div class="nav clearfloat">
      <div class="fl logo">
        <a href="#">
          <img src="~&/images/logo.png" alt="logo">
        </a>
      </div>
      <div class="fl mainbav">
        <ul class="clearfloat">
          <li class="tab">
            <router-link to="/">首页</router-link> 
          </li>
          <li class="tab">
            <router-link to="/info">快讯</router-link> 
          </li>
          <li class="tab">
            <router-link to="/activity" :class="{active:isActive}">活动</router-link> 
          </li>
          <li class="tab">
            <router-link to="/about">关于我们</router-link> 
          </li>
        </ul>
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
  name: 'Nav',
  data () {
    return {
      isActive: false
    };
  },
  methods: {
    // 检测路由信息
    checkRoute (path) {
      let routeInfo = path.split('/').indexOf('activity');
      
      if (routeInfo === -1) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    }
  },
  watch: {
    '$route': function (to, from) {
      // 切换路由时清空之前的数据 / 更新记录页码为0
      this.checkRoute(to.path);
    }
  },
  created () {
    // 刷新, 当前路由还是选中状态
    let path = window.location.hash;
    
    this.checkRoute(path);
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
        width: 130px;
        height: 42px;
        vertical-align: middle;
      }
    }
    .mainbav {
      width: 600px;
      margin-left: 40px;
      font-size: 18px;
      padding-top: 5px;
      .active {
        color: #ff6600;
        font-size: 22px;
      }
      .tab {
        float: left;
        line-height: 60px;
        cursor: pointer;
        display: block;
        width: 88px;
        // background: #ccc;
        color: #222;
        text-align: center;
        font-weight: 500;
        &:hover {
          color: #ff6600;
        }
      }
    }
    .download {
      position: relative;
      line-height: 66px;
      cursor: pointer;
      .download_phone {
        margin-right: 12px;
        margin-top: 21px;
        vertical-align: center;
      }
      span {
        font-size: 18px;
        font-weight: 500;
        margin-left: -10px;
      }
      .download_QRCode {
        position: absolute;
        left: -12px;
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
.router-link-exact-active {
  color: #ff6600;
  font-size: 22px;
}
</style>
