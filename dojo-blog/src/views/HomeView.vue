<template>
  <div class="home">
    Home
    <p ref="para">{{ name }}</p> <!--don't need to use name.value -->
    <p>{{ age }}</p>
    <button @click="handleClick">Click it</button>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  name: 'HomeView',
  setup(){ //not same as data in options api, props in data is reactive, so you can just change it and it's reflected, the name and age in setup are NOT reactive here
    const name = ref('mario') //the reference obj is constant but the value can change
    const age = ref(30)
    const para = ref(null) //if you try to use the value of this before it's returned it WON'T be the dom element, just null

    const handleClick = () => {
      name.value = 'Luigi'
    }

    return {
      name,
      age,
      handleClick,
      para
    }
  }
}
</script>
