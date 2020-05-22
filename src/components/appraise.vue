<template>
  <div class="appraise">
    <div class="rate-control flex">
      <div class="letf flex">
        <div class="num">4.7</div>
        <div class="rate">
          <div class="text">商家评分</div>
          <van-rate v-model="rateVal" readonly allow-half size="5" gutter="10" />
        </div>
      </div>
      <div class="right flex">
        <div class="merchant flex">
          <div class="taste">
            <p>味道</p>
            <span class="font-middle">4.7</span>
          </div>
          <div class="pack">
            <p>包装</p>
            <span class="font-middle">4.7</span>
          </div>
        </div>
        <div class="rider">
          <p>配送</p>
          <span class="font-middle">4.7</span>
        </div>
      </div>
    </div>
    <div class="tabs">
      <span v-for="item in tags" :key="item.id">
        <van-tag
          class="tag-item"
          type="danger"
          :text-color="item.color"
          :color="item.bgColor"
        >{{`${item.name}&nbsp;${item.num}`}}</van-tag>
      </span>
      <van-divider dashed :style='{borderColor:"#9f9f9f"}' />
      <van-checkbox v-model="checked" checked-color="#07c160">只看有内容的评价</van-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rateVal: 3.7,
      checked: true,
      tags: [
        {
          id: 0,
          name: "全部",
          num: 345,
          color: "white",
          bgColor: "#2297fe"
        },
        {
          id: 1,
          name: "最新",
          num: 0,
          color: "black",
          bgColor: "#eaf6ff"
        },
        {
          id: 2,
          name: "好评",
          num: 330,
          color: "black",
          bgColor: "#eaf6ff"
        },
        {
          id: 3,
          name: "差评",
          num: 13,
          color: "#666",
          bgColor: "#f5f5f5"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  flex: 1;
}
.font-middle {
  font-size: 1.2rem;
}
.appraise {
  background-color: #ececec;
}
.rate-control {
  font-size: 0.8rem;
  padding: 20px;
  margin-bottom: 10px;
  background-color: #fff;
  .letf {
    align-items: center;
    .num {
      font-size: 2.3rem;
      color: red;
      margin-right: 10px;
    }
    .rate {
      .text {
        margin-bottom: 10px;
      }
    }
  }
  .right {
    .merchant {
      flex: 2;
      justify-content: space-between;
      padding: 0 20px;
    }
    .rider {
      flex: 1;
      text-align: right;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        width: 1px;
        height: 80%;
        left: 0;
        top: 20%;
        background-color: #eee;
      }
    }
  }
}
.tabs {
  background-color: #fff;
  padding: 20px 10px;
  .tag-item {
    margin: 0 5px;
    font-size: 0.8rem;
    padding: 5px 8px;
  }
}
</style>