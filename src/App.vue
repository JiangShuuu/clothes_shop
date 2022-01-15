<template>
  <div id="clothingStore">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Narbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "app",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/All.scss";
</style>
