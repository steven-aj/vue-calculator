<template>
   <div id="keypad" class="flex">
      <button 
         v-for="(button, index) of buttons" 
         :class="[button.type, 'button']" 
         :key="index"
         @click="$emit(button.type, button.key)">{{button.key}}</button>
   </div>
</template>

<script>
   export default {
      name: 'keypad',
      data() {
         return {
            buttons: [
               { key: 'AC', type: 'modifier' },
               { key: '+/-', type: 'modifier' },
               { key: '%', type: 'modifier' },
               { key: '/', type: 'operator' },
               { key: '7', type: 'number' },
               { key: '8', type: 'number' },
               { key: '9', type: 'number' },
               { key: 'x', type: 'operator' },
               { key: '4', type: 'number' },
               { key: '5', type: 'number' },
               { key: '6', type: 'number' },
               { key: '-', type: 'operator' },
               { key: '1', type: 'number' },
               { key: '2', type: 'number' },
               { key: '3', type: 'number' },
               { key: '+', type: 'operator' },
               { key: '0', type: 'number' },
               { key: '.', type: 'number' },
               { key: '=', type: 'operator' }
            ]
         }
      }
   }
</script>

<style scoped>
#keypad {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

/* Let's double the width of our ZERO button*/
#keypad :nth-child(17)  {
   grid-row: 5;
   grid-column: 1 / 3;
}

button {
   border: 1px solid #202020;
   font-family: 'Roboto', sans-serif;
   font-size: x-large;
   font-weight: 100;
}

button:hover {
   opacity: .5;
}

.button {
   padding: 1rem;
}

.number {
   background-color: #d2d3d6;
}

.modifier {
   background-color: #c8c9cb;
}

.operator {
   color: white;
   background-color: #f98b11;
}
</style>