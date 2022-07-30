<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

onMounted(() =>{
  console.log(`the component is now mounted.`)
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  })
})

</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld />
      <nav>
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
      </nav>
    </div>
  </header>
  <RouterView />
</template>


<style scoped>

</style>
