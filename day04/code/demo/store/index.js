//定义初始化数据
export const state = () => {
  return {
    count: 0
  };
};

//同步加
export const mutations = {
  add(state,payload) {
    state.count+=payload;
  },

  //修改随机数
  updateRandom(state,payload){
    state.count=payload
  }
};

//异步加
export const actions = {
  add2({ commit },payload) {
    setTimeout(function() {
      commit("add",payload);
    }, 1000);
  }
};
