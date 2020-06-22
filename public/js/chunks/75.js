(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[75],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sales/SalesAdd.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/client-list/moduleClientList.js */ "./resources/js/src/store/client-list/moduleClientList.js");
/* harmony import */ var _store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/offering-list/moduleOfferingList.js */ "./resources/js/src/store/offering-list/moduleOfferingList.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");


var _computed;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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




 // For custom error message


var dict = {
  custom: {
    loan_amount: {
      required: "Loan Amount es requerido"
    },
    seats_amount: {
      required: "Amount of seats es requerido"
    },
    retail_amount: {
      required: "Amount of retail es requerido"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_6__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selected: [],
      selected_offering: [],
      itemsPerPage: 4,
      isMounted: false,
      itemsPerPageOffering: 4,
      isMountedOffering: false,
      userId: 1,
      loan_amount: 0,
      seats_amount: 0,
      retail_amount: 0
    };
  },
  computed: (_computed = {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    currentPageOffering: function currentPageOffering() {
      if (this.isMountedOffering) {
        return this.$refs.table_offering.currentx;
      }

      return 0;
    },
    clients: function clients() {
      return this.$store.state.clientList.clients;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.clients.length;
    }
  }, _defineProperty(_computed, "currentPageOffering", function currentPageOffering() {
    if (this.isMountedOffering) {
      return this.$refs.table_offering.currentx;
    }

    return 0;
  }), _defineProperty(_computed, "offerings", function offerings() {
    return this.$store.state.offeringList.offerings;
  }), _defineProperty(_computed, "queriedItemsOffering", function queriedItemsOffering() {
    return this.$refs.table_offering ? this.$refs.table_offering.queriedResults.length : this.offerings.length;
  }), _computed),
  methods: {
    getGender: function getGender(id) {
      if (id === 1) return "M";else return "F";
    },
    getTypeText: function getTypeText(type) {
      if (type == "1") return "Loan";
      if (type == "2") return "Retail";
      if (type == "3") return "Insurance";
      if (type == "4") return "Trips";
      return "Loan";
    },
    getMinimumRiskText: function getMinimumRiskText(type) {
      if (type == "1") return "A";
      if (type == "2") return "B";
      if (type == "3") return "C";
      if (type == "4") return "D";
      return "A";
    },
    validateStep1: function validateStep1() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll("step-1").then(function (result) {
          if (result) {
            if (_this.selected_offering.id) resolve(true);else reject("correct all values");
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2.$validator.validateAll("step-2").then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll("step-3").then(function (result) {
          if (result) {
            var data = new FormData();
            data.append("user_id", _this3.userId);
            data.append("client_id", _this3.selected.id);
            data.append("offer_id", _this3.selected_offering.id);
            data.append("loan_amount", _this3.loan_amount);
            data.append("retail_amount", _this3.retail_amount);
            data.append("seats_amount", _this3.seats_amount);
            _axios_js__WEBPACK_IMPORTED_MODULE_4__["default"].post("/api/sales-list/sales/add", data, {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }).then(function (response) {
              if (response.data) {
                _this3.$router.push("/sales?id=" + response.data);

                resolve(true);
              }
            }).catch(function (error) {
              reject(error);
            });
          } else {
            reject("correct all values");
          }
        });
      });
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this4 = this;

      var tempClients, userInfo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered) {
                this.$store.registerModule("offeringList", _store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
                _store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_2__["default"].isRegistered = true;
              }

              this.$store.dispatch("offeringList/fetchOfferingListItems");

              if (!_store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
                this.$store.registerModule("clientList", _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
              }

              _context.next = 5;
              return this.$store.dispatch("clientList/fetchClientListItems");

            case 5:
              tempClients = this.$store.state.clientList.clients;
              tempClients.forEach(function (element) {
                if (element.id == _this4.$route.query.id) _this4.selected = element;
              });
              userInfo = JSON.parse(localStorage.getItem("userInfo"));
              this.userID = userInfo.uid;

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function created() {
      return _created.apply(this, arguments);
    }

    return created;
  }(),
  mounted: function mounted() {
    this.isMounted = true;
    this.isMountedOffering = true;
  },
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_3__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#avatar-col[data-v-5ac5cb42] {\n  width: 10rem;\n}\n.font-semibold[data-v-5ac5cb42] {\n  color: rgba(var(--vs-primary), 1);\n}\n.vs-con-table .product-name[data-v-5ac5cb42] {\n  max-width: 23rem;\n}\n.vs-con-table .vs-table--header[data-v-5ac5cb42] {\n  display: flex;\n  flex-wrap: wrap-reverse;\n}\n[dir=ltr] .vs-con-table .vs-table--header[data-v-5ac5cb42] {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] .vs-con-table .vs-table--header[data-v-5ac5cb42] {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n.vs-con-table .vs-table--header > span[data-v-5ac5cb42] {\n  display: flex;\n  flex-grow: 1;\n}\n[dir] .vs-con-table .vs-table--header .vs-table--search[data-v-5ac5cb42] {\n  padding-top: 0;\n}\n.vs-con-table .vs-table--header .vs-table--search .vs-table--search-input[data-v-5ac5cb42] {\n  font-size: 1rem;\n}\n[dir] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input[data-v-5ac5cb42] {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i[data-v-5ac5cb42] {\n  left: 1rem;\n}\n[dir=rtl] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i[data-v-5ac5cb42] {\n  right: 1rem;\n}\n[dir=ltr] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i[data-v-5ac5cb42] {\n  left: 1rem;\n}\n[dir=rtl] .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i[data-v-5ac5cb42] {\n  right: 1rem;\n}\n.vs-con-table .vs-table[data-v-5ac5cb42] {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] .vs-con-table .vs-table[data-v-5ac5cb42] {\n  padding: 0 1rem;\n}\n[dir] .vs-con-table .vs-table tr[data-v-5ac5cb42] {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] .vs-con-table .vs-table tr td[data-v-5ac5cb42] {\n  padding: 10px;\n}\n[dir=ltr] .vs-con-table .vs-table tr td[data-v-5ac5cb42]:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] .vs-con-table .vs-table tr td[data-v-5ac5cb42]:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] .vs-con-table .vs-table tr td[data-v-5ac5cb42]:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] .vs-con-table .vs-table tr td[data-v-5ac5cb42]:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n.vs-con-table .vs-table tr td.img-container span[data-v-5ac5cb42] {\n  display: flex;\n  justify-content: flex-start;\n}\n.vs-con-table .vs-table tr td.img-container .product-img[data-v-5ac5cb42] {\n  height: 60px;\n}\n[dir] .vs-con-table .vs-table tr td.td-check[data-v-5ac5cb42] {\n  padding: 20px !important;\n}\n[dir] .vs-con-table .vs-table--thead th[data-v-5ac5cb42] {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.vs-con-table .vs-table--thead th .vs-table-text[data-v-5ac5cb42] {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] .vs-con-table .vs-table--thead th.td-check[data-v-5ac5cb42] {\n  padding: 0 15px !important;\n}\n[dir] .vs-con-table .vs-table--thead tr[data-v-5ac5cb42] {\n  background: none;\n  box-shadow: none;\n}\n.vs-con-table .vs-table--pagination[data-v-5ac5cb42] {\n  justify-content: center;\n}\n#page-user-view table td[data-v-5ac5cb42] {\n  vertical-align: top;\n  min-width: 200px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td[data-v-5ac5cb42] {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td[data-v-5ac5cb42] {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1[data-v-5ac5cb42] {\n    width: calc(100% - 12rem) !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/sales/SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { attrs: { title: "Formulario de alta" } }, [
    _c(
      "div",
      { staticClass: "mt-0" },
      [
        _c(
          "form-wizard",
          {
            attrs: {
              color: "rgba(var(--vs-primary), 1)",
              errorColor: "rgba(var(--vs-danger), 1)",
              title: null,
              subtitle: null,
              finishButtonText: "Guardar",
              nextButtonText: "Siguiente",
              backButtonText: "Atras"
            }
          },
          [
            _c(
              "tab-content",
              {
                staticClass: "mb-5",
                attrs: {
                  title: "Choose offering",
                  icon: "feather icon-info",
                  "before-change": _vm.validateStep1
                }
              },
              [
                _c(
                  "form",
                  { attrs: { "data-vv-scope": "step-1" } },
                  [
                    _c(
                      "vs-table",
                      {
                        ref: "table_offering",
                        attrs: {
                          pagination: "",
                          "max-items": _vm.itemsPerPageOffering,
                          search: "",
                          data: _vm.offerings
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
                                        _c("vs-td", [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "product-name font-medium truncate"
                                            },
                                            [_vm._v(_vm._s(tr.id))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "product-name font-medium truncate"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(_vm.getTypeText(tr.type))
                                              )
                                            ]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "product-name font-medium truncate"
                                            },
                                            [_vm._v(_vm._s(tr.name))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _c(
                                            "p",
                                            { staticClass: "product-price" },
                                            [_vm._v(_vm._s(tr.description))]
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          _c(
                                            "p",
                                            {
                                              staticClass:
                                                "product-name font-medium truncate"
                                            },
                                            [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.getMinimumRiskText(
                                                    tr.minimum_risk
                                                  )
                                                )
                                              )
                                            ]
                                          )
                                        ])
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
                          value: _vm.selected_offering,
                          callback: function($$v) {
                            _vm.selected_offering = $$v
                          },
                          expression: "selected_offering"
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
                                          _vm.currentPageOffering *
                                            _vm.itemsPerPageOffering -
                                            (_vm.itemsPerPageOffering - 1)
                                        ) +
                                          " - " +
                                          _vm._s(
                                            _vm.offerings.length -
                                              _vm.currentPageOffering *
                                                _vm.itemsPerPageOffering >
                                              0
                                              ? _vm.currentPageOffering *
                                                  _vm.itemsPerPageOffering
                                              : _vm.offerings.length
                                          ) +
                                          " of " +
                                          _vm._s(_vm.queriedItemsOffering)
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
                                            _vm.itemsPerPageOffering = 4
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
                                            _vm.itemsPerPageOffering = 10
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
                                            _vm.itemsPerPageOffering = 15
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
                                            _vm.itemsPerPageOffering = 20
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
                            _c("vs-th", [_vm._v("ID")]),
                            _vm._v(" "),
                            _c("vs-th", { attrs: { "sort-key": "type" } }, [
                              _vm._v("Type")
                            ]),
                            _vm._v(" "),
                            _c("vs-th", { attrs: { "sort-key": "name" } }, [
                              _vm._v("Name")
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-th",
                              { attrs: { "sort-key": "description" } },
                              [_vm._v("Description")]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-th",
                              { attrs: { "sort-key": "minimum_risk" } },
                              [_vm._v("Minimum Risk")]
                            )
                          ],
                          1
                        )
                      ],
                      2
                    )
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "tab-content",
              {
                staticClass: "mb-5",
                attrs: {
                  title: "Input Values",
                  icon: "feather icon-gitlab",
                  "before-change": _vm.validateStep2
                }
              },
              [
                _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
                  _c("div", { staticClass: "vx-row" }, [
                    this.selected_offering.type == 1
                      ? _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-2" },
                          [
                            _c("vs-input", {
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
                                label: "Loan Amount",
                                type: "number",
                                name: "loan_amount"
                              },
                              model: {
                                value: _vm.loan_amount,
                                callback: function($$v) {
                                  _vm.loan_amount = $$v
                                },
                                expression: "loan_amount"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.loan_amount"))
                              )
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.selected_offering.type == 4
                      ? _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-2" },
                          [
                            _c("vs-input", {
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
                                label: "Amount of seats",
                                type: "number",
                                name: "seats_amount"
                              },
                              model: {
                                value: _vm.seats_amount,
                                callback: function($$v) {
                                  _vm.seats_amount = $$v
                                },
                                expression: "seats_amount"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.seats_amount"))
                              )
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    this.selected_offering.type == 2
                      ? _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-2" },
                          [
                            _c("vs-input", {
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
                                label: "Amount of retail",
                                type: "number",
                                name: "retail_amount"
                              },
                              model: {
                                value: _vm.retail_amount,
                                callback: function($$v) {
                                  _vm.retail_amount = $$v
                                },
                                expression: "retail_amount"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.retail_amount"))
                              )
                            ])
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "tab-content",
              {
                staticClass: "mb-5",
                attrs: {
                  title: "Confirm Step",
                  icon: "feather icon-check-circle",
                  "before-change": _vm.validateStep3
                }
              },
              [
                _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
                  _c(
                    "div",
                    { attrs: { id: "page-user-view" } },
                    [
                      _c("vx-card", { staticClass: "mb-base" }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full" },
                            [
                              _c(
                                "div",
                                { staticClass: "flex items-end px-3" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-2",
                                    attrs: {
                                      svgClasses: "w-6 h-6",
                                      icon: "UserIcon"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-medium text-lg leading-none"
                                    },
                                    [_vm._v("Client Information")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-divider")
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "vx-col",
                              attrs: { id: "avatar-col" }
                            },
                            [
                              _c("div", { staticClass: "img-container mb-4" }, [
                                _c("img", {
                                  staticClass: "rounded w-full",
                                  attrs: { src: this.selected.avatar }
                                })
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "vx-col flex-1",
                              attrs: { id: "account-info-col-1" }
                            },
                            [
                              _c("table", [
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Nombre")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(this.selected.first_name))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Apellido")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(this.selected.last_name))
                                  ])
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "vx-col flex-1",
                              attrs: { id: "account-info-col-2" }
                            },
                            [
                              _c("table", [
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Gender")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.getGender(this.selected.gender)
                                      )
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Email")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(this.selected.email))
                                  ])
                                ])
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vx-card", { staticClass: "mb-base" }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full" },
                            [
                              _c(
                                "div",
                                { staticClass: "flex items-end px-3" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-2",
                                    attrs: {
                                      svgClasses: "w-6 h-6",
                                      icon: "InfoIcon"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-medium text-lg leading-none"
                                    },
                                    [_vm._v("Offering Information")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-divider")
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "vx-col flex-1",
                              staticStyle: { "padding-left": "154px" },
                              attrs: { id: "account-info-col-1" }
                            },
                            [
                              _c("table", [
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("ID")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(_vm._s(this.selected_offering.id))
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Type")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.getTypeText(
                                          this.selected_offering.type
                                        )
                                      )
                                    )
                                  ])
                                ])
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "vx-col flex-1",
                              attrs: { id: "account-info-col-2" }
                            },
                            [
                              _c("table", [
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Description")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(this.selected_offering.description)
                                    )
                                  ])
                                ]),
                                _vm._v(" "),
                                _c("tr", [
                                  _c("td", { staticClass: "font-semibold" }, [
                                    _vm._v("Minimum Risk")
                                  ]),
                                  _vm._v(" "),
                                  _c("td", [
                                    _vm._v(
                                      _vm._s(
                                        _vm.getMinimumRiskText(
                                          this.selected_offering.minimum_risk
                                        )
                                      )
                                    )
                                  ])
                                ])
                              ])
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("vx-card", { staticClass: "mb-base" }, [
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            { staticClass: "vx-col w-full" },
                            [
                              _c(
                                "div",
                                { staticClass: "flex items-end px-3" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-2",
                                    attrs: {
                                      svgClasses: "w-6 h-6",
                                      icon: "GitlabIcon"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-medium text-lg leading-none"
                                    },
                                    [_vm._v("Input Values")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("vs-divider")
                            ],
                            1
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "vx-row" }, [
                          _c(
                            "div",
                            {
                              staticClass: "vx-col flex-1",
                              staticStyle: { "padding-left": "154px" },
                              attrs: { id: "account-info-col-1" }
                            },
                            [
                              _c("table", [
                                this.selected_offering.type == 1
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        { staticClass: "font-semibold" },
                                        [_vm._v("Loan Amount")]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(this.loan_amount))
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                this.selected_offering.type == 2
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        { staticClass: "font-semibold" },
                                        [_vm._v("Retail Amount")]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(this.retail_amount))
                                      ])
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                this.selected_offering.type == 4
                                  ? _c("tr", [
                                      _c(
                                        "td",
                                        { staticClass: "font-semibold" },
                                        [_vm._v("Seats Amount")]
                                      ),
                                      _vm._v(" "),
                                      _c("td", [
                                        _vm._v(_vm._s(this.seats_amount))
                                      ])
                                    ])
                                  : _vm._e()
                              ])
                            ]
                          )
                        ])
                      ])
                    ],
                    1
                  )
                ])
              ]
            )
          ],
          1
        )
      ],
      1
    )
  ])
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

/***/ "./resources/js/src/store/offering-list/moduleOfferingList.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/store/offering-list/moduleOfferingList.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _moduleOfferingListState_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleOfferingListState.js */ "./resources/js/src/store/offering-list/moduleOfferingListState.js");
/* harmony import */ var _moduleOfferingListMutations_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleOfferingListMutations.js */ "./resources/js/src/store/offering-list/moduleOfferingListMutations.js");
/* harmony import */ var _moduleOfferingListActions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleOfferingListActions.js */ "./resources/js/src/store/offering-list/moduleOfferingListActions.js");
/* harmony import */ var _moduleOfferingListGetters_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moduleOfferingListGetters.js */ "./resources/js/src/store/offering-list/moduleOfferingListGetters.js");
/*=========================================================================================
  File Name: moduleOfferingList.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/




/* harmony default export */ __webpack_exports__["default"] = ({
  isRegistered: false,
  namespaced: true,
  state: _moduleOfferingListState_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  mutations: _moduleOfferingListMutations_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  actions: _moduleOfferingListActions_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  getters: _moduleOfferingListGetters_js__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./resources/js/src/store/offering-list/moduleOfferingListActions.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/store/offering-list/moduleOfferingListActions.js ***!
  \***************************************************************************/
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
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/offering-list/offering/", {
        item: item
      }).then(function (response) {
        commit('ADD_OFFERING', Object.assign(item, {
          id: response.data.id
        }));
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchOfferingListItems: function fetchOfferingListItems(_ref2) {
    var commit = _ref2.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/offering-list/offerings").then(function (response) {
        console.log(response.data);
        commit('SET_OFFERINGS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchClientListRequest: function fetchClientListRequest(_ref3) {
    var commit = _ref3.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/offering-list/offering_requested").then(function (response) {
        commit('SET_OFFERINGS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchClientListItemsDeleted: function fetchClientListItemsDeleted(_ref4) {
    var commit = _ref4.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/offering-list/offering_deleted").then(function (response) {
        commit('SET_OFFERINGS', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  fetchRetailItems: function () {
    var _fetchRetailItems = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref5) {
      var commit;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              commit = _ref5.commit;
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/offering-list/retails").then(function (response) {
                  commit('SET_RETAIL', response.data);
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

    function fetchRetailItems(_x) {
      return _fetchRetailItems.apply(this, arguments);
    }

    return fetchRetailItems;
  }(),
  updateItem: function updateItem(_ref6, item) {
    var commit = _ref6.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/offering-list/offering/".concat(item.id), {
        item: item
      }).then(function (response) {
        commit('UPDATE_OFFERING', response.data);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  removeItem: function removeItem(_ref7, data) {
    var commit = _ref7.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/offering-list/offering/".concat(data.id), {
        user_id: data.user_id
      }).then(function (response) {
        commit('REMOVE_ITEM', data.id);
        resolve(response);
      }).catch(function (error) {
        reject(error);
      });
    });
  },
  approveItem: function approveItem(_ref8, data) {
    var commit = _ref8.commit;
    return new Promise(function (resolve, reject) {
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/offering-list/offering/approve_quota/", {
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
      _axios_js__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/offering-list/offering/reject_quota/", {
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

/***/ "./resources/js/src/store/offering-list/moduleOfferingListGetters.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/store/offering-list/moduleOfferingListGetters.js ***!
  \***************************************************************************/
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

/***/ "./resources/js/src/store/offering-list/moduleOfferingListMutations.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/store/offering-list/moduleOfferingListMutations.js ***!
  \*****************************************************************************/
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
  ADD_OFFERING: function ADD_OFFERING(state, item) {
    state.offerings.unshift(item);
  },
  SET_OFFERINGS: function SET_OFFERINGS(state, offerings) {
    state.offerings = offerings;
  },
  SET_RETAIL: function SET_RETAIL(state, retails) {
    state.retails = retails;
  },
  UPDATE_OFFERING: function UPDATE_OFFERING(state, offering) {
    var offeringIndex = state.offerings.findIndex(function (p) {
      return p.id == client.id;
    });
    Object.assign(state.offerings[offeringIndex], offering);
  },
  REMOVE_ITEM: function REMOVE_ITEM(state, itemId) {
    var ItemIndex = state.offerings.findIndex(function (p) {
      return p.id == itemId;
    });
    state.offerings.splice(ItemIndex, 1);
  },
  REQUEST_ITEM: function REQUEST_ITEM(state, itemId) {
    var ItemIndex = state.offerings.findIndex(function (p) {
      return p.id == itemId;
    });
    state.offerings[ItemIndex].status = 2;
  }
});

/***/ }),

/***/ "./resources/js/src/store/offering-list/moduleOfferingListState.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/store/offering-list/moduleOfferingListState.js ***!
  \*************************************************************************/
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
  offerings: [],
  retails: []
});

/***/ }),

/***/ "./resources/js/src/views/sales/SalesAdd.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/sales/SalesAdd.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SalesAdd_vue_vue_type_template_id_5ac5cb42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true& */ "./resources/js/src/views/sales/SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true&");
/* harmony import */ var _SalesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SalesAdd.vue?vue&type=script&lang=js& */ "./resources/js/src/views/sales/SalesAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true& */ "./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SalesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SalesAdd_vue_vue_type_template_id_5ac5cb42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SalesAdd_vue_vue_type_template_id_5ac5cb42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ac5cb42",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/sales/SalesAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/sales/SalesAdd.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/sales/SalesAdd.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=style&index=0&id=5ac5cb42&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_style_index_0_id_5ac5cb42_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/sales/SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/views/sales/SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_template_id_5ac5cb42_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/sales/SalesAdd.vue?vue&type=template&id=5ac5cb42&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_template_id_5ac5cb42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SalesAdd_vue_vue_type_template_id_5ac5cb42_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);