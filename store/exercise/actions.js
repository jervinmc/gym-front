const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/exercise/",
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
      console.log(customer)
      const response = await this.$axios.$put(
        `/exercise/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/exercise/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  