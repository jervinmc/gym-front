const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/product/",
        data,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/product/${data.get('id')}/`,
        data,{
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/product/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  