<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      <div class="col-8">
        <form id="form" class="form-signin" @submit.prevent.stop="handleSubmit">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control"
              id="username"
              placeholder="name@example.com"
              v-model="email"
              required
              autofocus
            />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              v-model="password"
              required
            />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
      </div>
    </div>
    <p class="mt-5 mb-3 text-muted">&copy; 2022~∞ - Life Style</p>
  </div>
</template>

<script>
export default {
  name: "signIn",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/All.scss";

.container {
  text-align: center;
  @include flexCenter;
  flex-direction: column;
  height: 100vh;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
</style>
