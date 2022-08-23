<script setup>
import { useStore } from '../stores/store';
const store = useStore();
const previousPage = () => {
  store.previousPageIndex();
};
</script>

<template>
  <div class="btn-container">
    <van-button round plain size="small" icon="arrow-left" type="default" @click="previousPage">返回上一页</van-button>
  </div>
</template>

<style lang="scss" scoped>
.btn-container {
  position: absolute;
  width: 100vw;

  top: 4%;
  z-index: 10;
  @media screen and (min-height: 1000px) {
    top: 4%;
  }
  :deep(.van-button.van-button--default.van-button--small.van-button--plain.van-button--round) {
    margin-left: 1rem;
    background: rgba(256, 256, 256, 0.2);
    color: #c16545;
    font-weight: bold;
    border-width: 2px;
    border-color: #c16545;
    @media screen and (min-height: 1000px) {
      margin-left: 1.5rem;
      transform: scale(1.5);
    }
    .van-icon,
    .van-button__text {
      font-weight: bold;
    }
  }
}
</style>
