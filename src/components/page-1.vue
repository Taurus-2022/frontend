<script setup>
import { useStore } from '../stores/pageIndex';
import { onMounted, ref } from 'vue';
const store = useStore();
const isScrollToBottom = ref(false);

onMounted(() => {
  // console.log(window['page1']);
  const onScroll = (event) => {
    // const currentPosition = window.page1.scrollTop;
    // console.log('------------',currentPosition);
    // console.log('------------page1',window.page1.offsetHeight);//667
    // console.log('------------',window.innerHeight);//667
    var element = event.target;
    // console.log(element.scrollHeight);//753
    // console.log(element.scrollTop);
    if (element.scrollHeight <= element.scrollTop + element.offsetHeight) {
      console.log('scrolled'); //在页面底端
      isScrollToBottom.value = true;
    }
  };
  window['page1'].addEventListener('scroll', onScroll);
});

const nextPage = () => {
  if (isScrollToBottom.value || window.innerHeight >= window.page1.offsetHeight) {
    store.nextPageIndex();
  }
};
</script>

<template>
  <div id="page1" v-touch:swipedown="nextPage" class="container">
    <img class="background" src="/src/assets/p1.png" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  padding: 0;
  .background {
    min-height: 100vh;
    width: 100vw;
    position: absolute;
  }
}
</style>
