// import { createStore } from 'vuex';

// const store = createStore({
//     state: {
//         // formData: {}
//         firstName: 'John',
//         lastName: 'Doe'
//       },
  
//     mutations: {
//         // updateFormData(state, payload) {
//         //   state.formData = payload
//         // }
//       },
//     actions: {
//         // saveFormData({ commit }, formData) {
//         //   commit('updateFormData', formData)
//         // }
//       },
//     getters: {
//     //     getFormData(state) {
//     //       return state.formData
//     //     }
//     //   }
// });

// export default store;

import { createStore } from 'vuex'

export default createStore({
state: {
    projectname: "Avichal Ventures",
    projectuid: "2338",
    country: "India",
    province: "MADHYA PRADESH"
  },
mutations: {

},
actions: {

},
getters: {

}
})
