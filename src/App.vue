<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Counter/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Counter
  },
  beforeMount() {
    console.log('[App.vue] beforeMount');
  },
  mounted() {
    console.log('[App.vue] mounted');
  },
  beforeUnmount() {
    console.log('[App.vue] beforeUnmount');
  },
  unmounted() {
    console.log('[App.vue] unmounted');
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
  margin-top: 60px;
}
</style>
