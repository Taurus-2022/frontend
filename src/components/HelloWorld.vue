<script setup>
defineProps({
  msg: {
    type: String,
  }
})
</script>

<template>
  <div class="greetings">
    <h1> 文明典范·你我共创 </h1>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <button>点击签约</button>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
