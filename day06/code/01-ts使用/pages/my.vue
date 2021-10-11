<template>
  <div>
    <h1>我的页面</h1>
    <p>
      <router-link to='/'>回到首页</router-link>
    </p>
  </div>
</template>
<script>
export default {
  middleware: auth,
};
</script>