<template>
  <div class="wrap">
      <div class="placeholder">
          <img src="~&/images/about.png" alt="关于我们图片">
      </div>
      <div class="info">
          <div class="item"><span></span> 关于我们</div>
          <p>
            全链社是基于区块链技术，带有游戏化、媒体化属性的社群平台，致力于为社群用户提供有趣有益、有料有用的行业信息，和亲切好玩、自在轻松的使用体验。
            <br/><br/>
            作为产品游戏化的业内先锋，全链社将“好玩”提到了相当的高度，用户在平台上的各种参与和贡献都将获得可查证、无篡改的奖励，以此不断激励用户与平台紧密结合，最终实现双方的同步发展和共生共赢。
          </p>
          <div class="item"><span></span> 联系我们</div>
          <p>
              媒体合作：media@quanlian.io
              <br/>
              广告合作：ad@quanlian.io
              <br/>
              品牌合作：bd@quanlian.io
          </p>
          <div class="item"><span></span> 具体地址</div>
          <p class="address">北京市朝阳区利泽东街5号院1号楼3层B303</p>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {};
    }
};
</script>

<style lang="scss" scoped>
.wrap {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
    margin-top: 85px;
    .placeholder {
        height: 320px;
        line-height: 320px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .info {
        margin-top: 50px;
        .item {
            margin-bottom: 10px;
            padding: 0 30px;
            font-weight: bold;
            font-size: 18px;
            span {
                width: 7px;
                height: 7px;
                display: inline-block;
                margin-right: 6px;
                margin-bottom: 2px;
                border-radius: 3.5px;
                background: orange;
            }
        }
        .address {
            padding-bottom: 50px;
        }
        p {
            margin-bottom: 50px;
            margin-left: 14px;
            padding: 0 34px;
            font-size: 17px;
            line-height: 30px;
        }
    }
}
</style>


