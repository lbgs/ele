<template>
  <div>
    <van-sticky ref="search">
      <van-search
        class="search"
        v-model="searchVal"
        @input="getInput"
        @focus="getFocus"
        @blur="getBlur"
        placeholder="请输入搜索关键词"
        shape="round"
        show-action
        action-text="搜索"
        input-align="left"
        :autofocus="true"
      >
        <div slot="left" class="back" @click="getBack">
          <van-icon name="arrow-left" size="20" />
        </div>
      </van-search>
    </van-sticky>
    <h1>搜索页面</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      searchVal: ""
    };
  },
  methods: {
    //搜索获得焦点
    getFocus: function(el) {
      let i = document.querySelector("input[type='search']");
      // i.style.textAlign = "left";
    },
    //搜索框失去焦点
    getBlur: function() {
      let i = document.querySelector("input[type='search']");
      // i.style.textAlign = "center";
    },
    //搜索框内容改变
    getInput: function(el) {
      console.log(el);
    },
    //返回
    getBack: function() {
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
.search {
}
.back {
  margin-right: 10px;
  display: flex;
  align-items: center;
}
</style>