<template>
  <div class="home">
    <!-- <p>{{ name }}</p> don't need to use name.value -->
    <!-- <p>{{ age }}</p>
    <button @click="handleClick">Click it</button>
    <button @click="age++">increase age</button>
    <input type="text" v-model="name"> -->
    <h2>refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update age</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }} - {{ nameTwo }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button>

    <h2>
      Computed
    </h2>
    <div v-for="name in names" :key="name">{{ name }}</div>
  </div>
</template>

<script>
import {ref, reactive, computed} from 'vue'

export default {
  name: 'HomeView',
  setup(){ //not same as data in options api, props in data is reactive, so you can just change it and it's reflected, the name and age in setup are NOT reactive here
    const name = ref('mario') //the reference obj is constant but the value can change, variable is the ref not the value
    const age = ref(30)
    // const para = ref(null) if you try to use the value of this before it's returned it WON'T be the dom element, just null

    const ninjaOne = ref({name: 'Yoshi', age: 20})
    const ninjaTwo = reactive({ name: 'Luigi', age:35})
    const nameTwo = reactive('Ryu') //not a reactive value if primitive

    const names = ref(['bob','mark','michael','bowser'])

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }

    const updateNinjaTwo = () => { //major diff between ref and reactive, don't have to use .value
      ninjaTwo.age = 45
      // nameTwo = 'chun li'
    }

//which one to use? 
//reactive drawbacks - can't use primitive values inside reactive, ie const name = reactive('mario')
//refs work better when making external composition components

    const handleClick = () => {
      name.value = 'Luigi'
    }




    return {
      name,
      age,
      handleClick,
      ninjaOne,
      updateNinjaOne,
      ninjaTwo,
      updateNinjaTwo,
      nameTwo,
      names
    }
  }
}
</script>
