export const state = {
  list: [11, 2, 2, 3, 33, 4]
};
export const mutations = {
  updateList(state, payload) {
    state.list.push(payload);
  }
};
