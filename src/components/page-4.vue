<script>
import turntablePath from '../assets/turntable.jpg'
import pointerPath from '../assets/pointer.jpg'
export default {
  data () {
    return {
      blocks: [{ padding: '13px', imgs: [{
          src: turntablePath,
          width: '100%',
          rotate: true
        }]
      }],
      prizes: [
        {index: 1, name: '青桔单车周卡'},
        {index: 2, name: '谢谢参与'},
        {index: 3, name: '美团五元券'},
        {index: 4, name: '腾讯视频vip周卡'},
       // { fonts: [{ text: '0', top: '10%' }] }, //青桔单车周卡
       //  { fonts: [{ text: '1', top: '10%' }] }, //谢谢参与
       //  { fonts: [{ text: '2', top: '10%' }] }, //美团五元券
       //  { fonts: [{ text: '3', top: '10%' }] }, //腾讯视频vip周卡
      ],
      buttons: [
        {
          radius: '40px',
          imgs: [{
            src: pointerPath,
            width: '100%',
            top: '-150%'
          }],
          pointer: true,
        },
      ],
      defaultConfig: {
        offsetDegree: 45,
        stopRange: 0,
      }
    }
  },
  methods: {
    // 点击抽奖按钮会触发star回调
    startCallback () {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.myLucky.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是1
        const index = 1
        // 调用stop停止旋转并传递中奖索引
        this.$refs.myLucky.stop(index)
      }, 3000)
    },
    // 抽奖结束会触发end回调
    endCallback (prize) {
      console.log(prize)
    },
  }
}
</script>
<script setup>
import { useStore } from '../stores/pageIndex';

const store = useStore()
</script>

<template>
  <div class='container'>
    <img class='background' src='/src/assets/p4.png' @click="store.firstPageIndex">
    <div class='turntable-container'>
      <LuckyWheel
        ref="myLucky"
        width="300px"
        height="300px"
        :prizes="prizes"
        :blocks="blocks"
        :buttons="buttons"
        :default-config="defaultConfig"
        @start="startCallback"
        @end="endCallback"
      />
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

  .turntable-container{
    position: relative;
    min-width: 360px;
    top: 11rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
