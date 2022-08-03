<script setup>
// import imagePath from '@/assets/p3.png'
defineProps({
  msg: {
    type: String,
    default: 'msg'
  },
});
</script>

<template>
  <div class='container'>
    <p>dddddd</p>
    <img src='/src/assets/p3.png'>
    <p>dddddd</p>
  </div>

</template>

<style scoped>
.container {
  overflow: auto; /* adds scrollbars */
  background-color: blue;
  position: relative;
  -webkit-overflow-scrolling: touch
}
div img{
  width: 100%;
  min-height: 1003px;
  vertical-align: bottom;
}

</style>
