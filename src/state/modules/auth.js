import axios from 'axios'
import apiService from "../../services/api.service";
import countryCode from "../../helpers/countryCode";
import Storage from '@src/services/storage'

const storage = new Storage()

export const state = {
  currentUser: storage.getSavedState('auth.currentUser'),
  countryCode: countryCode()
}

export const mutations = {
  SET_CURRENT_USER(state, newValue) {
    state.currentUser = newValue
    storage.saveState('auth.currentUser', newValue)
  },
  LOGOUT(state){
    storage.clearAllSavedData()  
    state.currentUser = null
  }
}

export const actions = {
  init({ state, dispatch }) {
    // setDefaultAuthHeaders(state)
    dispatch('validate')
  },

  register({commit}, data) {
    return new Promise( (resolve, reject) => {
         apiService.post('api/register',data)
             .then( response => {
                 if(response) {
                     commit('SET_CURRENT_USER',response.data.data)
                 }
                 resolve(response)
             }).catch( err => reject(err))
    })
 },

 login({commit}, data) {
     return new Promise( (resolve, reject) => {
          apiService.post('api/login',data)
              .then( response => {
                  if(response) {
                      commit('SET_CURRENT_USER',response.data.data)
                  }
                  resolve(response)
              }).catch( err => reject(err))
     })
  },

  resetPassword({commit}, data) {
     return new Promise( (resolve, reject) => {
          apiService.post('api/password/reset',data)
              .then( response => {
                  if(response) {
                    commit('SET_CURRENT_USER',response.data)
                  }
                  resolve(response)
              }).catch( err => reject(err))
     })
  },

  resendActivationCode({commit}, data) {
     return new Promise( (resolve, reject) => {
          apiService.post('api/activation/code/resend',data)
              .then( response => {
                  if(response) {
                      // Vue.prototype.$session.set('token', response.data.token)
                  }
                  resolve(response)
              }).catch( err => reject(err))
     })
 },
 activateAccount({commit}, data) {
  return new Promise( (resolve, reject) => {
       apiService.post('api/activate/account',data)
           .then( response => {
               if(response) {
                   // Vue.prototype.$session.set('token', response.data.token)
               }
               resolve(response)
           }).catch( err => reject(err))
  })
},
reActivateAccount({commit}, data) {
  return new Promise( (resolve, reject) => {
       apiService.post('api/reactivate/account',data)
           .then( response => {
               if(response) {
                   // Vue.prototype.$session.set('token', response.data.token)
               }
               resolve(response)
           }).catch( err => reject(err))
  })
},
updatePassword({commit}, data) {
  return new Promise( (resolve, reject) => {
       apiService.post('api/update/password',data)
           .then( response => {
               if(response) {
               }
               resolve(response)
           }).catch( err => reject(err))
  })
},
updatePhone({commit}, data) {
  return new Promise( (resolve, reject) => {
       apiService.post('api/update/phone',data)
           .then( response => {
               if(response) {
               }
               resolve(response)
           }).catch( err => reject(err))
  })
},
 logout({commit}) {
     return new Promise( (resolve, reject) => {
         commit("LOGOUT")
         resolve()
     })
 },
  // Validates the current user's token and refreshes it
  // with new data from the API.
  // todo
  validate({ commit, state }) {
    if (!state.currentUser) return Promise.resolve(null)

    return axios
      .get('/api/session')
      .then((response) => {
        const user = response.data
        commit('SET_CURRENT_USER', user)
        return user
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          commit('SET_CURRENT_USER', null)
        }
        return null
      })
  },
}

export const getters = {
  isLoggedIn: () =>  !!state.currentUser,
  countryCode: state => state.countryCode,
  currentUser: state => state.currentUser
}

