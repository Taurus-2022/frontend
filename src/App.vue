<script setup>
import { onMounted, ref, computed } from 'vue';
import Page2 from './components/page-2.vue';
import pageVideo from './components/pageVideo.vue';
import Page3 from './components/page-3.vue';
import Page1 from './components/page-1.vue';
// import Page4 from './components/page-4.vue';
import Page5 from './components/page-5.vue';

import { useStore } from './stores/pageIndex';
const store = useStore();
const currentRate = ref(0);
const completedLoading = ref(false);
const text = computed(() => '页面加载 ' + currentRate.value.toFixed(0) + '%');
onMounted(() => {
  // console.log(`the component is now mounted.`);
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    setRemUnit();
  });

  // 抵消字体放大的影响
  const DEFAULT_FONT_SIZE = 16;

  const docEl = document.documentElement;
  let userWebsetFontDefaultSize = DEFAULT_FONT_SIZE;
  // 用原生方法获取用户设置的浏览器的字体大小(兼容ie)
  if (docEl.currentStyle) {
    userWebsetFontDefaultSize = docEl.currentStyle['fontSize'];
  } else {
    userWebsetFontDefaultSize = getComputedStyle(docEl, false)['fontSize'];
  }
  // 取数字部分
  userWebsetFontDefaultSize = parseFloat(userWebsetFontDefaultSize);
  // 将实际的字号除以默认字号
  const sizeScale = userWebsetFontDefaultSize / DEFAULT_FONT_SIZE;
  function setRemUnit() {
    const font =
      window.innerWidth >= 700 ? 36 : window.innerWidth >= 600 ? 28 : window.innerWidth >= 500 ? 22 : window.innerWidth >= 390 ? 18 : 16;
    const rem = font / sizeScale;
    docEl.style.fontSize = rem + 'px';
  }
  function imgLoad(callback) {
    const images = document.getElementsByTagName('img');
    const timer = setInterval(() => {
      const completedImages = Array.from(images, (image) => image.complete).filter((complete) => complete === true).length;
      currentRate.value = completedImages / images.length;
      if (images.length === completedImages) {
        callback();
        clearInterval(timer);
      }
    }, 300);
  }
  imgLoad(() => {
    console.log('加载完毕');
    completedLoading.value = true;
  });
  setRemUnit();
  document.addEventListener(
    'WeixinJSBridgeReady',
    function () {
      document.getElementById('media').play();
      document.getElementById('media').pause();
    },
    false,
  );
});
</script>

<template>
  <div v-if="!completedLoading" class="loadingContainer">
    <van-circle v-if="!completedLoading" v-model:current-rate="currentRate" :rate="100" :speed="100" color="#4e8ea0" :text="text" />
  </div>
  <Transition name="fade">
    <page1 v-show="completedLoading && store.currentPageIndex === 1" />
  </Transition>
  <Transition name="fade">
    <page5 v-show="completedLoading && store.currentPageIndex === 2" />
  </Transition>
  <Transition name="fade">
    <page2 v-show="completedLoading && store.currentPageIndex === 3" />
  </Transition>
  <Transition name="fade">
    <page3 v-show="completedLoading && store.currentPageIndex === 4" />
  </Transition>
  <!--  <page5 />-->
  <pageVideo />
</template>

<style scoped>
.loadingContainer {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.fade-enter-active {
  transition-delay: 0.4s;
  transition-property: opacity;
  transition-duration: 0.7s;
  transition-timing-function: ease-in-out;
}
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-to,
.fade-leave-leave {
  opacity: 1;
}
.fade-enter-from {
  opacity: 0.3;
}

.fade-leave-to {
  opacity: 0;
}
</style>
