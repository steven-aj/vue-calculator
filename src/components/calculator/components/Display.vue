<template>
   <div id="display">
      <div id="input" class="row">{{input}}</div>
      <div id="result" class="row">{{result}}</div>
   </div>
</template>

<script>
   export default {
      name: 'display',
      props: [
         'input',
         'result'
      ]
   }
</script>

<style scoped>
#display {
   display: flex;
   flex-direction: column;
   background-color: #202020;
   padding: 1rem;
   color: white;
   box-shadow: inset 0 -.5rem 2rem rgba(0,0,0, .25);
   font-family: 'Roboto', sans-serif;
   font-weight: 100;
   min-width: 260px;
   max-width: 1024px;
   overflow-x: scroll;
}

#input {
   font-size: xx-small;
}

#result {
   font-size: 38pt;
   padding: 1rem 0 0 0;
}

.row {
   display: flex;
   justify-content: flex-end;
}
</style>