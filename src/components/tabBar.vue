<template>
  <div id="tabBar">
    <van-tabbar v-model="active" :placeholder="true" :route="true">
      <van-tabbar-item
        icon="home-o"
        :to="item.url"
        v-for="item in tabbar"
        :key="item.url"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
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

<style lang="scss" scope>
</style>
