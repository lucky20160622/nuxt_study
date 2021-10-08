<template>
  <div
    v-if="isShow"
    class="loading"
  >
    <h1>正在加载中...</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    //开始加载
    start() {
      this.isShow = true;
    },
    //结束加载
    end() {
      this.isShow = false;
    },
  },
};
</script>
<style>
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 111;
  color: aqua;
}
</style>