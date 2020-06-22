/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/client/pixinvent
==========================================================================================*/


export default {
  ADD_SALES(state, item) {
    state.sales.unshift(item)
  },
  SET_SALES(state, sales) {
    state.sales = sales
  },
  SET_RETAIL(state, retails) {
    state.retails = retails
  },
  UPDATE_SALES(state, sales) {
      const salesIndex = state.sales.findIndex((p) => p.id == client.id)
      Object.assign(state.sales[salesIndex], sales)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.sales.findIndex((p) => p.id == itemId)
      state.sales.splice(ItemIndex, 1)
  },
  REQUEST_ITEM(state, itemId) {
    const ItemIndex = state.sales.findIndex((p) => p.id == itemId)
    state.sales[ItemIndex].status = 2
  },
}
