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
  .left{
      .phone{
          font-size: 2rem;
          font-weight: bold;
      }
      .text{
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
</style>