<script >
import { ref } from 'vue';
import {Cascader,Button} from 'vant';

export default {
  components:{
    [Cascader.name]:Cascader,
    [Button.name]:Button,
  },
  setup() {
    const show = ref(false);
    const fieldValue = ref('');
    const cascaderValue = ref('');
    const phoneNumber = ref('');
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }],
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }],
      },
    ];
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      show.value = false;
      fieldValue.value = selectedOptions.map((option) => option.text).join('/');
    };

    return {
      show,
      options,
      onFinish,
      fieldValue,
      cascaderValue,
      phoneNumber,
    };
  },
};



</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p2.png' @click="store.nextPageIndex">
    <div class='form-container'>
    <van-field
        v-model="fieldValue"
        is-link
        readonly
        label="街道"
        placeholder="请选择所在街道"
        @click="show = true"
    />
    <van-popup v-model:show="show" round position="bottom">
      <van-cascader
          v-model="cascaderValue"
          title="请选择所在街道"
          :options="options"
          @close="show = false"
          @finish="onFinish"
      />
    </van-popup>
    <van-field v-model="value" label="手机号" placeholder="请输入手机号" />
    <van-button plain hairline type="success">提交</van-button>
    </div>
    <div class='slide-container'>
      <p>向下滑动</p>
    </div>
  </div>
</template>

<style lang='scss' scoped>
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

  .form-container {
    position: relative;
    top: 15rem;
  }

  .slide-container {
    min-width: 295.2px;
    width: 82vw;
    font-size: 1.2rem;
    line-height: 1.5;
    position: absolute;
    text-align: center;
    top: 40rem;
    left: 50%;
    transform: translateX(-50%);
    p {
      text-align: center;
      color: white;
    }
    @media screen and (min-width: 370px) {
      top: 42rem;
    }
    @media screen and (min-width: 390px) {
      top: 37.5rem;
    }
    @media screen and (min-width: 400px) {
      top: 39rem;
    }
    @media screen and (min-width: 410px) {
      top: 41rem;
    }
    @media screen and (min-width: 450px) {
      top: 45rem;
    }
    @media screen and (min-width: 470px) {
      top: 48rem;
    }
    @media screen and (min-width: 500px) {
      top: 41rem;
    }
    @media screen and (min-width: 530px) {
      top: 45rem;
    }
    @media screen and (min-width: 550px) {
      top: 46rem;
    }
    @media screen and (min-width: 580px) {
      top: 50rem;
    }
    @media screen and (min-width: 600px) {
      font-size: 1.1rem;
      top: 38rem;
    }
    @media screen and (min-width: 700px) {
      font-size: 1rem;
      top: 40rem;
    }
    @media screen and (min-width: 750px) {
      top: 38rem;
    }
    @media screen and (min-width: 800px) {
      top: 40rem;
    }
  }
}
</style>
