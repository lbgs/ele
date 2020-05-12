<template>
  <div class="my-control">
    <div class="top">
      <van-icon class="icon" size="20" name="setting-o" />
      <van-icon class="icon" size="20" name="chat-o" dot />
    </div>
    <div class="info">
      <div class="left">
        <div class="phone">188****7785</div>
        <div class="text">再忙，也要记得吃饭呦~</div>
        <van-button icon="coupon-o" round plain size="small">签到领10元红包</van-button>
      </div>
      <div class="right">
        <div class="logo"></div>
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
      <div class="l-item">
        <div class="left alims">
          <van-icon name="like-o" color="blue" />
          <span class="title">我的收藏</span>
        </div>
        <div class="right alims">
          <span class="txt">最高得15元</span>
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  box-shadow: 0 10px 50px -20px #ccc;
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
  margin-top: 5px;
  .m-item {
    flex: 1;
    height: 7vh;
    border-radius: 3px;
    background-color: #fff;
    margin: 0 5px;
    padding: 5px;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-weight: bold;
      font-size: 0.9rem;
    }
    .text {
      span {
        color: darkorange;
        font-weight: bold;
        font-size: 0.9rem;
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
      color: #666;
    }
  }
}
</style>