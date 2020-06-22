(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[108],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: {
      required: "Nombre es requerido",
      alpha: "Nombre solo puede contener caracteres alfabeticos"
    },
    description: {
      required: "Description es requerido",
      alpha: "Description solo puede contener caracteres alfabeticos"
    },
    loan_installments: {
      required: "Loan installments es requerido"
    },
    loan_term: {
      required: "Loan term es requerido"
    },
    loan_minimum: {
      required: "Loan minimum amount es requerido"
    },
    loan_maximum: {
      required: "Loan maximum amount es requerido"
    },
    loan_interest: {
      required: "Loan interest rate es requerido"
    },
    retail_price: {
      required: "Retail price es requerido"
    },
    retail_stock: {
      required: "Retail stock es requerido"
    },
    retail_provider: {
      required: "Retail provider es requerido"
    },
    insurance_fee: {
      required: "Insurance fee es requerido"
    },
    trips_destination: {
      required: "Trips destination es requerido"
    },
    trips_provider: {
      required: "Trips provider es requerido"
    },
    trips_price: {
      required: "Trips price es requerido"
    },
    trips_available_seats: {
      required: "Trips available seats es requerido"
    },
    trips_sold_seats: {
      required: "Trips sold seats es requerido"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_4__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userID: 1,
      offeringType: 1,
      name: "",
      description: "",
      minimumRisk: 1,
      loan_installments: "",
      loan_term: "",
      minFlag: false,
      maxFlag: false,
      loan_minimum: "",
      loan_maximum: "",
      loan_interest: "",
      retail_price: "",
      retail_stock: "",
      retail_provider: "",
      insurance_fee: "",
      trips_price: "",
      trips_destination: "",
      trips_provider: "",
      trips_available_seats: "",
      trips_sold_seats: "",
      offeringTypes: [{
        text: "Loan",
        value: 1
      }, {
        text: "Retail",
        value: 2
      }, {
        text: "Insurance",
        value: 3
      }, {
        text: "Trips",
        value: 4
      }],
      minimumRisks: [{
        text: "A",
        value: 1
      }, {
        text: "B",
        value: 2
      }, {
        text: "C",
        value: 3
      }, {
        text: "D",
        value: 4
      }]
    };
  },
  methods: {
    validateStep1: function validateStep1() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.$validator.validateAll("step-1").then(function (result) {
          if (result) {
            resolve(true);
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
            var data = new FormData();
            data.append('user_id', _this2.userID);
            data.append('type', _this2.offeringType);
            data.append('name', _this2.name);
            data.append('description', _this2.description);
            data.append('minimum_risk', _this2.minimumRisk);
            data.append('loan_installment', _this2.loan_installments);
            data.append('loan_term', _this2.loan_term);
            data.append('loan_min_amount', _this2.loan_minimum);
            data.append('loan_max_amount', _this2.loan_maximum);
            data.append('loan_interest_rate', _this2.loan_interest);
            data.append('loan_min_flag', _this2.minFlag);
            data.append('loan_max_flag', _this2.maxFlag);
            _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/offering-list/offering/add", data, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(function (response) {
              if (response.data) {
                _this2.$router.push("/offering");

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
    },
    validateStep3: function validateStep3() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        if (_this3.retail_price != "" && _this3.retail_stock != "" && _this3.retail_provider != "") {
          var data = new FormData();
          data.append('user_id', _this3.userID);
          data.append('type', _this3.offeringType);
          data.append('name', _this3.name);
          data.append('description', _this3.description);
          data.append('minimum_risk', _this3.minimumRisk);
          data.append('retail_price', _this3.retail_price);
          data.append('retail_stock', _this3.retail_stock);
          data.append('retail_provider', _this3.retail_provider);
          _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/offering-list/offering/add", data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (response) {
            if (response.data) {
              _this3.$router.push("/offering");

              resolve(true);
            }
          }).catch(function (error) {
            reject(error);
          });
        } else {
          reject("correct all values");
        }
      });
    },
    validateStep4: function validateStep4() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        if (_this4.insurance_fee != "") {
          var data = new FormData();
          data.append('user_id', _this4.userID);
          data.append('type', _this4.offeringType);
          data.append('name', _this4.name);
          data.append('description', _this4.description);
          data.append('minimum_risk', _this4.minimumRisk);
          data.append('insurance_fee', _this4.insurance_fee);
          _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/offering-list/offering/add", data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (response) {
            if (response.data) {
              _this4.$router.push("/offering");

              resolve(true);
            }
          }).catch(function (error) {
            reject(error);
          });
        } else {
          reject("correct all values");
        }
      });
    },
    validateStep5: function validateStep5() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        if (_this5.trips_destination != "" && _this5.trips_provider != "" && _this5.trips_price != "" && _this5.trips_available_seats != "" && _this5.trips_sold_seats != "") {
          var data = new FormData();
          data.append('user_id', _this5.userID);
          data.append('type', _this5.offeringType);
          data.append('name', _this5.name);
          data.append('description', _this5.description);
          data.append('minimum_risk', _this5.minimumRisk);
          data.append('trips_destination', _this5.trips_destination);
          data.append('trips_provider', _this5.trips_provider);
          data.append('trips_price', _this5.trips_price);
          data.append('trips_available_seats', _this5.trips_available_seats);
          data.append('trips_sold_seats', _this5.trips_sold_seats);
          _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/offering-list/offering/add", data, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (response) {
            if (response.data) {
              _this5.$router.push("/offering");

              resolve(true);
            }
          }).catch(function (error) {
            reject(error);
          });
        } else {
          reject("correct all values");
        }
      });
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var userInfo;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              userInfo = JSON.parse(localStorage.getItem('userInfo'));
              this.userID = userInfo.uid;

            case 2:
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
  components: {
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_1__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .img-upload[data-v-441b011c] {\n  margin-top: 2rem;\n}\n[dir] .img-upload .con-img-upload[data-v-441b011c] {\n  padding: 0;\n}\n.img-upload .con-input-upload[data-v-441b011c] {\n  width: 100%;\n}\n[dir] .img-upload .con-input-upload[data-v-441b011c] {\n  margin: 0;\n}\n.disableCheckbox[data-v-441b011c] {\n  align-self: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
                  title: "Common Information",
                  icon: "feather icon-command",
                  "before-change": _vm.validateStep1
                }
              },
              [
                _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Offering Type" },
                            model: {
                              value: _vm.offeringType,
                              callback: function($$v) {
                                _vm.offeringType = $$v
                              },
                              expression: "offeringType"
                            }
                          },
                          _vm._l(_vm.offeringTypes, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Minimum Risk" },
                            model: {
                              value: _vm.minimumRisk,
                              callback: function($$v) {
                                _vm.minimumRisk = $$v
                              },
                              expression: "minimumRisk"
                            }
                          },
                          _vm._l(_vm.minimumRisks, function(item, index) {
                            return _c("vs-select-item", {
                              key: index,
                              staticClass: "w-full",
                              attrs: { value: item.value, text: item.text }
                            })
                          }),
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|alpha",
                              expression: "'required|alpha'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: { label: "Nombre", name: "name" },
                          model: {
                            value: _vm.name,
                            callback: function($$v) {
                              _vm.name = $$v
                            },
                            expression: "name"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.name")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/2 w-full mt-5" },
                      [
                        _c("vs-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: "required|alpha",
                              expression: "'required|alpha'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: { label: "Description", name: "description" },
                          model: {
                            value: _vm.description,
                            callback: function($$v) {
                              _vm.description = $$v
                            },
                            expression: "description"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.description")))
                        ])
                      ],
                      1
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _vm.offeringType == 1
              ? _c(
                  "tab-content",
                  {
                    staticClass: "mb-5",
                    attrs: {
                      title: "Loan data",
                      icon: "feather icon-minus-square",
                      "before-change": _vm.validateStep2
                    }
                  },
                  [
                    _c("form", { attrs: { "data-vv-scope": "step-2" } }, [
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                label: "Installments",
                                type: "number",
                                name: "loan_installments"
                              },
                              model: {
                                value: _vm.loan_installments,
                                callback: function($$v) {
                                  _vm.loan_installments = $$v
                                },
                                expression: "loan_installments"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("step-2.loan_installments")
                                )
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                label: "Term",
                                type: "number",
                                name: "loan_term"
                              },
                              model: {
                                value: _vm.loan_term,
                                callback: function($$v) {
                                  _vm.loan_term = $$v
                                },
                                expression: "loan_term"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.loan_term"))
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col md:w-2/12 w-full mt-5 disableCheckbox"
                          },
                          [
                            _c(
                              "vs-checkbox",
                              {
                                model: {
                                  value: _vm.minFlag,
                                  callback: function($$v) {
                                    _vm.minFlag = $$v
                                  },
                                  expression: "minFlag"
                                }
                              },
                              [_vm._v("Disable")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-4/12 w-full mt-5" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: _vm.minFlag ? "" : "required",
                                  expression: "minFlag ? '' : 'required'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                label: "Minimum Amount",
                                type: "number",
                                name: "loan_minimum",
                                disabled: _vm.minFlag
                              },
                              model: {
                                value: _vm.loan_minimum,
                                callback: function($$v) {
                                  _vm.loan_minimum = $$v
                                },
                                expression: "loan_minimum"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.loan_minimum"))
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "vx-col md:w-2/12 w-full mt-5 disableCheckbox"
                          },
                          [
                            _c(
                              "vs-checkbox",
                              {
                                model: {
                                  value: _vm.maxFlag,
                                  callback: function($$v) {
                                    _vm.maxFlag = $$v
                                  },
                                  expression: "maxFlag"
                                }
                              },
                              [_vm._v("Disable")]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-4/12 w-full mt-5" },
                          [
                            _c("vs-input", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: _vm.maxFlag ? "" : "required",
                                  expression: "maxFlag ? '' : 'required'"
                                }
                              ],
                              staticClass: "w-full",
                              attrs: {
                                label: "Maximum Amount",
                                type: "number",
                                name: "loan_maximum",
                                disabled: _vm.maxFlag
                              },
                              model: {
                                value: _vm.loan_maximum,
                                callback: function($$v) {
                                  _vm.loan_maximum = $$v
                                },
                                expression: "loan_maximum"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.loan_maximum"))
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
                                label: "Interest rate",
                                type: "number",
                                name: "loan_interest"
                              },
                              model: {
                                value: _vm.loan_interest,
                                callback: function($$v) {
                                  _vm.loan_interest = $$v
                                },
                                expression: "loan_interest"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-2.loan_interest"))
                              )
                            ])
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.offeringType == 2
              ? _c(
                  "tab-content",
                  {
                    staticClass: "mb-5",
                    attrs: {
                      title: "Retail Data",
                      icon: "feather icon-shopping-cart",
                      "before-change": _vm.validateStep3
                    }
                  },
                  [
                    _c("form", { attrs: { "data-vv-scope": "step-3" } }, [
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                label: "Price",
                                name: "retail_price",
                                type: "number"
                              },
                              model: {
                                value: _vm.retail_price,
                                callback: function($$v) {
                                  _vm.retail_price = $$v
                                },
                                expression: "retail_price"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-3.retail_price"))
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                label: "Stock",
                                name: "retail_stock",
                                type: "number"
                              },
                              model: {
                                value: _vm.retail_stock,
                                callback: function($$v) {
                                  _vm.retail_stock = $$v
                                },
                                expression: "retail_stock"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-3.retail_stock"))
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
                                label: "Provider",
                                name: "retail_provider"
                              },
                              model: {
                                value: _vm.retail_provider,
                                callback: function($$v) {
                                  _vm.retail_provider = $$v
                                },
                                expression: "retail_provider"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("step-3.retail_provider")
                                )
                              )
                            ])
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.offeringType == 3
              ? _c(
                  "tab-content",
                  {
                    staticClass: "mb-5",
                    attrs: {
                      title: "Insurance Data",
                      icon: "feather icon-user-check",
                      "before-change": _vm.validateStep4
                    }
                  },
                  [
                    _c("form", { attrs: { "data-vv-scope": "step-4" } }, [
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/1 w-full mt-5" },
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
                                label: "Fee",
                                name: "insurance_fee",
                                type: "number"
                              },
                              model: {
                                value: _vm.insurance_fee,
                                callback: function($$v) {
                                  _vm.insurance_fee = $$v
                                },
                                expression: "insurance_fee"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-4.insurance_fee"))
                              )
                            ])
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.offeringType == 4
              ? _c(
                  "tab-content",
                  {
                    staticClass: "mb-5",
                    attrs: {
                      title: "Trips Data",
                      icon: "feather icon-navigation",
                      "before-change": _vm.validateStep5
                    }
                  },
                  [
                    _c("form", { attrs: { "data-vv-scope": "step-5" } }, [
                      _c("div", { staticClass: "vx-row" }, [
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                label: "Destination",
                                name: "trips_destination"
                              },
                              model: {
                                value: _vm.trips_destination,
                                callback: function($$v) {
                                  _vm.trips_destination = $$v
                                },
                                expression: "trips_destination"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("step-5.trips_destination")
                                )
                              )
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "vx-col md:w-1/2 w-full mt-5" },
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
                                label: "Provider",
                                name: "trips_provider"
                              },
                              model: {
                                value: _vm.trips_provider,
                                callback: function($$v) {
                                  _vm.trips_provider = $$v
                                },
                                expression: "trips_provider"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("step-5.trips_provider")
                                )
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
                                label: "Price",
                                type: "number",
                                name: "trips_price"
                              },
                              model: {
                                value: _vm.trips_price,
                                callback: function($$v) {
                                  _vm.trips_price = $$v
                                },
                                expression: "trips_price"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(_vm.errors.first("step-5.trips_price"))
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
                                label: "Available seats",
                                type: "number",
                                name: "trips_available_seats"
                              },
                              model: {
                                value: _vm.trips_available_seats,
                                callback: function($$v) {
                                  _vm.trips_available_seats = $$v
                                },
                                expression: "trips_available_seats"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "step-5.trips_available_seats"
                                  )
                                )
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
                                label: "Sold seats",
                                type: "number",
                                name: "trips_sold_seats"
                              },
                              model: {
                                value: _vm.trips_sold_seats,
                                callback: function($$v) {
                                  _vm.trips_sold_seats = $$v
                                },
                                expression: "trips_sold_seats"
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-danger" }, [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("step-5.trips_sold_seats")
                                )
                              )
                            ])
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              : _vm._e()
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

/***/ "./resources/js/src/views/offering/OfferingAdd.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingAdd.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OfferingAdd_vue_vue_type_template_id_441b011c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true& */ "./resources/js/src/views/offering/OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true&");
/* harmony import */ var _OfferingAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferingAdd.vue?vue&type=script&lang=js& */ "./resources/js/src/views/offering/OfferingAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true& */ "./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OfferingAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferingAdd_vue_vue_type_template_id_441b011c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OfferingAdd_vue_vue_type_template_id_441b011c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "441b011c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/offering/OfferingAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/offering/OfferingAdd.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingAdd.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=style&index=0&id=441b011c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_style_index_0_id_441b011c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/offering/OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_template_id_441b011c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingAdd.vue?vue&type=template&id=441b011c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_template_id_441b011c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingAdd_vue_vue_type_template_id_441b011c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);