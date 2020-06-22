/*=========================================================================================
  File Name: moduleOfferingList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleOfferingListState.js'
import mutations from './moduleOfferingListMutations.js'
import actions from './moduleOfferingListActions.js'
import getters from './moduleOfferingListGetters.js'

export default {
  isRegistered: false,
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}

