<template>
  <div id="app">
    <router-view class>主页</router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: "外卖",
          url: "/index"
        },
        {
          name: "订单",
          url: "/order"
        },
        {
          name: "我的",
          url: "/my"
        }
      ]
    };
  },
  components: {},
  methods: {}
};
</script>

<style lang="scss">
.my-swipe {
  width: 93vw;
  margin: 0 auto;
  border-radius: 10px;
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 5.46rem;
    text-align: center;
    background-color: #39a9ed;
  }
}
</style>
