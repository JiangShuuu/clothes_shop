<template>
  <div class="main">
    <Banner />
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
.main {
  padding-top: 4rem;
}
</style>
