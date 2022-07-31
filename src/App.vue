<script setup>
// import { RouterView } from 'vue-router';
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import {Swiper,SwiperSlide} from 'swiper/vue';
import {Pagination} from 'swiper';
import "swiper/css";

import "swiper/css/pagination";
import "./style.css";

onMounted(() => {
  console.log(`the component is now mounted.`);
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

  // 屏幕宽度375px时，html的字体大小为100px。其他宽度按比例计算
  function setRemUnit() {
    // let width = docEl.clientWidth
    // if (width > 750) {
    //   width = 750
    // }
    // 满足等式width : size = 375 : 100
    const rem = 16 / sizeScale;
    docEl.style.fontSize = rem + 'px';
  }

  setRemUnit();
});
</script>

<template>
  <swiper :direction="'vertical'" :modules="[Pagination]" :pagination="{clickable:true}" >
    <swiper-slide>
      <HelloWorld/>
    </swiper-slide>
    <swiper-slide>
      <HelloWorld/>
    </swiper-slide>
    <swiper-slide>
      <HelloWorld/>
    </swiper-slide>
  </swiper>
<!--  <header>-->
<!--    <div class="wrapper">-->
<!--      <HelloWorld />-->
<!--      <nav>-->
<!--        &lt;!&ndash;        <RouterLink to="/">Home</RouterLink>&ndash;&gt;-->
<!--        &lt;!&ndash;        <RouterLink to="/about">About</RouterLink>&ndash;&gt;-->
<!--      </nav>-->
<!--    </div>-->
<!--  </header>-->
<!--  <RouterView />-->

</template>

<style scoped></style>
