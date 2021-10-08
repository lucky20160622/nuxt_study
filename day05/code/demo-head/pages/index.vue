<template>
  <h1>{{ title }}</h1>
</template>

<script>
export default {
  data() {
    return {
      title: "Hello World!",
    };
  },
  //页面中配置TDK 注意hid属性 ，唯一标识，覆盖全局配置
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description",
        },
      ],
    };
  },
};
</script>