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
      axios.post("/api/sales-list/sales/", { item: item })
        .then((response) => {
          commit('ADD_SALES', Object.assign(item, { id: response.data.id }))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchSalesListItems({ commit }, [id]) {
    return new Promise((resolve, reject) => {
      axios.get("/api/sales-list/sales/"+id)
        .then((response) => {
          console.log(response.data)
          commit('SET_SALES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchSalesListRequest({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/sales-list/sales_requested")
        .then((response) => {
          commit('SET_SALES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },

  fetchSalesListItemsDeleted({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get("/api/sales-list/sales_deleted")
        .then((response) => {
          commit('SET_SALES', response.data)
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
