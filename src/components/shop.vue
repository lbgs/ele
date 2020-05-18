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
    <van-tabs v-model="active" swipeable  sticky color="blue">
      <van-tab title="点餐">
        <van-sticky :offset-top="44">
          <van-sidebar v-model="activeKey" class="nav-left" @change="scrollTo">
            <van-sidebar-item :title="item.name" v-for="item in list" :key="item.id" />
          </van-sidebar>
        </van-sticky>
        <div class="food-control">
          <div class="category" v-for="item in list" :key="item.id">
            <van-sticky :offset-top="44">
              <p class="food-name">{{item.name}}</p>
            </van-sticky>
            <van-card
              class="card"
              v-for="items in item.data"
              :key="items.id"
              price="2.00"
              desc="描述信息"
              :title="items.name"
              thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            />
          </div>
        </div>
      </van-tab>
      <van-tab title="评价" style="height:100vh">
        <div class="review">点评</div>
        <meal></meal>
      </van-tab>
      <van-tab title="商家" style="height:100vh">
        <div class="merchant">商家</div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import meal from "./meal.vue";
export default {
  data() {
    return {
      activeKey: 0,
      offsetTopArr: null,
      list: [
        {
          id: 0,
          name: "热销",
          data: [
            {
              id: 0,
              name: "叉烧烧鸭双拼-1",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 1,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            }
          ]
        },
        {
          id: 1,
          name: "推荐",
          data: [
            {
              id: 0,
              name: "叉烧烧鸭双拼-2",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 1,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 2,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 3,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 4,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            }
          ]
        },
        {
          id: 2,
          name: "招牌",
          data: [
            {
              id: 0,
              name: "叉烧烧鸭双拼-3",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 1,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 2,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 3,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 4,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            }
          ]
        },
        {
          id: 3,
          name: "19元套餐",
          data: [
            {
              id: 0,
              name: "叉烧烧鸭双拼-4",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 1,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 2,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 3,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 4,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            }
          ]
        },
        {
          id: 4,
          name: "29元套餐",
          data: [
            {
              id: 0,
              name: "叉烧烧鸭双拼-5",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 1,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 2,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 3,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            },
            {
              id: 4,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12,
              icon: ""
            }
          ]
        }
      ],
      active: 0
    };
  },
  components: {
    meal
  },
  created() {},
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollTo: function(e) {
      document.documentElement.scrollTop = this.offsetTopArr[e] + 1;
    },
    onScroll() {
      // 滚动监听器
      let navContents = document.querySelectorAll(".category");
      let offsetTopArr = [];
      navContents.forEach(item => {
        offsetTopArr.push(item.offsetTop);
      });
      this.offsetTopArr = offsetTopArr;
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      let navIndex = 0;
      offsetTopArr.forEach((item, index) => {
        if (scrollTop >= item) {
          this.activeKey = index;
        }
      });
    }
  }
};
</script>
 <style lang="scss" scope>
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
  // background-color: cadetblue;
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
      .piece {
        display: flex;
        .text,
        .btn {
          background-color: coral;
          padding: 8px 4vw;
          font-size: 0.1rem;
          color: white;
        }
        .text {
          border-radius: 0 5px 5px 0;
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
  }
  .nav-left {
    position: absolute;
  }
  .food-control {
    padding-left: 85px;
    .food-name {
      margin: 0;
      padding: 5px;
      font-size: 14px;
      background-color: #fff;
    }
    .van-sticky--fixed {
      left: 85px !important;
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