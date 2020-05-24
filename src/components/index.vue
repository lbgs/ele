<template>
  <div>
    <van-row class="top-control">
      <van-col span="12" offset="2">
        <div class="address">
          <van-icon name="location" color="#1989fa" />
          <span class="text">广东省广州市天河区东圃镇</span>
          <!-- <span class="arrow-down"> -->
          <van-icon name="arrow-down" />
          <!-- </span> -->
        </div>
      </van-col>
      <van-col offset="6" span="2">
        <van-icon name="scan" />
      </van-col>
      <van-col span="2">
        <van-icon name="chat-o" dot />
      </van-col>
    </van-row>
    <!-- 搜索框 -->
    <van-sticky ref="search">
      <van-search
        class="search"
        v-model="searchVal"
        @input="getInput"
        @focus="getFocus"
        @blur="getBlur"
        placeholder="请输入搜索关键词"
        shape="round"
        input-align="center"
      />
    </van-sticky>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <!-- 宫格菜单 -->
    <!-- 一级菜单 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item in gridNoe" :key="item.id" icon="photo-o" :text="item.name" />
    </van-grid>
    <!-- 二级菜单 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item v-for="item in gridTow" :key="item.id" icon="photo-o" :text="item.name" />
    </van-grid>
    <!-- 列表 -->
    <van-tabs v-model="active" sticky :offset-top="searchHight" animated swipeable>
      <van-tab :title="items.name" v-for="items in data" :key="items.id">
        <div v-for="item in items.list" :key="item.id">
          <div class="card" @click="getShop(item.id)">
            <div class="img">
              <img :src="item.imgUrl" />
            </div>
            <div class="content">
              <div class="title">{{item.title}}</div>
              <div class="evaluate">
                <span style="color: #f6620d;">
                  <van-icon name="star" />
                  {{item.evaluate}}
                </span>
                月售{{item.monthly}}
              </div>
              <div class="distance">
                <div class="starting">
                  <span class="rise">起送￥{{item.standard}}</span>
                  <span class="give">
                    {{ item.delivery.free ? `免配送费` : `配送`}}
                    <span
                      :class="item.delivery.free ? 'free' : ''"
                    >{{item.delivery.price}}</span>
                  </span>
                </div>
                <div class="time-dis">
                  <span class="time">{{item.time}}分钟</span>
                  <span class="disan">{{item.distance | distance}}</span>
                </div>
              </div>
              <div class="tags">
                <span class="tag" v-for="(items,index) in item.tags" :key="index">{{items}}</span>
              </div>
            </div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "./tabBar.vue";
export default {
  data() {
    return {
      active: 0,
      searchVal: "",
      searchHight: 0,
      gridNoe: [
        {
          id: 0,
          icon: "",
          name: "美食"
        },
        {
          id: 1,
          icon: "",
          name: "商超便利"
        },
        {
          id: 2,
          icon: "",
          name: "水果"
        },
        {
          id: 3,
          icon: "",
          name: "跑腿服务"
        },
        {
          id: 4,
          icon: "",
          name: "甜品饮品"
        }
      ],
      gridTow: [
        {
          id: 0,
          icon: "",
          url: "",
          name: "下午茶"
        },
        {
          id: 1,
          icon: "",
          url: "",
          name: "汉堡披萨"
        },
        {
          id: 2,
          icon: "",
          url: "",
          name: "新店尝鲜"
        },
        {
          id: 3,
          icon: "",
          url: "",
          name: "买菜"
        },
        {
          id: 4,
          icon: "",
          url: "",
          name: "送药上门"
        },
        {
          id: 5,
          icon: "",
          url: "",
          name: "星选好店"
        },
        {
          id: 6,
          icon: "",
          url: "",
          name: "大牌惠吃"
        },
        {
          id: 7,
          icon: "",
          url: "",
          name: "签到赢钱"
        },
        {
          id: 8,
          icon: "",
          url: "",
          name: "炸鸡烤串"
        },
        {
          id: 9,
          icon: "",
          url: "",
          name: "全部分类"
        }
      ],
      data: [
        {
          id: 0,
          name: "推进",
          list: [
            {
              id: 0,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: true, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            },
            {
              id: 1,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            }
          ]
        },
        {
          id: 1,
          name: "发现好菜",
          list: [
            {
              id: 0,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: true, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            },
            {
              id: 1,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            }
          ]
        },
        {
          id: 2,
          name: "果蔬商超",
          list: [
            {
              id: 0,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: true, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            },
            {
              id: 1,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            },
            {
              id: 2,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            },
            {
              id: 3,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"]
            }
          ]
        },
        {
          id: 3,
          name: "到点自取",
          list: []
        }
      ]
    };
  },
  components: {
    tabBar
  },
  created: function() {},
  methods: {
    //搜索获得焦点
    getFocus: function(el) {
      let i = document.querySelector("input[type='search']");
      i.style.textAlign = "left";
      this.$router.push('search')
    },
    //搜索框失去焦点
    getBlur: function() {
      let i = document.querySelector("input[type='search']");
      i.style.textAlign = "center";
    },
    //搜索框内容改变
    getInput: function(el) {
      console.log(el);
    },
    //跳转到商店
    getShop: function(id) {
      console.log("跳转");
      console.log(id);
      this.$router.push({ path: "shop", query: { id } });
    }
  },
  mounted() {
    console.log(this.$refs.search.height);
    this.searchHight = this.$refs.search.clientHeight;
  },
  watch: {
    searchVal: (val, old) => {
      console.log(`旧：${old} - 新：${val}`);
    }
  }
};
</script>

<style lang="scss" scoped>
h1 {
  padding: 0;
  margin: 0;
}
.top-control {
  margin: 3vh 0;
  .address {
    display: flex;
    align-items: center;
    .text {
      display: inline-block;
      width: 70%;
      white-space: nowrap;
      overflow: hidden;
      position: relative;
      font-size: 0.9rem;
    }
  }
}
.card {
  display: flex;
  padding: 0 20px;
  margin: 30px 0 0;
  .img {
    margin-right: 14px;
    img {
      width: 20vw;
      height: 20vw;
    }
  }
  .content {
    font-size: 12px;
    width: 100%;
    .title {
      font-size: 16px;
      font-weight: bold;
    }
    .evaluate {
      padding-top: 5px;
    }
    .distance {
      padding-top: 5px;
      display: flex;
      justify-content: space-between;
      width: 100%;
      span {
        margin-right: 5px;
      }
      span:last-of-type {
        margin: 0;
      }
      .give {
        .free {
          color: #ccc;
          text-decoration: line-through;
        }
      }
    }
    .tags {
      padding-top: 10px;
      .tag {
        padding: 3px 2px;
        color: #cc5860;
        border: 1px solid #e5d8dd;
        border-radius: 2px;
        margin-right: 5px;
      }
    }
  }
}
</style>