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
      ]
    };
  },
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
.my-swipe{
  margin: 10px auto;
}
</style>