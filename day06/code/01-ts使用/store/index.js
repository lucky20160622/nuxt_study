const cookieparser = require("cookieparser");
export const state = () => {
  return {
    auth: "",
  };
};
export const mutations = {
  updateAuth(state, payload) {
    state.auth = payload;
  },
};
export const actions = {
  //1.让vuex的用户信息持久化存储
  nextServeInit({ commit }, { req }) {
    let auth = "";
    if (req.headers.cookie) {
      //通过cookie判断用户是否登录
      let parser = cookieparser.parse(req.headers.cookie);
      //修改auth
      auth = parser.auth;
    }
    commit("updateAuth", auth);
  },
};
