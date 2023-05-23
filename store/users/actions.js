const actions = {
  async addUser({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$post(
      "/signup/",
      customer
    );
    response.customer = customer;
  },
  async editUser({ commit },  customer ) {
    console.log(customer)
    const response = await this.$axios.$put(
      `/users/${customer.id}/`,
      customer
    );
    response.customer = customer;
  },
  async delete({ commit },  customer ) {
    alert()
    console.log(customer)
    const response = await this.$axios.$delete(
      `/users/${customer.id}/`,
      customer
    );
    window.location.reload()
    response.customer = customer;
  },
  async view({ commit }, ) {
    const response = await this.$axios.$get(
      "/users/"
    );
    commit("SET_EVENT", response);
  },
  async inquire({ commit }, data ) {
    const response = await this.$axios.$post(
      "/inquire/",
      data
    );
    commit("SET_EVENT", response);
  },
  
};

export default actions;
