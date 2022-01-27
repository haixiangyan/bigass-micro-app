<template>
  <div id="nav">
    <p>主应用的数据: {{mainAppState ? mainAppState.name : '无'}}</p>

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      mainAppState: window.microApp ? window.microApp.getData() : { name: '无' },
    }
  },
  mounted() {
    if (window.microApp) {
      window.microApp.addDataListener(this.dataListener)
    }
  },
  methods: {
    dataListener(data) {
      console.log('主应用的数据', data);
      this.mainAppState = data;
    }
  },
  unmounted() {
    if (window.microApp) {
      window.microApp.clearDataListener();
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
