<template>
  <div class="shop">
    <div class="bg">
      <img
        src="https://p1.meituan.net/mogu/3a3d8bf7a8d02a64d745495100721daa175772.jpg@220w_125h_1e_1c"
        alt
      />
    </div>
    <div class="logo">
      <img
        src="https://p0.meituan.net/xianfu/a5c31ae0e09bd021c65eab5fce254110325859.jpg@130w_130h_1e_1c"
        alt
      />
    </div>
    <div class="info-control">
      <h1 class="title">广场前老牌卤味饭</h1>
      <div class="content">
        <span>评价4.7</span>
        <span>月售1929</span>
        <span>蜂鸟快送约30分钟</span>
      </div>
      <div class="volume">
        <div class="piece" v-for="item in 2" :key="item">
          <div class="text">
            <span>5.1</span>
            折起抵用券
          </div>
          <div class="btn">购买</div>
        </div>
      </div>
      <div :style="`height:${moveY}px`">
        <div ref="show">
          <div class="tag-control">
            <div class="tags">
              <van-tag plain type="danger">标签</van-tag>
            </div>
            <div class="residue">
              <span>8个优惠</span>
              <van-icon name="arrow-down" />
            </div>
          </div>
          <div class="affiche">公告：传承中华美味，专业提供质简餐！</div>
        </div>
        <!-- 隐藏 -->
        <div class="show" :style="`opacity: 0;`">
          <div class="title">优惠</div>
          <ul class="content">
            <li v-for="item in 8" :key="item">
              <van-tag plain type="danger">标签</van-tag>
              <p class="txt">配送费立减2.4元</p>
            </li>
          </ul>
          <div class="title">服务</div>
          <ul class="content">
            <li v-for="item in 2" :key="item">
              <van-tag plain>标签</van-tag>
              <p class="txt">支持订单极速退款</p>
            </li>
          </ul>
          <div class="title">公告</div>
          <div class="content">传承中华美味，专业提供质简餐！</div>
          <div class="top-btn"></div>
        </div>
      </div>
    </div>
    <!-- 点餐、评价、商家 -->
    <div @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" class="move">
      <van-tabs v-model="active" swipeable sticky color="blue">
        <van-tab title="点餐">
          <meal></meal>
        </van-tab>
        <van-tab title="评价" style="height:100vh">
          <div class="review">点评</div>
        </van-tab>
        <van-tab title="商家" style="height:100vh">
          <div class="merchant">商家</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import meal from "./meal.vue";
export default {
  data() {
    return {
      offsetTopArr: null,
      active: 0,
      startY: 0,
      moveY: 58
    };
  },
  components: {
    meal
  },
  created(){
    console.log(this.$refs)
  },
  methods: {
    touchStart: function(el) {
      // console.log(el.touches[0].screenY);
      this.startY = el.touches[0].screenY;
    },
    touchMove: function(el) {
      console.log(el.touches[0].screenY - this.startY);
      // let Y = el.touches[0].screenY - this.startY;
      // if (Y > 0) {
      //   el.preventDefault();
      //   this.moveY = Y + 58;
      // } else {
      //   return true;
      // }
    },
    touchEnd: function(el) {
      let y = 58;
      this.moveY = this.moveY - y > 30 ? 500 : y;
    }
  }
};
</script>
 <style lang="scss" scoped>
.move {
  position: relative;
}
.fli {
  width: 100px;
  height: 100px;
  background-color: red;
  color: white;
  position: fixed;
  z-index: 555;
  top: 100px;
}
.shop {
  position: relative;
  .bg {
    position: relative;
    height: 100px;
    img {
      z-index: -1;
      position: absolute;
      width: 100vw;
    }
  }
  .logo {
    position: absolute;
    top: 45px;
    width: 100vw;
    text-align: center;
    z-index: 1;
    img {
      width: 70px;
    }
  }
  .info-control {
    background-color: #fff;
    text-align: center;
    padding: 20px;
    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .content {
      font-size: 0.1rem;
      margin: 5px 0;
      color: #666;
      span {
        padding: 0 10px;
        position: relative;
        &:not(:first-child)::after {
          content: "";
          position: absolute;
          left: 0;
          top: 5px;
          width: 1px;
          height: 10px;
          background-color: #ccc;
        }
      }
    }
    .volume {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      .piece {
        display: flex;
        .text,
        .btn {
          background-color: coral;
          padding: 6px 3.5vw;
          font-size: 0.1rem;
          color: white;
        }
        .text {
          border-radius: 0 5px 5px 0;
          span {
            font-size: 1rem;
          }
        }
        .btn {
          border-radius: 5px 0 0 5px;
        }
      }
    }
    .tag-control {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      .residue {
        font-size: 10px;
        color: #999;
        span {
          margin-right: 5px;
        }
      }
    }
    .affiche {
      text-align: left;
      font-size: 10px;
      color: #666;
    }
    .show {
      text-align: left;
      .title {
        font-size: 1.1rem;
        font-weight: bold;
        margin: 10px 0;
      }
      .content {
        li {
          margin: 10px 0;
          .txt {
            display: inline-block;
            margin-left: 10px;
          }
          span {
            padding: 2px 3px;
          }
        }
      }
      .top-btn {
        position: relative;
        margin-top: 20px;
        &::after,
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          width: 30px;
          height: 5px;
          background-color: #999;
          border-radius: 10px;
        }
        &::after {
          transform: translate(-100%) rotateZ(-20deg);
        }
        &::before {
          transform: translateX(-20%) rotateZ(20deg);
        }
      }
    }
  }  
}
.van-card {
  margin: 0 !important;
  background-color: #fff !important;
}
.van-sidebar-item--select {
  border-color: white !important;
}
</style>