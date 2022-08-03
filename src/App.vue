<script setup>
// import { onMounted } from 'vue';
import "swiper/css";
import 'swiper/css/effect-fade';
// import Page1 from './components/page-1.vue';
// import Page2 from './components/page-2.vue';
import Page3 from './components/page-3.vue';
// import Page4 from './components/page-4.vue';

// onMounted(() => {
//   console.log(`the component is now mounted.`);
//   // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
//   const vh = window.innerHeight * 0.01;
//   // Then we set the value in the --vh custom property to the root of the document
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
//   // We listen to the resize event
//   window.addEventListener('resize', () => {
//     // We execute the same script as before
//     const vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
//     setRemUnit();
//   });
//
//   // 抵消字体放大的影响
//   const DEFAULT_FONT_SIZE = 16;
//   const docEl = document.documentElement;
//   let userWebsetFontDefaultSize = DEFAULT_FONT_SIZE;
//   // 用原生方法获取用户设置的浏览器的字体大小(兼容ie)
//   if (docEl.currentStyle) {
//     userWebsetFontDefaultSize = docEl.currentStyle['fontSize'];
//   } else {
//     userWebsetFontDefaultSize = getComputedStyle(docEl, false)['fontSize'];
//   }
//   // 取数字部分
//   userWebsetFontDefaultSize = parseFloat(userWebsetFontDefaultSize);
//   // 将实际的字号除以默认字号
//   const sizeScale = userWebsetFontDefaultSize / DEFAULT_FONT_SIZE;
//   function setRemUnit() {
//     const rem = 16 / sizeScale;
//     docEl.style.fontSize = rem + 'px';
//   }
//
//   setRemUnit();
// });
</script>

<template>
      <page3/>
</template>

<style scoped></style>
