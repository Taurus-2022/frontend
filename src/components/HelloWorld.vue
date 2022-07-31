<script setup>
defineProps({
  msg: {
    type: String,
    default: 'msg'
  },
});
</script>

<template>
  <div class="logincontent">
    <div class="greetings">
          <img alt="logo" class="logo" src="@/assets/20210809_tuanhui_new.png" width="60" height="60" />
          <h1>文明典范·你我共创</h1>
        </div>
  </div>
</template>

<style scoped>
.greetings {
  display: flex;
 align-items: center;
  justify-content: center;
 margin: 20px auto;
}

h1{
  color: #f8f8f8;
  font-size: 1.8rem;
}

.logincontent {
  display: flex;
  flex-direction: column;
  background-image: url("/src/assets/jingniu.jpeg");
  background-size: 100% 100%;
  background-attachment: fixed;

  width: 100%;
  height: 100%;
  min-width: 900px;
  min-height: 1000px;

  justify-content: center;
  align-items: center;
}
.logo{
  height: 6.5rem;
  width: 6.5rem;
}
</style>
