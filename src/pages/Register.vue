<template>
  <h1>Register</h1>
  <div v-if="hasError" class="alert alert-danger" role="alert">
    Register failed!
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
        <button type="submit" class="my-button">注册</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/login" class="a-dec">老用户登录</router-link>
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
      let resp = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"},
        credentials: "include",
        body: formData
      });
      console.log(formData);
      if (resp.status !== 200) {
        this.hasError = true;
      } else {
        this.$router.push({name: "Login"});
      }
    }
  }
}
</script>