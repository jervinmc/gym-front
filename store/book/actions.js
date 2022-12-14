const actions = {
    async addBook({ commit },  book ) {
      book.status='Pending'
      const response = await this.$axios.$post(
        "/book/",
        book
      );
      response.book = book;
    },
    async editUser({ commit },  customer ) {
      console.log(customer)
      const response = await this.$axios.$put(
        `/users/${customer.id}/`,
        customer
      );
      response.customer = customer;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/book/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  