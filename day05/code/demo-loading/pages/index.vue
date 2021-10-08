<template>
  <div>首页</div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => {
        this.$nuxt.$loading.end();
      }, 3000);
    });
  },
};
</script>
