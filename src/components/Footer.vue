<template>
  <div class="container">
    <div class="main">
      <div class="main_content">
        <div class="main_content_logo">
          <img src="../assets/Icon/logo.png" alt="" />
        </div>
        <ul class="main_content_about">
          <li class="main_content_title">客戶服務</li>
          <div class="main_content_text">
            <div class="main_content_text_item">運送說明</div>
            <div class="main_content_text_item">退換貨相關</div>
            <div class="main_content_text_item">付款資訊</div>
            <div class="main_content_text_item">FAQ</div>
          </div>
        </ul>
        <ul class="main_content_about">
          <li class="main_content_title">關於我們</li>
          <div class="main_content_text">
            <div class="main_content_text_item">品牌故事</div>
            <div class="main_content_text_item">媒體連繫</div>
            <div class="main_content_text_item">Press kit</div>
          </div>
        </ul>
        <ul class="main_content_about">
          <li class="main_content_title">隱私政策</li>
          <div class="main_content_text">
            <div class="main_content_text_item">隱私權政策</div>
            <div class="main_content_text_item">Cookie</div>
            <div class="main_content_text_item">GDPR</div>
          </div>
        </ul>
        <ul class="main_content_about">
          <li class="main_content_title">追蹤Life Style</li>
          <div class="main_content_text">
            <div class="main_content_text_item">+886 0912697801</div>
            <div class="main_content_text_icons">
              <li class="icon"><i class="fab fa-facebook"></i></li>
              <li class="icon"><i class="fab fa-instagram"></i></li>
              <li class="icon"><i class="fab fa-medium"></i></li>
            </div>
          </div>
        </ul>
      </div>
      <div class="main_commit">
        <span class="main_commit_title">@2022 CopyRight</span>
        <span class="main_commit_text"
          >本站僅作品練習，圖資來源為網路資源，無任何商業營利用途</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";
.container {
  @include mobile {
    display: none;
  }
  width: 100%;
  height: 100%;
  background: white;
  z-index: 2;
  .main {
    width: 100%;
    @include flexCenter;
    flex-direction: column;
    &_content {
      width: 100%;
      @include flexCenter;
      align-items: flex-start;
      justify-content: space-around;
      &_logo {
        @include flexCenter;
        img {
          width: 150px;
          height: 150px;
        }
      }
      &_title {
        font-size: 1.25em;
        font-weight: 600;
        padding: 0.75rem 0;
      }
      &_text {
        &_item {
          font-size: 14px;
          padding: 0.1rem 0;
        }
        &_icons {
          @include flexCenter;
          justify-content: flex-start;
          .icon {
            margin: 0.1rem 0.75rem 0 0;
            color: $mid-gray;
          }
        }
      }
    }
    &_commit {
      @include flexCenter;
      flex-direction: column;
      padding: 1rem 0;
      &_title {
        padding: 0.25rem;
      }
    }
  }
}
</style>
