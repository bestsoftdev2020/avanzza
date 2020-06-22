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
      axios.post("/api/offering-list/offering/", { item: item })
        .then((response) => {
          commit('ADD_OFFERING', Object.assign(item, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchOfferingListItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/offering-list/offerings")
        .then((response) => {
          console.log(response.data)
          commit('SET_OFFERINGS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchClientListRequest({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/offering-list/offering_requested")
        .then((response) => {
          commit('SET_OFFERINGS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchClientListItemsDeleted({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/offering-list/offering_deleted")
        .then((response) => {
          commit('SET_OFFERINGS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  async fetchRetailItems({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/offering-list/retails")
        .then((response) => {
          commit('SET_RETAIL', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  updateItem({ commit }, item) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/offering-list/offering/${item.id}`, {item: item})
        .then((response) => {
          commit('UPDATE_OFFERING', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  removeItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/offering-list/offering/${data.id}`,{user_id:data.user_id})
        .then((response) => {
          commit('REMOVE_ITEM', data.id)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  approveItem({ commit }, data) {
    return new Promise((resolve, reject) => {
      axios.post("/api/offering-list/offering/approve_quota/", {id:data.id})
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
      axios.post("/api/offering-list/offering/reject_quota/", {id:data.id})
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
