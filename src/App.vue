<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    {{value}}
    <label>
      <input type="text" :value="value" @input="handleInput">
    </label>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
    },
    data() {
      return {
        value: '1'
      }
    },
    methods: {
      handlePageVisibleChange() {
        if (document.visibilityState === 'visible') {
          // do something
          console.log('page show')
        } else if (document.visibilityState === 'hidden') {
          // do something
          console.log('page hidden')
        }
      },
      handleInput(e) {
        this.value = e.target.value
      }
    },
    pageVisible() {
      // do something
      console.log('page show')
    },
    pageHidden() {
      // do something
      console.log('page hidden')
    },
    created() {
      window.addEventListener('visibilitychange', this.handlePageVisibleChange)
      this.$on('hook: beforeDestroy', () => {
        window.removeEventListener('visibilitychange', this.handlePageVisibleChange)
      })
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
