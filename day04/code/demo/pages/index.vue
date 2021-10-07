<template>
  <div>
    <h1>{{ $store.state.count }}</h1>
    <h2>{{$store.state.todolist.list}}</h2>
    <button @click="tb(100)">同步</button>
    <button @click="yb(200)">异步</button>
    <button @click="add3">添加一个随机数</button>
  </div>
</template>
<script>
export default {
  methods: {
    tb(num) {
      this.$store.commit("add", num);
    },
    yb(num) {
      this.$store.dispatch("add2", num);
    },
    add3() {
      const random = this.getRandom(10, 20);
      this.$store.commit("todolist/updateList", random);
      this.$store.commit("updateRandom", random);
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
};
</script>