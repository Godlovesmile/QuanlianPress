<template>
  <!-- <div class="footer">
      <div class="main">
          <div class="links clearfix">
              <div class="fl links_left">
                  <div class="title_one">内容合作</div>
                  <ul class="clearfix">
                      <li class="fl item" v-for="(item, index) in content" :key="index">
                          <a href="#">
                              <img :src="'../../static/images/'+item+'.png'" alt="内容合作方">
                          </a>
                      </li>
                  </ul>
              </div>
              <div class="fr links_right">
                  <div class="title_two">战略合作</div>
                  <ul class="clearfix">
                    <li class="fl item" v-for="(item, index) in strategy" :key="index">
                        <a href="#">
                            <img :src="'../../static/images/'+item+'.png'" alt="内容合作方">
                        </a>
                    </li>
                  </ul>
              </div>
          </div>
          <div class="about">
            <span>全链社QuanlianPress 版权所有</span>
          </div>
      </div>
  </div> -->
  <div class="footer">
      <div class="main">
          <div class="t_item">
            <img src="~&/images/footer_logo.png" alt="底部logo">
          </div>
          <div class="t_item two">
            <div class="t_item_center">
              <p class="center_top">
                广告合作
              </p>
              <p class="center_bottom">
                <span>QQ/手机/微信</span>: 13901389890 <br/>
                <span>商务邮箱</span>: cx@quanlian.io  <br/>
                <span>投稿邮箱</span>: tougao@quanlian.io
              </p>
            </div>
          </div>
          <div class="t_item three">
            <img src="~&/images/footer_code.png" alt="公众号二维码">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        "baidu",
        "baidu",
        "baidu",
        "baidu",
        "baidu",
        "baidu",
        "baidu",
        "baidu",
        "baidu",
        "baidu"
      ],
      strategy: ["baidu", "baidu", "baidu", "baidu", "baidu"]
    };
  }
};
</script>


<style lang="scss" scoped>
// .footer {
//   display: block;
//   background: #292a32;
//   padding: 0 15px;
//   .main {
//     margin: 0 auto;
//     width: 1170px;
//     padding-top: 20px;
//     background: #292a32;
//     .links {
//       border-bottom: 1px solid #333;
//       .links_left {
//         width: 770px;
//         .title_one {
//           color: #fff;
//           margin-bottom: 20px;
//           height: 40px;
//           line-height: 40px;
//           font-size: 16px;
//         }
//       }
//       .links_right {
//         width: 370px;
//         .title_two {
//           color: #fff;
//           margin-bottom: 20px;
//           height: 40px;
//           line-height: 40px;
//           font-size: 16px;
//         }
//       }
//       .item {
//           display: inline-block;
//           width: 98px;
//           height: 46px;
//           margin: 0 23px 30px 0;
//           img {
//             opacity: 0.5;
//             width: 100%;
//             height: 100%;
//           }
//        }
//     }
//     .about {
//       color: #999;
//       height: 70px;
//       line-height: 70px;
//       font-size: 14px;
//     }
//   }
// }

.footer {
  display: block;
  background: #292a32;
  .main {
    margin: 0 auto;
    width: 1170px;
    background: #292a32;
    height: 255px;
    display: flex;
    align-items: center;
    justify-items: center;
    color: #fff;
    .t_item {
      flex: 1;
      text-align: center;
    }
    .two {
      text-align: left;
      .t_item_center {
          display: inline-block;
          margin: 0 auto;
          margin-left: 99.3px;
          .center_top {
              font-size: 20px;
              margin-bottom: 20px;
          }
          .center_bottom {
              font-size: 16px;
              line-height: 25px;
              span {
                // background: red;
                display: inline-block;
                width: 109px;
                text-align-last: justify;
              }
          }
      }
    }
  }
}
</style>

