<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-sticky :offset-top="44">
      <van-sidebar v-model="activeKey" class="nav-left" @change="scrollTo">
        <van-sidebar-item :title="item.name" v-for="item in list" :key="item.id" />
      </van-sidebar>
    </van-sticky>
    <div
      class="food-control"
      :style="`margin-top: -${foodY}px;`"
      ref="food"
      @touchstart="touchStart"
      @touchmove="touchMove"
    >
      <div class="category" v-for="item in list" :key="item.id" ref="category">
        <van-sticky :offset-top="44">
          <p class="food-name">{{item.name}}</p>
        </van-sticky>
        <van-card
          class="card"
          v-for="items in item.data"
          :key="items.id"
          price="2.00"
          origin-price="4.00"
          desc="描述信息"
          :title="items.name"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <span class="plus" slot="num">+</span>
        </van-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
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
      offsetTopArr: [],
      foodY: 0,
      status: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.offsetTopArr = this.$refs.category.map(item => item.offsetTop);
    this.foodTop = this.$refs.food.offsetTop;
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    scrollTo: function(e) {
      let setTop = this.offsetTopArr[e] - this.offsetTopArr[0];
      if (this.status) {
        document.documentElement.scrollTop = this.foodTop + setTop;
      } else {
        this.foodY = setTop;
      }
    },
    onScroll(el) {
      // 滚动监听器
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= this.foodTop) {
        document.documentElement.scrollTop = this.foodY + scrollTop;
        this.foodY = 0;
        this.status = true;
      }else{
        this.status = false;
      }
      let navIndex = 0;
      this.offsetTopArr.forEach((item, index) => {
        if (scrollTop >= item + 415) {
          this.activeKey = index;
        }
      });
    },
    touchStart: function(el) {
      console.log(el.touches[0].screenY);
      this.startY = el.touches[0].screenY;
    },
    touchMove: function(el) {
      // console.log(el.touches[0].screenY - this.startY)
      this.foodY = el.touches[0].screenY - this.startY;
      console.log(this.foodY);
    }
  }
};
</script>
<style lang="scss" >
.my-swipe {
  margin: 10px auto;
}
.nav-left {
  position: absolute;
}
.food-control {
  padding-left: 85px;
  position: relative;
  z-index: -10;
  .food-name {
    margin: 0;
    padding: 5px;
    left: 85px;
    font-size: 14px;
    background-color: #fff;
  }
  .van-sticky--fixed {
    left: 85px !important;
  }
  .plus {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: cornflowerblue;
    border-radius: 50%;
    position: relative;
    &::before {
      content: "+";
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translate(-50%);
      color: white;
      font-size: 20px;
      font-weight: bold;
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