/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from "@/axios.js"

export default {
  addItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post("/api/client-list/clients/", { item: item })
        .then((response) => {
          commit('ADD_CLIENT', Object.assign(item, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchClientListItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/client-list/clients")
        .then((response) => {
          commit('SET_CLIENTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchClientListRequest({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/client-list/clients_requested")
        .then((response) => {
          commit('SET_CLIENTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchClientListItemsDeleted({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/client-list/clients_deleted")
        .then((response) => {
          commit('SET_CLIENTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  async fetchBranchItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/client-list/branches")
        .then((response) => {
          commit('SET_BRANCH', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/client-list/clients/${item.id}`, {item: item})
        .then((response) => {
          commit('UPDATE_CLIENT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem({ commit }, data) {
    if(data.role === 'vendor') {
      return new Promise((resolve, reject) => {
        axios.post(`/api/client-list/client_request/${data.id}`,{user_id:data.user_id})
          .then((response) => {
            commit('REQUEST_ITEM', data.id)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    }
    else {
      return new Promise((resolve, reject) => {
        axios.post(`/api/client-list/clients/${data.id}`,{user_id:data.user_id})
          .then((response) => {
            commit('REMOVE_ITEM', data.id)
            resolve(response)
          })
          .catch((error) => { reject(error) })
      })
    }
  },

  approveItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post("/api/client-list/client/approve_quota/", {id:data.id})
          .then((response) => {
            if(response.data) {
              commit('REMOVE_ITEM', data.id)
              resolve(true)
            }
          })
          .catch((error) => { reject(error) })
    })
  },

  rejectItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post("/api/client-list/client/reject_quota/", {id:data.id})
          .then((response) => {
            if(response.data) {
              commit('REMOVE_ITEM', data.id)
              resolve(true)
            }
          })
          .catch((error) => { reject(error) })
    })
  },
}
