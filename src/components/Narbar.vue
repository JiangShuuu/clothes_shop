<template>
  <div class="container">
    <div class="main">
      <div class="main_logo">
        <img src="./../assets/Icon/LogoBA.png" alt="" />
      </div>
      <div class="main_content">
        <div class="main_content_mobile">
          <label class="nav_toggle-label" v-if="isNavOpen" @click="closeNav()">
            <li class="content_btn_close">
              <i class="fas fa-times"></i>
            </li>
          </label>
          <label class="nav_toggle-label" v-else @click="openNav()">
            <li class="content_btn_open">
              <i class="fas fa-bars"></i>
            </li>
          </label>
          <div class="content_list" v-if="isNavOpen">
            <div class="content_list_background" @click="closeNav()"></div>
            <ul class="content_list_items">
              <li class="content_list_item">首頁</li>
              <li class="content_list_item">所有商品</li>
              <li class="content_list_item">關於我們</li>
              <li class="content_list_item">聯絡我們</li>
              <li class="content_list_item">Facebook專頁</li>
            </ul>
          </div>
        </div>
        <div class="main_content_web">
          <div class="content_list">
            <ul class="content_list_items">
              <li class="content_list_item">首頁</li>
              <li class="content_list_item">所有商品</li>
              <li class="content_list_item">關於我們</li>
              <li class="content_list_item">聯絡我們</li>
              <li class="content_list_item">Facebook專頁</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="main_icon">
        <ul class="icon_btns">
          <li class="icon_btns_btn icon active">
            <i class="far fa-user-circle"></i>
          </li>
          <li class="icon_btns_btn icon">
            <i class="fas fa-shopping-bag"></i>
          </li>
          <li class="icon_btns_btn icon"><i class="far fa-heart"></i></li>
          <li class="icon_btns_btn icon"><i class="fas fa-search"></i></li>
        </ul>
      </div>
    </div>
    <div class="nav_bottom">
      <ul class="icon_btns">
        <router-link
          to="/"
          :class="['icon_btns_btn', { active: this.router === '/' }]"
        >
          <i class="fas fa-home icon"></i>
          <span>首頁</span>
        </router-link>
        <router-link
          to="/search"
          :class="['icon_btns_btn', { active: this.router === '/search' }]"
        >
          <i class="fas fa-search icon"></i>
          <span>搜尋商品</span>
        </router-link>
        <router-link
          to="/favorite"
          :class="['icon_btns_btn', { active: this.router === '/favorite' }]"
        >
          <i class="far fa-heart icon"></i>
          <span>我的收藏</span>
        </router-link>
        <router-link
          to="/shoppingCar"
          :class="['icon_btns_btn', { active: this.router === '/shoppingCar' }]"
        >
          <i class="fas fa-shopping-bag icon"></i>
          <span>購物車</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBer",
  data() {
    return {
      router: "",
      isNavOpen: false,
    };
  },
  watch: {
    $route(to, from) {
      // 監控路由變化
      this.router = to.path;
      console.log(from);
    },
  },
  methods: {
    closeNav() {
      this.isNavOpen = false;
    },
    openNav() {
      this.isNavOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.container {
  background: white;
  position: fixed;
  width: 100%;
  z-index: 2;
  .main {
    position: relative;
    @include flexCenter;
    flex-direction: column;
    &_logo {
      img {
        width: 200px;
      }
    }
    &_content {
      &_mobile {
        width: 100%;
        @include pad {
          display: none;
        }
        .content_list {
          &_background {
            position: absolute;
            top: 3.8rem;
            left: 0;
            width: 100%;
            height: 100vh;
            background: $mid-gray;
            opacity: 0.25;
          }
          &_items {
            position: absolute;
            top: 3.8rem;
            left: 0;
            width: 40%;
            min-height: 100vh;
            z-index: 1;
            background: white;
            text-align: center;
          }
          &_item {
            padding-top: 1rem;
            cursor: pointer;
            transition: 0.5s;
            &:hover {
              text-decoration: underline $main-blue;
              text-decoration-thickness: 2px;
              transform: translate(-3px, -3px);
            }
          }
        }
        .nav_toggle-label {
          position: absolute;
          top: 18px;
          left: 15px;
          cursor: pointer;
          .fa-bars {
            width: 25px;
            height: 25px;
          }
          .fa-times {
            width: 25px;
            height: 25px;
          }
        }
      }
      &_web {
        @include mobile {
          display: none;
        }
        .content_list {
          &_items {
            display: flex;
          }
          &_item {
            margin: 0 1rem 0.75rem 1rem;
            cursor: pointer;
            &:hover {
              color: $main-blue;
              border-bottom: 1px solid;
              border-width: 2px;
            }
          }
        }
      }
    }
    &_icon {
      position: absolute;
      top: 18px;
      right: 15px;
      .icon_btns {
        display: flex;
        &_btn {
          cursor: pointer;
        }
        .fa-user-circle {
          width: 25px;
          height: 25px;
        }
        .fa-shopping-bag {
          display: none;
        }
        .fa-heart {
          display: none;
        }
        .fa-search {
          display: none;
        }
        .icon {
          color: $mid-gray;
          &:hover {
            color: $main-blue;
          }
        }
        .active {
          color: $main-blue;
        }

        @include pad {
          .fa-user-circle {
            width: 20px;
            height: 20px;
          }
          .fa-shopping-bag {
            display: block;
            margin: 0 0.75rem;
            width: 20px;
            height: 20px;
          }
          .fa-heart {
            display: block;
            margin: 0 0.75rem 0 0;
            width: 20px;
            height: 20px;
          }
          .fa-search {
            display: block;
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }
  .nav_bottom {
    @include pad {
      display: none;
    }
    width: 100%;
    position: fixed;
    bottom: 0;
    background: white;
    z-index: 2;
    .icon_btns {
      box-shadow: 0px 0px 1px 1px $mid-gray;
      @include flexCenter;
      justify-content: space-around;
      &_btn {
        @include flexCenter;
        flex-direction: column;
        margin: 0.45rem;
        cursor: pointer;
        color: $mid-gray;
        &:hover {
          color: $main-blue;
        }
        .icon {
          width: 20px;
          height: 20px;
          margin: 2px 0;
        }
        span {
          font-size: 10px;
        }
      }
      .active {
        color: $main-blue;
      }
    }
  }
}
</style>
