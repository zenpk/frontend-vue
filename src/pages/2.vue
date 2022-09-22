<template>
  <h1>Spring Boot 用户注册登录系统</h1>
  <div id="content">
    <div v-if="loggedIn">
      您已登录
      <table class="table table-striped table-bordered">
        <thead>
        <tr>
          <th>username</th>
          <th>password (BCrypt)</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="user in users">
          <td>{{ user.username }}</td>
          <td>{{ user.password }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <router-link to="/login" class="a-dec">请先登录</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  el: "#content",
  data() {
    return {
      loggedIn: false,
      users: []
    };
  },
  async mounted() {
    let resp = await axios("http://101.43.179.27:8080/all_user", {
      method:"GET",
      withCredentials: true
    });
    if (resp.status === 200) {
      this.loggedIn = true;
      this.users = resp.data;
    }
  }
}
</script>
