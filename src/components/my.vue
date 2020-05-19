<template>
  <div class="my-control">
    <div class="top">
      <van-icon class="icon" size="20" name="setting-o" />
      <van-icon class="icon" size="20" name="chat-o" dot />
    </div>
    <div class="info">
      <div class="left">
        <div class="phone">{{'18823547785' | phone}}</div>
        <div class="text">再忙，也要记得吃饭呦~</div>
        <van-button icon="coupon-o" round plain size="small">签到领10元红包</van-button>
      </div>
      <div class="right">
        <div class="logo">
            <h1 style="color: white; text-align: center;">e</h1>
        </div>
      </div>
    </div>
    <div class="money">
      <div class="m-item">
        <div class="title">红包卡卷</div>
        <div class="text">
          <span>7</span>个未使用
        </div>
      </div>
      <div class="m-item">
        <div class="title">津贴</div>
        <div class="text">
          <span>￥20</span>可用
        </div>
      </div>
      <div class="m-item">
        <div class="title">钱包</div>
        <div class="text">金币、借钱、福利</div>
      </div>
    </div>
    <div class="list">
      <div class="l-item" v-for="item in list" :key="item.id">
        <div class="left alims">
          <van-icon name="like-o" color="blue" />
          <span class="title">{{item.title}}</span>
        </div>
        <div class="right alims">
          <span class="txt">{{item.content}}</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from './tabBar.vue'
export default {
  data() {
    return {
      list: [
        {
          id: 0,
          icon: "",
          title: "我的收藏",
          content: ""
        },
        {
          id: 1,
          icon: "",
          title: "我的客服",
          content: ""
        },
        {
          id: 2,
          icon: "",
          title: "推荐有奖",
          content: "最高得15元"
        },
        {
          id: 3,
          icon: "",
          title: "商务合作",
          content: ""
        },
        {
          id: 4,
          icon: "",
          title: "办卡有礼",
          content: ""
        },
        {
          id: 5,
          icon: "",
          title: "企业订餐",
          content: ""
        }
      ]
    };
  },
  components:{
    tabBar
  },
  created(){
      let item = '18823547785';
      item = item.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
      console.log(item)
  }
};
</script>

<style lang="scss" scope>
.my-control {
  padding: 20px;
}
.top {
  text-align: right;
  .icon {
    margin: 0 5px;
  }
}
.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    .phone {
      font-size: 2rem;
      font-weight: bold;
    }
    .text {
      font-size: 0.9rem;
      color: darkgray;
      margin: 5px 0;
    }
  }
  .right {
    .logo {
      width: 60px;
      height: 60px;
      background-color: cornflowerblue;
      border-radius: 50%;
    }
  }
}
.money {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .m-item {
    flex: 1;
    height: 7vh;
    border-radius: 5px;
    background-color: #fff;
    margin: 0 2px;
    padding: 5px;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 10px #ccc;
    .title {
      font-weight: bold;
      font-size: 0.9rem;
    }
    .text {
      color: #999;
      span {
        color: darkorange;
        font-weight: bold;
        font-size: 1rem;
        margin-right: 5px;
      }
    }
  }
}
.l-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  margin: 10px 0;
  .alims {
    display: flex;
    align-items: center;
  }
  .left {
    span {
      margin-left: 10px;
    }
  }
  .right {
    span {
      font-size: 0.8rem;
      color: #999;
    }
  }
}
</style>