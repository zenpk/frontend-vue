<template>
  <h1 id="title">{{ msg }}</h1>
</template>

<script>
export default {
  el: "#title",
  data() {
    return {
      msg: "",
    };
  },
  mounted() {
    fetch("http://101.43.179.27:8080/")
        .then(resp => resp.text())
        .then(text => {
          this.msg = text;
        });
  }
}
</script>