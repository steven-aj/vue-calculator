<template>
  <div id="app">
    <Calculator />
  </div>
</template>

<script>
import Calculator from "./components/calculator/Calculator";

export default {
  name: 'App',
  components: {
    Calculator
  }
}
</script>

<style>
body {
  overflow-y: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  height: 100vh;
}
</style>
