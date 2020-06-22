(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientList.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store/client-list/moduleClientList.js */ "./resources/js/src/store/client-list/moduleClientList.js");
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var dict = {
  custom: {
    quota_value: {
      required: "Quota Valor es requerido"
    },
    quota_comment: {
      required: "Quota Comentarios es requerido"
    },
    quota_percent: {
      required: "Quota porcentaje es requerido"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_2__["Validator"].localize('en', dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  components: {},
  data: function data() {
    return {
      userId: 1,
      selected: [],
      quotaVal: '',
      quotaPercentage: 0,
      itemsPerPage: 4,
      isMounted: false,
      deleteFlag: "Activos",
      popupActive: false,
      quotaComment: '',
      selectedQuota: [],
      myOptions: {
        layout: {
          color: 'black',
          backgroundColor: 'white',
          selectedColor: 'white',
          selectedBackgroundColor: 'green',
          borderColor: 'rgb(37,107,122)',
          fontFamily: 'Arial',
          fontWeight: 'normal',
          fontWeightSelected: 'bold',
          squareCorners: false,
          noBorder: false
        },
        size: {
          fontSize: 1.3,
          height: 3,
          padding: 0.5,
          width: 14
        },
        items: {
          delay: .4,
          preSelected: 'unknown',
          disabled: false,
          labels: [{
            name: 'De Baja',
            color: 'white',
            backgroundColor: 'red'
          }, {
            name: 'Activos',
            color: 'white',
            backgroundColor: 'rgb(37,107,122)'
          }]
        }
      }
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    clients: function clients() {
      return this.$store.state.clientList.clients;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.clients.length;
    }
  },
  methods: {
    requestQuota: function requestQuota() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll("Quota_Request").then(function (result) {
          if (result) {
            _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/client/update_quota/", {
              id: _this.selectedQuota.id,
              value: _this.quotaVal,
              comment: _this.quotaComment
            }).then(function (response) {
              if (response.data) {
                _this.popupActive = false;
                resolve(true);
              }
            }).catch(function (error) {
              reject(error);
            });
          }
        });
      });
    },
    changePercent: function changePercent() {
      this.quotaVal = this.selectedQuota.membership_fee / 100 * (100 + parseFloat(this.quotaPercentage));
    },
    changeQuotaval: function changeQuotaval() {
      this.quotaPercentage = (this.quotaVal - this.selectedQuota.membership_fee) / this.selectedQuota.membership_fee * 100;
    },
    addNewData: function addNewData() {
      this.$router.push('/client/add');
    },
    deleteData: function deleteData(id) {
      this.$store.dispatch("clientList/removeItem", {
        id: id,
        role: this.$store.state.AppActiveUser.userRole,
        user_id: this.userId
      }).catch(function (err) {
        console.error(err);
      });
    },
    editData: function editData(id) {
      this.$router.push('/client/edit?id=' + id);
    },
    showSalesHistory: function showSalesHistory(id) {
      this.$router.push('/sales?id=' + id);
    },
    editQuota: function editQuota(val) {
      this.selectedQuota = val;
      this.quotaVal = val.membership_fee;
      this.quotaPercentage = 0;
      this.quotaComment = '';
      this.popupActive = true;
    },
    viewData: function viewData(id) {
      this.$router.push('/client/view?id=' + id);
    },
    getGenderText: function getGenderText(status) {
      if (status == '0') return "F";
      if (status == '1') return "M";
      return "F";
    },
    getStatusColor: function getStatusColor(status) {
      if (status == '1') return "success";
      if (status == '2') return "primary";
      if (status == '3') return "primary";
      if (status == '4') return "danger";
      if (status == '5') return "danger";
      return "success";
    },
    getStatusText: function getStatusText(status) {
      if (status == '1') return "Activo";
      if (status == '2') return "Inactivo pendiente";
      if (status == '3') return "Baja pendiente";
      if (status == '4') return "Inactivo";
      if (status == '5') return "De baja";
      return "Activo";
    }
  },
  created: function created() {
    if (!_store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered) {
      this.$store.registerModule('clientList', _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
      _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_0__["default"].isRegistered = true;
    }

    this.$store.dispatch("clientList/fetchClientListItems");
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    this.userID = userInfo.uid;
  },
  mounted: function mounted() {
    this.isMounted = true;
  },
  watch: {
    deleteFlag: function deleteFlag(val) {
      if (val === "Activos") this.$store.dispatch("clientList/fetchClientListItems");else this.$store.dispatch("clientList/fetchClientListItemsDeleted");
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-vs-popup .vs-popup {\n  width: 700px;\n}\n#client-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#client-list-view .vs-con-table .vs-table--header {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n[dir=ltr] #client-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #client-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#client-list-view .vs-con-table .vs-table--header > span {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] #client-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#client-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #client-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #client-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #client-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #client-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #client-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#client-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #client-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #client-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #client-list-view .vs-con-table .vs-table tr td {\n  padding: 10px;\n}\n[dir=ltr] #client-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #client-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #client-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #client-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n#client-list-view .vs-con-table .vs-table tr td.img-container span {\n  display: flex;\n  justify-content: flex-start;\n}\n#client-list-view .vs-con-table .vs-table tr td.img-container .product-img {\n  height: 110px;\n}\n[dir] #client-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #client-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#client-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #client-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #client-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#client-list-view .vs-con-table .vs-table--pagination {\n  justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=template&id=4466a3cc&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientList.vue?vue&type=template&id=4466a3cc& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "data-list-container", attrs: { id: "client-list-view" } },
    [
      _c(
        "vs-table",
        {
          ref: "table",
          attrs: {
            pagination: "",
            "max-items": _vm.itemsPerPage,
            search: "",
            data: _vm.clients
          },
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var data = ref.data
                return [
                  _c(
                    "tbody",
                    _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c(
                            "vs-td",
                            { staticClass: "img-container" },
                            [
                              tr.avatar
                                ? [
                                    _c("img", {
                                      staticClass: "product-img",
                                      attrs: { src: tr.avatar }
                                    })
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(tr.first_name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(tr.last_name))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(_vm.getGenderText(tr.gender)))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c("p", { staticClass: "product-price" }, [
                              _vm._v(_vm._s(tr.doc_num))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(tr.phone_number1))]
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", [
                            _c(
                              "p",
                              {
                                staticClass: "product-name font-medium truncate"
                              },
                              [_vm._v(_vm._s(tr.email))]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c(
                                "vs-chip",
                                {
                                  staticClass: "product-order-status",
                                  attrs: {
                                    color: _vm.getStatusColor(tr.status)
                                  }
                                },
                                [_vm._v(_vm._s(_vm.getStatusText(tr.status)))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { staticClass: "whitespace-no-wrap" },
                            [
                              _c("feather-icon", {
                                attrs: {
                                  icon: "ShoppingCartIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.showSalesHistory(tr.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                attrs: {
                                  icon: "DollarSignIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editQuota(tr)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                attrs: {
                                  icon: "EyeIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.viewData(tr.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "ml-2",
                                attrs: {
                                  icon: "EditIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.editData(tr.id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "ml-2",
                                attrs: {
                                  icon: "TrashIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                    return _vm.deleteData(tr.id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.selected,
            callback: function($$v) {
              _vm.selected = $$v
            },
            expression: "selected"
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "flex flex-wrap-reverse items-center flex-grow justify-between",
              attrs: { slot: "header" },
              slot: "header"
            },
            [
              _c(
                "div",
                { staticClass: "flex flex-wrap-reverse items-center" },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",
                      on: { click: _vm.addNewData }
                    },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "ml-2 text-base text-primary" },
                        [_vm._v("Nuevo usuario")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  this.$store.state.AppActiveUser.userRole === "sales_manager"
                    ? _c("toggle-switch", {
                        staticClass: "ml-5 mb-2",
                        attrs: { options: _vm.myOptions },
                        model: {
                          value: _vm.deleteFlag,
                          callback: function($$v) {
                            _vm.deleteFlag = $$v
                          },
                          expression: "deleteFlag"
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vs-dropdown",
                {
                  staticClass: "cursor-pointer mb-4 mr-4",
                  attrs: { "vs-trigger-click": "" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                    },
                    [
                      _c("span", { staticClass: "mr-2" }, [
                        _vm._v(
                          _vm._s(
                            _vm.currentPage * _vm.itemsPerPage -
                              (_vm.itemsPerPage - 1)
                          ) +
                            " - " +
                            _vm._s(
                              _vm.clients.length -
                                _vm.currentPage * _vm.itemsPerPage >
                                0
                                ? _vm.currentPage * _vm.itemsPerPage
                                : _vm.clients.length
                            ) +
                            " of " +
                            _vm._s(_vm.queriedItems)
                        )
                      ]),
                      _vm._v(" "),
                      _c("feather-icon", {
                        attrs: {
                          icon: "ChevronDownIcon",
                          svgClasses: "h-4 w-4"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown-menu",
                    [
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 4
                            }
                          }
                        },
                        [_c("span", [_vm._v("4")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 10
                            }
                          }
                        },
                        [_c("span", [_vm._v("10")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 15
                            }
                          }
                        },
                        [_c("span", [_vm._v("15")])]
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-item",
                        {
                          on: {
                            click: function($event) {
                              _vm.itemsPerPage = 20
                            }
                          }
                        },
                        [_c("span", [_vm._v("20")])]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "thead" },
            [
              _c("vs-th", [_vm._v("Imagen de perfil")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "firstname" } }, [
                _vm._v("Nombre")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "lastname" } }, [
                _vm._v("Apellido")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "Gender" } }, [
                _vm._v("Genero")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "dni" } }, [_vm._v("DNI")]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "phone" } }, [
                _vm._v("Telefono")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "email" } }, [
                _vm._v("Correo electronico")
              ]),
              _vm._v(" "),
              _c("vs-th", { attrs: { "sort-key": "status" } }, [
                _vm._v("estado")
              ]),
              _vm._v(" "),
              _c("vs-th", [_vm._v("acciones")])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            classContent: "popup-example",
            title: "Cambiar cuota",
            active: _vm.popupActive
          },
          on: {
            "update:active": function($event) {
              _vm.popupActive = $event
            }
          }
        },
        [
          _c("form", { attrs: { "data-vv-scope": "Quota_Request" } }, [
            _c("div", { staticClass: "vx-row" }, [
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                [
                  _c("vs-input", {
                    staticClass: "w-full",
                    attrs: { label: "Valor Original", disabled: "" },
                    model: {
                      value: _vm.selectedQuota.membership_fee,
                      callback: function($$v) {
                        _vm.$set(_vm.selectedQuota, "membership_fee", $$v)
                      },
                      expression: "selectedQuota.membership_fee"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                [
                  !_vm.selectedQuota.quota_flag
                    ? _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: { label: "Nuevo Valor", name: "quota_value" },
                        on: { change: _vm.changeQuotaval },
                        model: {
                          value: _vm.quotaVal,
                          callback: function($$v) {
                            _vm.quotaVal = $$v
                          },
                          expression: "quotaVal"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selectedQuota.quota_flag
                    ? _c("vs-input", {
                        staticClass: "w-full",
                        attrs: { label: "Nuevo Valor", disabled: "" },
                        model: {
                          value: _vm.selectedQuota.quota_request_val,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.selectedQuota,
                              "quota_request_val",
                              $$v
                            )
                          },
                          expression: "selectedQuota.quota_request_val"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(
                      _vm._s(_vm.errors.first("Quota_Request.quota_value"))
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                [
                  !_vm.selectedQuota.quota_flag
                    ? _c("vs-input", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        staticClass: "w-full",
                        attrs: {
                          label: "%",
                          type: "number",
                          name: "quota_percent"
                        },
                        on: { change: _vm.changePercent },
                        model: {
                          value: _vm.quotaPercentage,
                          callback: function($$v) {
                            _vm.quotaPercentage = $$v
                          },
                          expression: "quotaPercentage"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(
                      _vm._s(_vm.errors.first("Quota_Request.quota_percent"))
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/1 w-full mt-5" },
                [
                  !_vm.selectedQuota.quota_flag
                    ? _c("vs-textarea", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: { label: "Comentarios", name: "quota_comment" },
                        model: {
                          value: _vm.quotaComment,
                          callback: function($$v) {
                            _vm.quotaComment = $$v
                          },
                          expression: "quotaComment"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selectedQuota.quota_flag
                    ? _c("vs-textarea", {
                        attrs: { label: "Comentarios", disabled: "" },
                        model: {
                          value: _vm.selectedQuota.quota_request_comment,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.selectedQuota,
                              "quota_request_comment",
                              $$v
                            )
                          },
                          expression: "selectedQuota.quota_request_comment"
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-danger" }, [
                    _vm._v(
                      _vm._s(_vm.errors.first("Quota_Request.quota_comment"))
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "vx-col md:w-1/1 w-full mt-3 text-center" },
                [
                  !_vm.selectedQuota.quota_flag
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "mr-3 mb-2 mt-5",
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              return _vm.requestQuota($event)
                            }
                          }
                        },
                        [_vm._v("Solicitud")]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.selectedQuota.quota_flag
                    ? _c(
                        "vs-button",
                        {
                          staticClass: "mr-3 mb-2 mt-5",
                          on: {
                            click: function($event) {
                              _vm.popupActive = false
                            }
                          }
                        },
                        [_vm._v("Cerrar")]
                      )
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/store/client-list/moduleClientList.js":
/*!****************************************************************!*\
  !*** ./resources/js/src/store/client-list/moduleClientList.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleClientListState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleClientListState.js */ "./resources/js/src/store/client-list/moduleClientListState.js");
/* harmony import */ var _moduleClientListMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleClientListMutations.js */ "./resources/js/src/store/client-list/moduleClientListMutations.js");
/* harmony import */ var _moduleClientListActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleClientListActions.js */ "./resources/js/src/store/client-list/moduleClientListActions.js");
/* harmony import */ var _moduleClientListGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleClientListGetters.js */ "./resources/js/src/store/client-list/moduleClientListGetters.js");
/*=========================================================================================
  File Name: moduleClientList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleClientListState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleClientListMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleClientListActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleClientListGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/client-list/moduleClientListActions.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/store/client-list/moduleClientListActions.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

/* harmony default export */ __webpack_exports__["default"] = ({
  addItem: function addItem(_ref, item) {
    var commit = _ref.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/clients/", {
        item: item
      }).then(function (response) {
        commit('ADD_CLIENT', Object.assign(item, {
          id: response.data.id
        }));
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchClientListItems: function fetchClientListItems(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/client-list/clients").then(function (response) {
        commit('SET_CLIENTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchClientListRequest: function fetchClientListRequest(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/client-list/clients_requested").then(function (response) {
        commit('SET_CLIENTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchClientListItemsDeleted: function fetchClientListItemsDeleted(_ref4) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/client-list/clients_deleted").then(function (response) {
        commit('SET_CLIENTS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchBranchItems: function () {
    var _fetchBranchItems = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref5) {
      var commit;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref5.commit;
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/client-list/branches").then(function (response) {
                  commit('SET_BRANCH', response.data);
                  resolve(response);
                }).catch(function (error) {
                  reject(error);
                });
              }));

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function fetchBranchItems(_x) {
      return _fetchBranchItems.apply(this, arguments);
    }

    return fetchBranchItems;
  }(),
  updateItem: function updateItem(_ref6, item) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/clients/".concat(item.id), {
        item: item
      }).then(function (response) {
        commit('UPDATE_CLIENT', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref7, data) {
    var commit = _ref7.commit;

    if (data.role === 'vendor') {
      return new Promise(function (resolve, reject) {
        _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/client_request/".concat(data.id), {
          user_id: data.user_id
        }).then(function (response) {
          commit('REQUEST_ITEM', data.id);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    } else {
      return new Promise(function (resolve, reject) {
        _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/clients/".concat(data.id), {
          user_id: data.user_id
        }).then(function (response) {
          commit('REMOVE_ITEM', data.id);
          resolve(response);
        }).catch(function (error) {
          reject(error);
        });
      });
    }
  },
  approveItem: function approveItem(_ref8, data) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/client/approve_quota/", {
        id: data.id
      }).then(function (response) {
        if (response.data) {
          commit('REMOVE_ITEM', data.id);
          resolve(true);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  rejectItem: function rejectItem(_ref9, data) {
    var commit = _ref9.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/client-list/client/reject_quota/", {
        id: data.id
      }).then(function (response) {
        if (response.data) {
          commit('REMOVE_ITEM', data.id);
          resolve(true);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  }
});

/***/ }),

/***/ "./resources/js/src/store/client-list/moduleClientListGetters.js":
/*!***********************************************************************!*\
  !*** ./resources/js/src/store/client-list/moduleClientListGetters.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarGetters.js
  Description: Calendar Module Getters
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({// getItem: state => (productId) => state.products.find((product) => product.id == productId),
});

/***/ }),

/***/ "./resources/js/src/store/client-list/moduleClientListMutations.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/store/client-list/moduleClientListMutations.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/client/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  ADD_CLIENT: function ADD_CLIENT(state, item) {
    state.clients.unshift(item);
  },
  SET_CLIENTS: function SET_CLIENTS(state, clients) {
    state.clients = clients;
  },
  SET_BRANCH: function SET_BRANCH(state, branches) {
    state.branches = branches;
  },
  UPDATE_CLIENT: function UPDATE_CLIENT(state, client) {
    var clientIndex = state.clients.findIndex(function (p) {
      return p.id == client.id;
    });
    Object.assign(state.clients[clientIndex], client);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.clients.findIndex(function (p) {
      return p.id == itemId;
    });
    state.clients.splice(ItemIndex, 1);
  },
  REQUEST_ITEM: function REQUEST_ITEM(state, itemId) {
    var ItemIndex = state.clients.findIndex(function (p) {
      return p.id == itemId;
    });
    state.clients[ItemIndex].status = 2;
  }
});

/***/ }),

/***/ "./resources/js/src/store/client-list/moduleClientListState.js":
/*!*********************************************************************!*\
  !*** ./resources/js/src/store/client-list/moduleClientListState.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  clients: [],
  branches: []
});

/***/ }),

/***/ "./resources/js/src/views/clients/ClientList.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/clients/ClientList.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientList_vue_vue_type_template_id_4466a3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientList.vue?vue&type=template&id=4466a3cc& */ "./resources/js/src/views/clients/ClientList.vue?vue&type=template&id=4466a3cc&");
/* harmony import */ var _ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientList.vue?vue&type=script&lang=js& */ "./resources/js/src/views/clients/ClientList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientList.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientList_vue_vue_type_template_id_4466a3cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientList_vue_vue_type_template_id_4466a3cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/clients/ClientList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/clients/ClientList.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientList.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/clients/ClientList.vue?vue&type=template&id=4466a3cc&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientList.vue?vue&type=template&id=4466a3cc& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_template_id_4466a3cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientList.vue?vue&type=template&id=4466a3cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientList.vue?vue&type=template&id=4466a3cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_template_id_4466a3cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientList_vue_vue_type_template_id_4466a3cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);