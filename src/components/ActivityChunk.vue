<template>
  <div class="fl chunk">
      <div class="chunk_img">
          <a :href="url+'/activity.html?activity_id='+data.id" target="_blank">
              <img class="chunk_img_one" :src="data.activity_poster" alt="chunk img">
          </a>
      </div>
      <div class="chunk_apply">
          <span class="fl title">{{data.title}}</span>
          <i class="fr btn" :class="{btn_stop: data.finished === 1}">{{ data.finished === 1 ? '报名截止' : '报名中' }}</i>
      </div>

      <div class="chunk_address">
           <div class="ad">
                <img class="" src="../../static/images/address.png" alt="时间">
                <span>{{data.address}}</span>
            </div>
            <div class="time">
                <img class="" src="../../static/images/time.png" alt="时间">
                <span>{{data.start_time + '-' +  data.end_time}}</span>
            </div>
      </div>

  </div>
</template>

<script>
import config from '@/api/config';

export default {
    props: ['chunk-data'],
    data () {
        return { 
            data: this.chunkData,
            url: config.QUANlIAN_URL
        };
    },
    mounted () {
        console.log(23333);
        console.log(this.data);
    }
};
</script>

<style lang="scss" scoped>
.chunk {
    width: 380px;
    margin: 0 10px;
    margin-bottom: 30px;
    background: #fff;
    .chunk_img {
        width: 380px;
        height: 180px;
        .chunk_img_one {
            width: 100%;
            height: 100%;
        }
    }
    .chunk_apply {
        height: 76px;
        border-bottom: 1px solid #f3f5f7;
        margin-left: 10px;
        margin-right: 10px;
        .title {
            margin-top: 20px;
            display: inline-block;
            width: 263px;
            font-size: 16px;
            font-weight: bold;
            color: #222;
        }
        .btn {
            margin-top: 20px;
            display: inline-block;
            width: 60px;
            height: 22px;
            line-height: 22px;
            border-radius: 46px;
            text-align: center;
            background: #ff6600;
            font-size: 12px;
        }
        .btn_stop {
            background: #ccc;
        }
    }
    .chunk_address {
        .ad {
            margin-top: 10px;
            height: 25px;
            line-height: 25px;
            // background: red;
            span {
                display: inline-block;
                width: 345px;
                
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
        .time {
            height: 25px;
            line-height: 25px;
            margin-top: 5px;
            margin-bottom: 10px;
        }
        img {
            height: 14px;
            margin-left: 10px;
            margin-right: 8px;
            margin-top: 5.5px;
        }
    }
}
</style>


