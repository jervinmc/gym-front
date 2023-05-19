const actions = {
  async add({ commit },  data ) {
    const response = await this.$axios.$post(
      "/attendance/",
      data
    );
    response.data = data;
  },
  async edit({ commit },  data ) {
    const response = await this.$axios.$put(
      `/attendance/${data.id}/`,
      data
    );
    response.data = data;
  },
  async view({ commit }, ) {
      const response = await this.$axios.$get(
        "/attendance/"
      );
      commit("SET_EVENT", response);
    },
};

export default actions;
