/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/client/pixinvent
==========================================================================================*/


export default {
  ADD_OFFERING(state, item) {
    state.offerings.unshift(item)
  },
  SET_OFFERINGS(state, offerings) {
    state.offerings = offerings
  },
  SET_RETAIL(state, retails) {
    state.retails = retails
  },
  UPDATE_OFFERING(state, offering) {
      const offeringIndex = state.offerings.findIndex((p) => p.id == client.id)
      Object.assign(state.offerings[offeringIndex], offering)
  },
  REMOVE_ITEM(state, itemId) {
      const ItemIndex = state.offerings.findIndex((p) => p.id == itemId)
      state.offerings.splice(ItemIndex, 1)
  },
  REQUEST_ITEM(state, itemId) {
    const ItemIndex = state.offerings.findIndex((p) => p.id == itemId)
    state.offerings[ItemIndex].status = 2
  },
}
