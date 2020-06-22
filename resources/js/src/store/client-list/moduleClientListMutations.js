/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/client/pixinvent
==========================================================================================*/


export default {
  ADD_CLIENT(state, item) {
    state.clients.unshift(item)
  },
  SET_CLIENTS(state, clients) {
    state.clients = clients
  },
  SET_BRANCH(state, branches) {
    state.branches = branches
  },
  UPDATE_CLIENT(state, client) {
      const clientIndex = state.clients.findIndex((p) => p.id == client.id)
      Object.assign(state.clients[clientIndex], client)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.clients.findIndex((p) => p.id == itemId)
      state.clients.splice(ItemIndex, 1)
  },
  REQUEST_ITEM(state, itemId) {
    const ItemIndex = state.clients.findIndex((p) => p.id == itemId)
    state.clients[ItemIndex].status = 2
  },
}
