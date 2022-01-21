<template>
  <div class="container">
    <div class="main">
      <Banner />
      <div class="main_title">
        <span class="main_title_caption">HIGH QUALITY ASSURANCE</span>
        <span class="main_title_line"></span>
        <span class="main_title_text">每一件商品都經過嚴格篩選</span>
        <span class="main_title_text">- 力求時尚兼具好品質 -</span>
      </div>
      <div class="main_cards">
        <div class="main_cards_card">
          <img src="./../assets/Image/clothes.jpg" alt="" />
          <li><i class="fas fa-angle-double-down"></i></li>
          <span>熱銷上衣</span>
        </div>
        <div class="main_cards_card">
          <img src="./../assets/Image/coat01.jpg" alt="" />
          <li><i class="fas fa-angle-double-down"></i></li>
          <span>精選外套</span>
        </div>
        <div class="main_cards_card">
          <img src="./../assets/Image/pants.jpg" alt="" />
          <li><i class="fas fa-angle-double-down"></i></li>
          <span>經款褲款</span>
        </div>
      </div>

      <div class="main_shop">
        <div class="main_shop_img">
          <img src="./../assets/Image/shop01.jpg" alt="" />
        </div>
        <div class="main_shop_script">
          <span class="title"> 質感日系時尚 </span>
          <span>自分に忠実 !</span>
          <span>我們希望創造一個優質空間</span>
          <span>讓每個前來的你們，都能穿出屬於自己的日系獨特風格。</span>
          <button>SHOP NOW</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "./../components/Banner.vue";

export default {
  name: "Home",
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.container {
  width: 100%;
  padding-top: 2rem;
  @include flexCenter;
  flex-direction: column;
  .main {
    width: 100%;
    @include pad {
      width: 85%;
    }
    &_title {
      @include flexCenter;
      flex-direction: column;
      background: $light-gray;
      width: 100%;
      margin: 0.5rem 0;
      padding: 1rem 0;
      &_caption {
        font-weight: 700;
        font-size: 1.2em;
      }
      &_line {
        height: 1px;
        background: black;
        width: 2rem;
        margin: 1rem;
      }
      &_text {
        font-size: 12px;
        color: darken($mid-gray, 20%);
      }
    }
    &_cards {
      @include flexCenter;
      flex-direction: column;
      &_card {
        width: 95%;
        height: 20rem;
        position: relative;
        overflow: hidden;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        margin: 0.25rem 0;
        img {
          object-fit: cover;
          width: 100%;
          height: 120%;
          transform: scale(1, 1);
          transition: transform 1s ease-out;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
        li {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: inline-block;
          animation: animate 2s ease-in-out infinite;
        }
        @keyframes animate {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        span {
          position: absolute;
          top: 55%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 700;
        }
      }
    }
    &_shop {
      @include flexCenter;
      flex-direction: column;
      &_img {
        width: 95%;
        height: 35vh;
        overflow: hidden;
        img {
          object-fit: cover;
          width: 100%;
          height: 100%;
          transform: scale(1, 1);
          transition: transform 1s ease-out;
          cursor: pointer;
          &:hover {
            transform: scale(1.1, 1.1);
          }
        }
      }
      &_script {
        @include flexCenter;
        flex-direction: column;
        margin-top: 1rem;
        span {
          margin: 0.15rem;
          font-size: 14px;
        }
        .title {
          font-weight: 900;
          font-size: 18px;
        }
        button {
          all: unset;
          border: 1px solid;
          margin-top: 0.5rem;
          padding: 0.35rem 1rem;
          font-size: 15px;
          &:hover {
            background: $main-blue;
            color: white;
            transition: all 0.35s ease-out;
          }
        }
      }
      padding-bottom: 8rem;
    }
  }
}
</style>
