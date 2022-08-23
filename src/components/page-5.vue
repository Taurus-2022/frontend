<script>
import { Cascader, Button, Divider } from 'vant';

export default {
  components: {
    [Cascader.name]: Cascader,
    [Button.name]: Button,
    [Divider.name]: Divider,
  },
};
</script>
<script setup>
import { ref } from 'vue';
import { useStore } from '../stores/store';
import { streetInfo } from '../assets/streetInfo';
import 'intl-tel-input/build/js/utils';
import { Dialog } from 'vant';

const store = useStore();
const show = ref(false);
const fieldValue = ref('');
const cascaderValue = ref('');
// const phoneNumber = ref('');
// 选项列表，children 代表子选项，支持多级嵌套
const options = streetInfo;
// 全部选项选择完毕后，会触发 finish 事件
const onFinish = ({ selectedOptions }) => {
  show.value = false;
  fieldValue.value = selectedOptions.map((option) => option.text).join('/');
};

const submit = () => {
  Dialog.setDefaultOptions({
    width: '70vw',
    theme: 'round-button',
  });
  if (!fieldValue.value) {
    Dialog.alert({
      message: `请输入街道信息`,
    }).then(() => {});
    return;
  } else {
    store.setCurrentUserStreetInfo(fieldValue.value);
    store.nextPageIndex();
    setTimeout(() => {
      document.getElementById('media').play();
      setTimeout(() => {
        document.getElementById('media').muted = false;
      }, 1);
    }, 1000);
  }
};
</script>

<template>
  <div id="page5" class="container">
    <div class="form-container">
      <van-field v-model="fieldValue" required colon is-link readonly label="街道" placeholder="请选择所在街道" @click="show = true" />
      <van-popup v-model:show="show" round position="bottom">
        <van-cascader v-model="cascaderValue" title="请选择所在街道" :options="options" @close="show = false" @finish="onFinish" />
      </van-popup>
      <van-divider />
      <van-button round block type="primary" color="#4e8ea0" native-type="submit" @click="submit">提 交</van-button>
    </div>
    <img :class="['background', 'page-png']" src="/src/assets/p5-background.png" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  overflow: auto;
  position: relative;
  -webkit-overflow-scrolling: touch;
  height: 100vh;
  width: 100vw;
  padding: 0;
  background: rgb(91, 172, 199);
  background: linear-gradient(0deg, rgba(91, 172, 199, 1) 0%, rgba(204, 219, 245, 1) 50%, rgba(204, 219, 245, 1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .background {
    z-index: 1;
    width: 100vw;
  }
  .form-container {
    z-index: 4;
    margin-top: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .button-container {
  }

  :deep(.van-button.van-button--default.van-button--normal) {
    //background: red;
  }
  :deep(.van-tabs__line) {
    background: #c16545;
  }
}
</style>
