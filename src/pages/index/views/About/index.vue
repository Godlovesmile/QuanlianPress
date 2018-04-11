<template>
  <div class="wrap">
      <div class="placeholder">
          好玩的区块链社群平台
      </div>
      <div class="info">
          <div class="item"><span></span> 关于我们</div>
          <p>
            全链社是根植于区块链基础上，拥有游戏化、媒体化属性的社群平台，志在为社群用户提供有趣有益、有料有用的行业信息和交流平台，通过亲切好玩、自在轻松带给用户独有的全新体验。
            <br/><br/>
            作为产品游戏化的业内先锋，全链社将“好玩”提到了相当的高度，用户在平台上的各种参与和贡献，都可以获得相应的QPC（全链积分）作为奖励，这些QPC可以在平台内的积分商城及丰富的兑换场景中任意兑换。不断流通中的QPC就像一根牢固的情感纽带，将社群用户与全链社紧密地结合在一起，双方也将由此实现同步发展，最终达到共生共赢。
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
    margin-top: 66px;
    .placeholder {
        height: 320px;
        line-height: 320px;
        font-size: 300;
        text-align: center;
        color: red;
        background: #ccc;
        margin-bottom: 50px;
    }
    .info {
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


