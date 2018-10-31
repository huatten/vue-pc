<template>
  <div class="index">
      <h1>{{ msg }}</h1>
      <div><a href="history.html" target="_blank">history 多页面不带路由</a></div>
      <div><a href="hash.html" target="_blank">hash 多页面不带路由</a></div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
