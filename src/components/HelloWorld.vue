<script setup>
defineProps({
  msg: {
    type: String,
  },
});
</script>

<template>
  <div class="greetings">
    <img alt="logo" class="logo" src="@/assets/20210809_tuanhui_new.png" width="80" height="80" />
    <h1>文明典范·你我共创</h1>
  </div>
  <div class="back-ground">
    <!--    <img alt="jinniu" class="logo" src="@/assets/jingniu.jpeg"/>-->
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2rem;
}

h3 {
  font-size: 1.2rem;
}
.back-ground {
  height: 100vh;
  background-size: contain;
  background: url('@/assets/jingniu.jpeg') no-repeat center;
}

.greetings {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
