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
        font-weight: 900;
        font-size: 1.15em;
      }
      &_line {
        height: 1px;
        background: black;
        width: 2rem;
        margin: 1rem;
      }
      &_text {
        font-size: 12px;
        font-weight: 200;
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
        img {
          object-fit: cover;
          width: 100%;
          height: 120%;
        }
        li {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        span {
          position: absolute;
          top: 58%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
