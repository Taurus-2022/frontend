<script setup>
import { useStore } from '../stores/pageIndex';
import { onMounted, ref } from 'vue';
const store = useStore();
const isScrollToBottom = ref(false);
const bottom = ref(null);
onMounted(async () => {
  // console.log(window.img1.offsetHeight);
  // console.log(window.img1.scrollHeight);
  // console.log(window.img1);
  // console.log(img.value.$el.clientHeight);
  // console.log(window.innerHeight);
  // console.log(window.img1.naturalHeight*window.innerWidth/window.img1.naturalWidth);
  // console.log(window['page1']);
  // const onScroll = (event) => {
  //   // const currentPosition = window.page1.scrollTop;
  //   // console.log('------------',currentPosition);
  //   // console.log('------------page1',window.page1.offsetHeight);//667
  //   // console.log('------------',window.innerHeight);//667
  //   var element = event.target;
  //   // console.log(element.scrollHeight);//753
  //   // console.log(element.scrollTop);
  //   if (element.scrollHeight <= element.scrollTop + element.offsetHeight) {
  //     console.log('scrolled'); //在页面底端
  //     isScrollToBottom.value = true;
  //   }
  // };
  // window['page1'].addEventListener('scroll', onScroll);
  const afterLoaded = () => {
    console.log(window.img1.height);
    console.log(window.img1.offsetHeight);
    console.log(window.img1.naturalWidth);
    console.log(window.img1.naturalHeight);
    console.log(window.img1.naturalHeight*window.innerWidth/window.img1.naturalWidth);
    console.log(window.innerHeight - window.img1.naturalHeight*window.innerWidth/window.img1.naturalWidth);
    bottom.value = window.innerHeight - window.img1.naturalHeight*window.innerWidth/window.img1.naturalWidth
  }
  document.addEventListener("DOMContentLoaded", afterLoaded);
});

const nextPage = () => {
  if (isScrollToBottom.value || window.innerHeight >= window.page1.offsetHeight) {
    store.nextPageIndex();
  }
};
</script>

<template>
  <div id="page1" v-touch:swipeup="nextPage" class="container">
    <img id='img1' ref="img" class="background" src="/src/assets/p1.png"/>
    <div class="touch" :style="{'bottom': bottom +'px', 'height': (0-bottom) + 'px'}"></div>
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
  .touch {
    position: absolute;
    width: 100%;
    background: #2c3e50;
  }
}

</style>
