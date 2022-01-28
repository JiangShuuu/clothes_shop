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
        <div class="main_cards_card card-02">
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

      <div class="main_subscript">
        <div class="main_subscript_img01">
          <img
            src="https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=779&q=80"
            alt=""
          />
        </div>
        <div class="main_subscript_img02">
          <img
            src="https://images.unsplash.com/photo-1603197788269-c76bbc23b1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80"
            alt=""
          />
        </div>
        <div class="main_subscript_text">
          <div class="sub_info">
            <p class="sub_info_title">訂閱最新優惠資訊</p>
            <form class="sub_info_form">
              <input
                type="text"
                placeholder="Enter email for news updates"
                name="subscript"
              />
              <button type="submit">SING UP!</button>
            </form>
            <p class="sub_info_link">
              By registering you agree with our <a href="">Integrity Policy</a>
            </p>
          </div>
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
      @include pad {
        flex-direction: row;
        .card-02 {
          margin: 0 0.5rem;
        }
      }
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
      @include pad {
        flex-direction: row-reverse;
        margin: 0.5rem 0;
      }
      &_img {
        @include pad {
          width: 50%;
        }
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
        @include pad {
          height: 35vh;
          margin: 0;
          flex: 1;
        }
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
          cursor: pointer;
          &:hover {
            background: $main-blue;
            color: white;
            transition: all 0.35s ease-out;
          }
        }
      }
    }
    &_subscript {
      position: relative;
      width: 100%;
      height: 40vh;
      margin-top: 2rem;
      @include pad {
        margin-top: 0.5rem;
      }
      &_img01 {
        width: 100%;
        height: 100%;
        overflow: hidden;
        img {
          width: 80%;
          @include pad {
            width: 60%;
          }
        }
      }
      &_img02 {
        width: 100%;
        height: 100%;
        text-align: right;
        overflow: hidden;
        img {
          width: 70%;
          @include pad {
            width: 60%;
          }
        }
        position: absolute;
        top: 0;
        left: 0;
        -webkit-mask-image: -webkit-linear-gradient(
          left top,
          transparent 50%,
          white 50%
        );
        mask-image: -webkit-linear-gradient(
          left top,
          transparent 50%,
          white 50%
        );
      }
      &_text {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        color: white;
        transform: translate(-50%, -50%);
        .sub_info {
          @include flexCenter;
          flex-direction: column;
          &_title {
            font-size: 2em;
            font-weight: 800;
          }
          &_form {
            @include flexCenter;
            justify-content: space-between;
            width: 70%;
            margin: 1rem 0;
            @include pad {
              width: 65%;
            }
            @include web {
              width: 60%;
            }
            input {
              @include pad {
                width: 65%;
                padding-left: 2rem;
              }
              all: unset;
              color: black;
              text-align: left;
              width: 50%;
              padding: 0.75rem;
              background: white;
              border-radius: 25px 0 0 25px;
            }
            button {
              all: unset;
              cursor: pointer;
              background: $Brown;
              flex: 1;
              padding: 0.75rem;
              border-radius: 0 25px 25px 0;
              text-align: center;
              font-weight: 700;
              letter-spacing: 1px;
            }
          }
          &_link {
            font-size: 0.75rem;
            a {
              all: unset;
              cursor: pointer;
              text-decoration: underline;
              color: $main-blue;
            }
          }
        }
      }
    }
    padding-bottom: 3.5rem;
  }
}
</style>
