<template>
  <div class="meal" :style="`z-index:${skuShow ? 99 : 10};`">
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <van-sticky :offset-top="44">
      <van-sidebar v-model="activeKey" class="nav-left" @change="scrollTo">
        <van-sidebar-item
          :title="item.name"
          v-for="item in list"
          :key="item.id"
        />
      </van-sidebar>
    </van-sticky>
    <div
      class="food-control"
      :style="`margin-top: -${foodY}px;`"
      ref="food"
      @touchstart="touchStart"
      @touchmove="touchMove"
    >
      <div class="category" v-for="item in list" :key="item.id" ref="category">
        <van-sticky :offset-top="44">
          <p class="food-name">{{ item.name }}</p>
        </van-sticky>
        <van-card
          class="card"
          v-for="items in item.data"
          :key="items.id"
          :price="items.price + '.00'"
          origin-price="4.00"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        >
          <div class="title spill" slot="title">{{ items.name }}</div>
          <div class="desc font-size spill" slot="desc">{{ items.desc }}</div>
          <div class="tags font-size" slot="tags">
            <span>月售</span>
            &nbsp;&nbsp;
            <span>好评</span>
          </div>
          <div class="price-top" slot="price-top">
            <van-tag class="font-size" plain type="danger">4.4折</van-tag>
          </div>
          <div class="font-size" slot="origin-price">￥22.00</div>
          <div
            class="plus"
            slot="num"
            :data-id="items.id"
            :data-name="items.name"
            :data-price="items.price"
            @click.stop="onPlus"
          >
            +
          </div>
        </van-card>
      </div>
    </div>
    <div style="height: 20vw"></div>
    <van-overlay :show="skuShow" z-index="102" @click="onSku" />
    <footer class="footer">
      <div class="cart-view">
        <div class="discountTip">折扣</div>
        <transition name="sku">
          <div class="sku" v-show="skuShow">
            <div class="header flex-Justify">
              <div class="headerText">已选商品</div>
              <div class="clear">清空</div>
            </div>
            <ul class="sku-card">
              <li v-for="item in storeCartList" :key="item.id">
                <van-row type="flex">
                  <van-col span="19">{{ item.name }}</van-col>
                  <van-col span="4">￥{{ item.sumPrice }}</van-col>
                  <van-col span="6">
                    <van-stepper
                      v-model="item.number"
                      theme="round"
                      button-size="22"
                      disable-input
                      :name="item.id"
                      @change="goodsChangeNumber"
                      min="0"
                    />
                  </van-col>
                </van-row>
              </li>
            </ul>
          </div>
        </transition>
      </div>
      <div class="bottomNav">
        <van-row type="flex">
          <van-col span="5" class="icon" @click="onSku">图标</van-col>
          <van-col span="13" class="text"
            >￥{{ sumPrice || "未选购商品" }}</van-col
          >
          <van-col span="6" :class="`submit ${sumPrice < 15 || 'action'}`">
            <!-- <van-button :type="sumPrice < 15 ?'default' : 'primary'" :color="sumPrice < 15 || '#535356'">{{sumPrice > 15 ? '去结算': '￥15起送'}}</van-button> -->
            <button type="submit" class="submit">
              {{ sumPrice > 15 ? "去结算" : "￥15起送" }}
            </button>
          </van-col>
        </van-row>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeKey: 0,
      number: 1,
      skuShow: false,
      sumPrice: 0,
      list: [
        {
          id: 0,
          name: "热销",
          data: [
            {
              id: 100,
              name: "叉烧烧鸭双拼-1",
              desc: "描述信息",
              price: 5.0,
              icon: "",
            },
            {
              id: 101,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
          ],
        },
        {
          id: 1,
          name: "推荐",
          data: [
            {
              id: 200,
              name: "叉烧烧鸭双拼-2",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 201,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 202,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 203,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 204,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
          ],
        },
        {
          id: 2,
          name: "招牌",
          data: [
            {
              id: 300,
              name: "叉烧烧鸭双拼-3",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 301,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 302,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 303,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 304,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
          ],
        },
        {
          id: 3,
          name: "19元套餐",
          data: [
            {
              id: 400,
              name: "叉烧烧鸭双拼-4",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 401,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 402,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 403,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 404,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
          ],
        },
        {
          id: 4,
          name: "29元套餐",
          data: [
            {
              id: 500,
              name: "叉烧烧鸭双拼-5",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 501,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 502,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 503,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
            {
              id: 504,
              name: "叉烧烧鸭双拼",
              desc: "描述信息",
              price: 12.0,
              icon: "",
            },
          ],
        },
      ],
      offsetTopArr: [],
      foodY: 0,
      status: false,
      storeCartList: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
    this.offsetTopArr = this.$refs.category.map((item) => item.offsetTop);
    this.foodTop = this.$refs.food.offsetTop;
  },
  destroy() {
    // 必须移除监听器，不然当该vue组件被销毁了，监听器还在就会出错
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    // 购物车列表
    onSku: function () {
      if (this.storeCartList.length >= 1) this.skuShow = !this.skuShow;
    },
    //商品添加
    onPlus: function (e) {
      let storeCartList = this.storeCartList;
      let id = e.target.dataset.id;
      let name = e.target.dataset.name;
      let price = e.target.dataset.price;
      let goods = {
        id,
        name,
        price,
        sumPrice: price,
        number: 1,
      };

      if (storeCartList.length <= 0) {
        storeCartList.push(goods);
      } else {
        let flag = storeCartList.some((item) => item.id == id);
        if (flag) {
          storeCartList = storeCartList.map((item) => {
            if (item.id == id) {
              item.number += 1;
              item.sumPrice = parseFloat(item.price) * item.number;
            }
            return item;
          });
        } else {
          storeCartList.push(goods);
        }
      }
      this.sumPrice += parseFloat(price);
      this.storeCartList = storeCartList;
    },
    // 商品增加和减少
    goodsChangeNumber: function (e, detail) {
      let id = detail.name;
      this.storeCartList = this.storeCartList.filter((item) => {
        if (item.id == id) {
          item.number = e;
          item.sumPrice = item.price * e;
        }
        if (item.number != 0) return item;
      });
      console.log(this.storeCartList);
      if (this.storeCartList.length <= 0) this.skuShow = false;
    },
    scrollTo: function (e) {
      let setTop = this.offsetTopArr[e] - this.offsetTopArr[0];
      if (this.status) {
        document.documentElement.scrollTop = this.foodTop + setTop;
      } else {
        this.foodY = setTop;
      }
    },
    onScroll(el) {
      // 滚动监听器
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop >= this.foodTop) {
        document.documentElement.scrollTop = this.foodY + scrollTop;
        this.foodY = 0;
        this.status = true;
      } else {
        this.status = false;
      }
      let navIndex = 0;
      this.offsetTopArr.forEach((item, index) => {
        if (scrollTop >= item + 415) {
          this.activeKey = index;
        }
      });
    },
    touchStart: function (el) {
      console.log(el.touches[0].screenY);
      this.startY = el.touches[0].screenY;
    },
    touchMove: function (el) {
      // console.log(el.touches[0].screenY - this.startY)
      this.foodY = el.touches[0].screenY - this.startY;
      console.log(this.foodY);
    },
  },
};
</script>
<style lang="scss" >
.meal {
  position: relative;
  z-index: 2;
}
.my-swipe {
  margin: 10px auto;
}
.nav-left {
  position: absolute;
}
.font-size {
  font-size: 0.5rem;
  margin: 3px 0;
}
.spill {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.food-control {
  padding-left: 85px;
  position: relative;
  z-index: -10;
  .food-name {
    margin: 0;
    padding: 5px;
    left: 85px;
    font-size: 14px;
    background-color: #fff;
  }
  .van-sticky--fixed {
    left: 85px !important;
  }
  .van-tag {
    padding: 0 0.2rem;
  }
  .title {
    font-weight: bold;
  }
  .plus {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: cornflowerblue;
    border-radius: 50%;
    position: relative;
    &::before {
      content: "+";
      position: absolute;
      top: -2px;
      left: 50%;
      transform: translate(-50%);
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
.van-card {
  margin: 0 !important;
  background-color: #fff !important;
}
.van-sidebar-item--select {
  border-color: white !important;
}
.flex-Justify {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 105;
  .discountTip {
    width: 100%;
    background-color: #f9e8a3;
    padding: 2px;
    text-align: center;
    font-size: 0.2rem;
    color: #333;
  }
  .header {
    padding: 10px;
    background-color: #eceff1;
  }
  .sku {
    .sku-card {
      background-color: white;
      li {
        padding: 10px;
        .van-stepper__minus {
          color: rgb(35, 149, 255);
          border: 1px solid rgb(35, 149, 255);
          border-radius: 50%;
        }
        .van-stepper__plus {
          border-radius: 50%;
          color: white;
          background-color: rgb(35, 149, 255);
        }
        .van-stepper__input {
          width: 25px;
          background-color: white;
        }
      }
    }
  }
  .bottomNav {
    background-color: rgba(61, 61, 63, 0.9);
    color: white;
    line-height: 12vw;
    width: 100%;
    position: relative;
    z-index: 99;
    .icon,
    .submit {
      text-align: center;
    }
    .submit {
      background-color: #535356;
      border: 0;
    }
    .submit.action {
      background-color: #38ca73;
      color: white;
    }
    .text {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
}
.sku-enter-active {
  transition: all 0.3s ease;
}
.sku-leave-active {
  transition: all 0.1s;
}
.sku-enter,
.sku-leave-to {
  transform: translateY(100-10px);
  // opacity: 0;
}
</style>