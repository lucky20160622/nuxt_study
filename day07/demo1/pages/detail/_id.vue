<template>
  <div>
    <h2>标题:{{detail.title}}</h2>
    <p v-html="detail.content"></p>
  </div>
</template>
<script>
export default {
  async asyncData({ $axios, query, params }) {
    console.log(params, "params");
    //路径参数：获取时，需要创建对应_xx.vue
    const { data: detail } = await $axios.$get(
      `https://cnodejs.org/api/v1/topic/${params.id}`
    );
    return {
      detail,
    };
  },
};
</script>