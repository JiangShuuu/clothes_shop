<template>
  <div class="container">
    <div class="main">
      <div class="ban_img">
        <li class="prev" @click="prev"><i class="fas fa-angle-left"></i></li>
        <img :src="imgArr[index]" alt="" />
        <li class="next" @click="next"><i class="fas fa-angle-right"></i></li>
        <div class="page">
          <div class="pagenation">
            <span
              :class="index == i ? 'current_page' : ''"
              v-for="(item, i) in imgArr"
              :key="item"
              @click="click_banner(i)"
              ><i class="fas fa-circle"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      imgArr: [
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
      index: 0,
    };
  },
  created() {
    window.setInterval(this.next, 3000);
  },
  methods: {
    next() {
      if (this.index < this.imgArr.length - 1) {
        this.index++;
      } else {
        this.index = 0;
      }
    },
    prev() {
      if (this.index > 0) {
        this.index--;
      } else {
        this.index = this.imgArr.length - 1;
      }
    },
    click_banner(i) {
      this.index = i;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.container {
  @include flexCenter;
  .main {
    width: 100%;
    @include pad {
      width: 85%;
    }
    // @include web {
    //   width: 80%;
    // }
    .ban_img {
      width: 100%;
      height: 25vh;
      overflow: hidden;
      position: relative;
      @include pad {
        height: 35vh;
        margin-top: 2.5rem;
      }
      @include web {
        height: 45vh;
      }

      img {
        width: 100%;
        height: 25vh;
        object-fit: cover;
        @include pad {
          height: 35vh;
        }
        @include web {
          height: 45vh;
        }
      }
    }
    .next {
      position: absolute;
      top: 40%;
      right: 0;
      color: $mid-gray;
      text-align: center;
      opacity: 0.65;
      cursor: pointer;
      @include web {
        top: 45%;
      }
      &:hover {
        color: white;
      }
      .fa-angle-right {
        width: 40px;
        height: 40px;
        @include pad {
          width: 50px;
          height: 50px;
        }
      }
    }
    .prev {
      position: absolute;
      top: 40%;
      left: 0;
      color: $mid-gray;
      text-align: center;
      opacity: 0.65;
      cursor: pointer;
      @include web {
        top: 45%;
      }
      &:hover {
        color: white;
      }
      .fa-angle-left {
        width: 40px;
        height: 40px;
        @include pad {
          width: 50px;
          height: 50px;
        }
      }
    }
    .page {
      @include flexCenter;
    }
    .pagenation {
      position: absolute;
      bottom: 0;
      color: $mid-gray;
      opacity: 0.65;
    }
    .fa-circle {
      margin-left: 1rem;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
    .current_page {
      color: white;
    }
  }
}
</style>
