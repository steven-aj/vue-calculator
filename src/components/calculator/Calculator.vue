<template>
   <div id="calculator">
      <!-- Display -->
      <Display :input="input.getExpressionString()" :result="output.result" />

      <!-- Keypad -->
      <Keypad @number="construct" @operator="operate" @modifier="modify"/>
   </div>
</template>

<script>
   import Display from './components/Display';
   import Keypad from './components/Keypad';

   import Input from './libs/input';
   import Output from './libs/output';

   // const {console} = window;

   export default {
      name: 'calculator',
      components: {
         Display,
         Keypad
      },
      data() {
         return {
            input: new Input(),
            output: new Output()
         }
      },
      mounted() {
         this.input.setExpression('', '', '');
      },
      methods: {
         construct(value) {
            if (this.input.operator === '')
               return this.input.setLeftSide(value);
            else
               return this.input.setRightSide(value);
         },
         operate(action) {
            if (action === '=') return this.calculate( this.input.getExpressionString() );

            if (this.input.leftSide !== '' && !this.output.hasResult)
               return this.input.setOperator(action);
            else {
               let {result} = this.output;
               this.input.setExpression(result, action, '');
               return this.output.hasResult = false;
            }
         },
         modify(action) {
            switch(action) {
               case '+/-': return this.output.invert();
               case '%': return this.output.percentage();
               case 'AC': return this.allClear();
               default:
                  alert("Sorry! I don't recognize that modifier.");
                  break;
            }
         },
         calculate(expression) {
            if (this.input.leftSide !== '' && this.input.rightSide.length !== '') {
               this.output.evaluate(expression).then(success => {
                  if (success) 
                     this.input.reset();
                  else
                     alert("Incomplete expression provided.");
               });
            }
         },
         allClear() {
            this.input.reset();
            this.output.reset();
         }
      }
   }
</script>

<style scoped>
#calculator {
   display: flex;
   flex-direction: column;
   min-width: 260px;
   max-width: 1024px;
   box-shadow: 1rem calc(1rem * 1.816) calc(1rem * calc(2 * 1.816)) rgba(0,0,0, .3);
   overflow: hidden;
}
</style>