const mutations = {
    ADD_USER: (state, payload) => {
      state.customers.unshift(payload);
    },
    SET_EVENT: (state, payload) => {
      state.users_data = payload;
    },
  };
  
  
  export default mutations;
  
