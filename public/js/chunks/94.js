(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingView.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/offering-list/moduleOfferingList.js */ "./resources/js/src/store/offering-list/moduleOfferingList.js");
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");


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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      id: 1,
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
      trips_sold_seats: ""
    };
  },
  methods: {
    getTypeText: function getTypeText(type) {
      if (type == '1') return "Loan";
      if (type == '2') return "Retail";
      if (type == '3') return "Insurance";
      if (type == '4') return "Trips";
      return "Loan";
    },
    getMinimumRiskText: function getMinimumRiskText(type) {
      if (type == '1') return "A";
      if (type == '2') return "B";
      if (type == '3') return "C";
      if (type == '4') return "D";
      return "A";
    },
    EditOffering: function EditOffering() {
      this.$router.push('/offering/edit?id=' + this.id);
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
                this.$store.registerModule('offeringList', _store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                _store_offering_list_moduleOfferingList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
              }

              _context.next = 3;
              return _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get("/api/offering-list/offering-view/" + this.$route.query.id).then(function (response) {
                if (response.data) {
                  var offeringInfo = response.data[0];
                  _this.id = offeringInfo.id;
                  _this.offeringType = offeringInfo.type;
                  _this.name = offeringInfo.name;
                  _this.description = offeringInfo.description;
                  _this.minimumRisk = offeringInfo.minimum_risk;
                  _this.loan_installments = offeringInfo.loan_installment;
                  _this.loan_term = offeringInfo.loan_term;
                  _this.loan_minimum = offeringInfo.loan_min_amount;
                  _this.loan_maximum = offeringInfo.loan_max_amount;
                  _this.loan_interest = offeringInfo.loan_interest_rate;
                  _this.retail_price = offeringInfo.retail_price;
                  _this.retail_stock = offeringInfo.retail_stock;
                  _this.retail_provider = offeringInfo.retail_provider;
                  _this.insurance_fee = offeringInfo.insurance_fee;
                  _this.trips_destination = offeringInfo.trips_destination;
                  _this.trips_provider = offeringInfo.trips_provider;
                  _this.trips_price = offeringInfo.trips_price;
                  _this.trips_available_seats = offeringInfo.trips_available_seats;
                  _this.trips_sold_seats = offeringInfo.trips_sold_seats;
                  _this.minFlag = offeringInfo.loan_min_flag;
                  _this.maxFlag = offeringInfo.loan_max_flag;
                }
              }).catch(function (error) {});

            case 3:
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
  }()
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#avatar-col {\n  width: 10rem;\n}\n.font-semibold {\n  color: rgba(var(--vs-primary), 1);\n}\n#page-user-view table td {\n  vertical-align: top;\n  min-width: 200px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1 {\n    width: calc(100% - 12rem) !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=template&id=5a545e8c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/offering/OfferingView.vue?vue&type=template&id=5a545e8c& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "page-user-view" } }, [
    _c(
      "div",
      { attrs: { id: "user-data" } },
      [
        _vm.$store.state.AppActiveUser.userRole != "vendor"
          ? _c("div", { staticClass: "flex flex-wrap-reverse items-center" }, [
              _c(
                "div",
                {
                  staticClass:
                    "p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",
                  on: { click: _vm.EditOffering }
                },
                [
                  _c("feather-icon", {
                    attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                  }),
                  _vm._v(" "),
                  _c("span", { staticClass: "ml-2 text-base text-primary" }, [
                    _vm._v("Edit offering")
                  ])
                ],
                1
              )
            ])
          : _vm._e(),
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
                      attrs: { svgClasses: "w-6 h-6", icon: "CommandIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Common Information")]
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
                      _vm._v("Type")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.getTypeText(this.offeringType)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Name")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(this.name))])
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
                    _c("td", [_vm._v(_vm._s(this.description))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Minimum risk")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.getMinimumRiskText(this.minimumRisk)))
                    ])
                  ])
                ])
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _vm.offeringType == 1
          ? _c("vx-card", { staticClass: "mb-base" }, [
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
                            icon: "MinusSquareIcon"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-medium text-lg leading-none" },
                          [_vm._v("Loan data")]
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
                          _vm._v("Installments")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.loan_installments))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Term")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.loan_term))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Interest rate")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.loan_interest))])
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
                          _vm._v("Minimum amount")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              !this.minFlag ? this.loan_minimum : "disabled"
                            )
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Maximum amount")
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(
                              !this.maxFlag ? this.loan_maximum : "disabled"
                            )
                          )
                        ])
                      ])
                    ])
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.offeringType == 2
          ? _c("vx-card", { staticClass: "mb-base" }, [
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
                            icon: "ShoppingCartIcon"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-medium text-lg leading-none" },
                          [_vm._v("Retail Data")]
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
                          _vm._v("Price")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.retail_price))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Stock")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.retail_stock))])
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
                          _vm._v("Provider")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.retail_provider))])
                      ])
                    ])
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.offeringType == 3
          ? _c("vx-card", { staticClass: "mb-base" }, [
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
                            icon: "UserCheckIcon"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-medium text-lg leading-none" },
                          [_vm._v("Insurance Data")]
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
                          _vm._v("Fee")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.insurance_fee))])
                      ])
                    ])
                  ]
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm.offeringType == 4
          ? _c("vx-card", { staticClass: "mb-base" }, [
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
                            icon: "NavigationIcon"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "font-medium text-lg leading-none" },
                          [_vm._v("Trips Data")]
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
                          _vm._v("Destination")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.trips_destination))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Provider")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.trips_provider))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Price")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.trips_price))])
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
                          _vm._v("Available Seats")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.trips_available_seats))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("td", { staticClass: "font-semibold" }, [
                          _vm._v("Sold seats")
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(this.trips_sold_seats))])
                      ])
                    ])
                  ]
                )
              ])
            ])
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./resources/js/src/views/offering/OfferingView.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingView.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OfferingView_vue_vue_type_template_id_5a545e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OfferingView.vue?vue&type=template&id=5a545e8c& */ "./resources/js/src/views/offering/OfferingView.vue?vue&type=template&id=5a545e8c&");
/* harmony import */ var _OfferingView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OfferingView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/offering/OfferingView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OfferingView.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OfferingView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OfferingView_vue_vue_type_template_id_5a545e8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OfferingView_vue_vue_type_template_id_5a545e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/offering/OfferingView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/offering/OfferingView.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingView.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/offering/OfferingView.vue?vue&type=template&id=5a545e8c&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/offering/OfferingView.vue?vue&type=template&id=5a545e8c& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_template_id_5a545e8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./OfferingView.vue?vue&type=template&id=5a545e8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/offering/OfferingView.vue?vue&type=template&id=5a545e8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_template_id_5a545e8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OfferingView_vue_vue_type_template_id_5a545e8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);