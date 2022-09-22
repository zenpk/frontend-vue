<template>
  <h1>Login</h1>
  <div v-if="hasError" class="alert alert-danger" role="alert">
    Login failed!
  </div>
  <div class="row">
    <div class="col-4">
      <form v-on:submit.prevent="submitForm">
        <div class="mb-3">
          <label for="username" class="form-label">用户名</label>
          <input type="text" class="form-control" v-model="form.username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">密码</label>
          <input type="password" class="form-control" v-model="form.password">
        </div>
        <button type="submit" class="my-button">登录</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/register" class="a-dec">新用户注册</router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasError: false,
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    async submitForm() {
      const formData = new URLSearchParams();
      formData.append("username", this.form.username);
      formData.append("password", this.form.password);
      let resp = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
        credentials: "include",
        body: formData
      });
      console.log(formData);
      if (resp.status === 401) {
        this.hasError = true;
      } else {
        this.$router.push({name: "Page2"});
      }
    }
  }
}
</script>