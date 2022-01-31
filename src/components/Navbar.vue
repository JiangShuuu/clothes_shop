<template>
  <div class="contain">
    <div class="main">
      <div class="main_logo">
        <img src="./../assets/Icon/LogoBA.png" alt="" />
      </div>
      <div class="main_content">
        <div class="main_content_mobile">
          <label for="navbar-toggle" class="nav_taggle-label">
            <span class="hamburger"></span>
          </label>
          <input
            type="checkbox"
            class="navbar-toggle"
            id="navbar-toggle"
            v-model="isOpen"
          />
          <div class="content_list">
            <div class="content_list_background" @click="checkClose()"></div>
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
          <router-link to="/signIn" class="icon_btns_btn icon active">
            <i class="far fa-user-circle"></i>
          </router-link>
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
      isOpen: false,
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
    checkClose() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.contain {
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          transform: scale(0, 1);
          transform-origin: left;
          transition: transform 0.3s ease-out;
          &_background {
            position: absolute;
            top: 4rem;
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
            opacity: 0;
          }
          &_item {
            padding-top: 1rem;
            cursor: pointer;
            transition: transform 0.2s ease-out;
            &:hover {
              text-decoration: underline $main-blue;
              text-decoration-thickness: 2px;
              transform: translate(-3px, -3px);
            }
          }
        }
        .nav_taggle-label {
          position: absolute;
          top: 1.5rem;
          left: 15px;
          cursor: pointer;
          display: flex;
          align-items: center;
          .hamburger {
            position: relative;
          }
          .hamburger,
          .hamburger::before,
          .hamburger::after {
            width: 25px;
            height: 3px;
            background: black;
            margin: 0.2rem 0;
          }
          .hamburger::before,
          .hamburger::after {
            position: absolute;
            content: "";
            left: 0;
          }
          .hamburger::before {
            top: 5px;
          }
          .hamburger::after {
            bottom: 5px;
          }
        }
        .navbar-toggle {
          visibility: hidden;
          display: none;
        }
        .navbar-toggle:checked ~ .content_list {
          transform: scale(1, 1);
        }
        .navbar-toggle:checked ~ .content_list .content_list_items {
          transition: opacity 0.3s ease-out 0.15s;
          opacity: 1;
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
              text-decoration: underline 1px solid $main-blue;
              text-underline-offset: 3px;
              text-decoration-thickness: 3px;
              transform: 0.5s;
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
      // box-shadow: 0px 0px 1px 1px $mid-gray;
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
