<template>
  <div>
    <div v-if="$store.state.auth">
      <p>您已登录，可以访问<nuxt-link to="/my">我的页面</nuxt-link>
      </p>
      <p><button @click="logOut">退出登录</button></p>
    </div>
    <div v-else>
      <p>
        <nuxt-link to="/login">登录</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logOut() {
      setTimeout(() => {
        //清空用户数据
        this.$store.commit("updateAuth", "");
        Cookie.remove("auth");
      }, 1000);
    },
  },
};
</script>
