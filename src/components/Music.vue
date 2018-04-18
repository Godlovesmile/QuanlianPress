<template>
    <div class="music clearfix">
        <section class="fl music_left">
            <div class="audio_box">
                <img class="fl clearfix" src="~&/images/bitcoin.png" alt="音频图标">
                <div class="fr press">
                    <p class="text">
                        <span class="text_one">萌妹聊链：话说央妈</span> 
                        <!-- <span class="text_two">苗苗/甜甜</span>  -->
                    </p>
                    <div class="press_bottom">
                        <div :style="'width:'+press" class="strip"></div>
                    </div>
                    <!-- <div class="time">{{nowTime | analysisTime}}</div> -->
                </div>
            </div>
            <div class="play clearfix">
                <div class="btn fl prev">
                    <img src="~&/images/prev.png" alt="左按钮">
                </div>
                <div class="btn fl status" @click="play">
                    <img class="status_img" :src="'../../static/images/'+status+'.png'" alt="暂停">
                </div>
                <div class="btn fl next">
                    <img src="~&/images/next.png" alt="右按钮">
                </div>
            </div>
            <!-- http://m.ximalaya.com/share/sound/81920255 -->
            <audio autobuffer class="audio" src="../../static/music/bitcoin.mp3">不支持</audio>
            <!-- <audio autobuffer class="audio" src=" http://m.ximalaya.com/share/sound/81920255">不支持</audio> -->
        </section>
        <div class="fr music_right">
            <a href="http://mp.weixin.qq.com/mp/homepage?__biz=MzUzODc0MjkzOQ==&hid=3&sn=ff1cc5cb3415a7e1b531a9fc966cefcb&scene=18#wechat_redirect" target="_blank">
                <img src="~&/images/more.png" alt="更多按钮">
            </a>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';

Vue.filter('analysisTime', function (value) {
    return Math.floor(value/60)+':'+Math.floor(value%60);
});

export default {
    data () {
        return {
            audio: null,
            status: 'pause',
            totalTime: 0,
            currentTime: 0,
            nowTime: 0,
            timer: 0,
            press: ''
        };
    },
    methods: {
        play () {
            if (this.audio.paused) {
                // 暂停
                // 播放
                this.audio.play();
                // 修改图片
                this.status = 'play';
                this.totalTime = this.audio.duration;
                // this.currentTime = this.audio.currentTime;
                // console.log(this.totalTime);
                // 时间倒计时
                let that = this;
                this.timer = setInterval(function () {
                    // that.nowTime = that.totalTime-that.audio.currentTime;
                    let currentT = that.audio.currentTime;
                    let totalT = that.totalTime;
                    that.press = (that.audio.currentTime / that.totalTime) * 100 + '%';
                    if (that.press === '100%') {
                        clearInterval(this.timer);
                        that.press = '0%';
                        this.status = 'pause';
                    }
                    // console.log(currentT);
                    // console.log(totalT);
                    // console.log(that.press);
                }, 100);
            } else {
                this.audio.pause();
                // 修改图片
                this.status = 'pause';
                clearInterval(this.timer);
            }
        },
        changePress () {

        }
    },
    mounted () {
        let audio = document.querySelector('.audio');
        this.audio = audio;
    }
};
</script>

<style lang="scss" scoped>
.music {
    .music_left {
        width: 320px;
        height: 130px;
        margin-right: 20px;
        background: #fff;
        .audio_box {
            height: 70px;
            border-bottom: 1px solid #F3F5F7;
            margin: 10px;
            margin-bottom: 0;
            img {
                margin-top: 15px;
                width: 40px;
                height: 40px;
            }
            .press {
                margin-top: 15px;
                width: 250px;
                height: 40px;
                font-size: 15px;
                font-weight: bold;
                color: #ff6600;
                position: relative;
                .text {
                    position: relative;
                    .text_two {
                        position: absolute;
                        right: 0;
                    }
                }
                .press_bottom {
                    margin-top: 14px;
                    width: 160px;
                    height:5px;
                    background: #ccc;
                    // background: red;
                    border-radius: 2.5px;
                    .strip {
                        width: 0;height:5px;background: #ff6600;
                    }
                }
                .time {
                    position: absolute;
                    bottom: -5px;
                    right: 50px;
                }
            }
        }
        .play {
            background: #fff;
            height: 60px;
            line-height: 60px;
            .btn {
                height: 60px;
                line-height: 60px;
                img {
                    margin-top: 20px;
                }
            }
            .status {
                margin-left: 25px;
                margin-right: 25px;
                img {
                    margin-top: 12px;
                    cursor: pointer;
                }
            }
            .prev {
                margin-left: 97px; 
            }
        }
    }
    .music_right {
        width: 50px;
        height: 140px;
        line-height: 140px;
        background: #fff;
        text-align: center;
        img {
            margin-top: 54px;
            cursor: pointer;
        }
    }
}
</style>


