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
    <van-swipe
      class="my-swipe"
      :autoplay="0"
      indicator-color="white"
      height="100px"
    >
      <van-swipe-item v-for="(item, index) in images" :key="index">
        <img v-lazy="item" />
      </van-swipe-item>
    </van-swipe>
    <!-- 宫格菜单 -->
    <!-- 一级菜单 -->
    <van-grid :column-num="5" :border="false" :icon-size="45">
      <van-grid-item
        v-for="item in gridNoe"
        :key="item.id"
        :icon="item.icon"
        :text="item.name"
      />
    </van-grid>
    <!-- 二级菜单 -->
    <van-grid :column-num="5" :border="false">
      <van-grid-item
        v-for="item in gridTow"
        :key="item.id"
        :icon="item.icon"
        :text="item.name"
      />
    </van-grid>
    <!-- 列表 -->
    <van-tabs
      v-model="active"
      sticky
      :offset-top="searchHight"
      animated
      swipeable
      color="blue"
    >
      <van-tab
        class="tab"
        :title="items.name"
        v-for="items in data"
        :key="items.id"
      >
        <list :data="items.list"></list>
      </van-tab>
    </van-tabs>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "./tabBar.vue";
import list from "./list";
export default {
  data() {
    return {
      active: 0,
      searchVal: "",
      searchHight: 0,
      gridNoe: [
        {
          id: 0,
          icon: require("../assets/images/icon (1).jpg"),
          name: "美食",
        },
        {
          id: 1,
          icon: require("../assets/images/icon (2).jpg"),
          name: "商超便利",
        },
        {
          id: 2,
          icon: require("../assets/images/icon (3).jpg"),
          name: "水果",
        },
        {
          id: 3,
          icon: require("../assets/images/icon (4).jpg"),
          name: "跑腿服务",
        },
        {
          id: 4,
          icon: require("../assets/images/icon (5).jpg"),
          name: "甜品饮品",
        },
      ],
      gridTow: [
        {
          id: 0,
          icon: require("../assets/images/icon (6).jpg"),
          url: "",
          name: "下午茶",
        },
        {
          id: 1,
          icon: require("../assets/images/icon (7).jpg"),
          url: "",
          name: "汉堡披萨",
        },
        {
          id: 2,
          icon: require("../assets/images/icon (8).jpg"),
          url: "",
          name: "新店尝鲜",
        },
        {
          id: 3,
          icon: require("../assets/images/icon (9).jpg"),
          url: "",
          name: "买菜",
        },
        {
          id: 4,
          icon: require("../assets/images/icon (10).jpg"),
          url: "",
          name: "送药上门",
        },
        {
          id: 5,
          icon: require("../assets/images/icon (11).jpg"),
          url: "",
          name: "星选好店",
        },
        {
          id: 6,
          icon: require("../assets/images/icon (12).jpg"),
          url: "",
          name: "大牌惠吃",
        },
        {
          id: 7,
          icon: require("../assets/images/icon (13).jpg"),
          url: "",
          name: "签到赢钱",
        },
        {
          id: 8,
          icon: require("../assets/images/icon (14).jpg"),
          url: "",
          name: "炸鸡烤串",
        },
        {
          id: 9,
          icon: require("../assets/images/icon (15).jpg"),
          url: "",
          name: "全部分类",
        },
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
            },
            {
              id: 4,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"],
            },
            {
              id: 5,
              title: "太二酸菜鱼(奥体高德汇店)",
              imgUrl: require("../assets/images/logo.jpg"),
              evaluate: 4.8,
              monthly: 448,
              standard: 15,
              delivery: { free: false, price: 3.5 },
              time: 30,
              distance: 2400,
              tags: ["20减19", "120减51", "50减22"],
            },
          ],
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
            },
          ],
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
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
              tags: ["20减19", "120减51", "50减22"],
            },
          ],
        },
        {
          id: 3,
          name: "到点自取",
          list: [],
        },
      ],
      images: [require("../assets/images/swipe-1.gif"), 2, 3, 4],
    };
  },
  components: {
    tabBar,
    list,
  },
  created: function () {},
  methods: {
    //搜索获得焦点
    getFocus: function (el) {
      let i = document.querySelector("input[type='search']");
      i.style.textAlign = "left";
      this.$router.push("search");
    },
    //搜索框失去焦点
    getBlur: function () {
      let i = document.querySelector("input[type='search']");
      i.style.textAlign = "center";
    },
    //搜索框内容改变
    getInput: function (el) {
      console.log(el);
    },
  },
  mounted() {
    console.log(this.$refs.search.height);
    this.searchHight = this.$refs.search.height;
  },
  watch: {
    searchVal: (val, old) => {
      console.log(`旧：${old} - 新：${val}`);
    },
  },
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
      -webkit-mask-image: linear-gradient(to right, black 75%, transparent);
    }
  }
}
.tab {
  min-height: 78vh;
}
</style>