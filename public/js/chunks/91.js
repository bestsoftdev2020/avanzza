(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientView.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/client-list/moduleClientList.js */ "./resources/js/src/store/client-list/moduleClientList.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      firstName: "",
      lastName: "",
      userImg: null,
      file: null,
      gender: 1,
      email: "",
      docType: 1,
      docNumber: "",
      cuilFirst: "",
      cuilSecond: "",
      birthDate: "",
      civilState: 1,
      addressStreet: "",
      addressNumber: "",
      addressNeighbour: "",
      addressLocation: "",
      addressCp: "",
      addressProvince: "",
      phoneNumber1: "",
      phoneNumber2: "",
      phoneNumber3: "",
      membershipClass: "",
      membershipBranch: 1,
      membershipFee: 0,
      bankInfo: [],
      employInfo: []
    };
  },
  methods: {
    getGender: function getGender(id) {
      if (id === 1) return "M";else return "F";
    },
    getDoctype: function getDoctype(id) {
      if (id === 1) return "L.E";else if (id === 2) return "DNI";else if (id === 3) return "CARNET EXT";else if (id === 4) return "RUC";else if (id === 5) return "PASAPORTE";
    },
    getCivilstate: function getCivilstate(id) {
      if (id === 1) return "Casado";else if (id === 2) return "soltero";else if (id === 3) return "En convivencia";else if (id === 4) return "viudo";else if (id === 5) return "divorciado";
    },
    getMembershipclass: function getMembershipclass(id) {
      if (id === 1) return "particulares";else if (id === 2) return "otros";
    }
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
                this.$store.registerModule("clientList", _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
              }

              _context.next = 3;
              return _axios_js__WEBPACK_IMPORTED_MODULE_2__["default"].get("/api/client-list/client-view/" + this.$route.query.id).then(function (response) {
                if (response.data) {
                  var clientInfo = response.data[0];
                  var bankInfo = response.data[1];
                  var employInfo = response.data[2];
                  _this.firstName = clientInfo.first_name;
                  _this.lastName = clientInfo.last_name;
                  _this.gender = clientInfo.gender;
                  _this.email = clientInfo.email;
                  _this.docType = clientInfo.doc_type;
                  _this.docNumber = clientInfo.doc_num;
                  _this.cuilFirst = clientInfo.cuil_first;
                  _this.cuilSecond = clientInfo.cuil_last;
                  _this.birthDate = clientInfo.birth_date;
                  _this.salaryDate = clientInfo.salary_date;
                  _this.nextSalarydate = clientInfo.next_salary_date;
                  _this.civilState = clientInfo.civil_state;
                  _this.addressStreet = clientInfo.address_street;
                  _this.addressNumber = clientInfo.address_number;
                  _this.addressNeighbour = clientInfo.address_neighbour;
                  _this.addressLocation = clientInfo.address_location;
                  _this.addressCp = clientInfo.address_cp;
                  _this.addressProvince = clientInfo.address_province;
                  _this.eaddressStreet = clientInfo.eaddress_street;
                  _this.eaddressNumber = clientInfo.eaddress_number;
                  _this.eaddressNeighbour = clientInfo.eaddress_neighbour;
                  _this.eaddressLocation = clientInfo.eaddress_location;
                  _this.eaddressCp = clientInfo.eaddress_cp;
                  _this.eaddressProvince = clientInfo.eaddress_province;
                  _this.phoneNumber1 = clientInfo.phone_number1;
                  _this.phoneNumber2 = clientInfo.phone_number2;
                  _this.phoneNumber3 = clientInfo.phone_number3;
                  _this.membershipClass = clientInfo.membership_class;
                  _this.membershipBranch = clientInfo.membership_branch;
                  _this.membershipFee = clientInfo.membership_fee;
                  _this.companySalary = clientInfo.profit;
                  _this.companyName = clientInfo.employ_company;
                  _this.userImg = clientInfo.avatar, _this.file = null, bankInfo.forEach(function (item) {
                    var info = {
                      bankName: item.bank_name,
                      bankNumber: item.bank_number,
                      bankAccount: item.bank_account,
                      bankClient: item.bank_client
                    };

                    _this.bankInfo.push(info);
                  });
                  employInfo.forEach(function (item) {
                    var info = {
                      companyName: item.company_name,
                      addressStreet: item.address_street,
                      addressNumber: item.address_number,
                      addressNeighbour: item.address_neighbour,
                      addressCp: item.address_cp,
                      addressLocation: item.address_location,
                      addressProvince: item.address_province,
                      companySalary: item.profit,
                      salaryDate: item.salary_date,
                      nextSalarydate: item.next_salary_date
                    };

                    _this.employInfo.push(info);
                  });
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#avatar-col {\n  width: 10rem;\n}\n.font-semibold {\n  color: rgba(var(--vs-primary), 1);\n}\n#page-user-view table td {\n  vertical-align: top;\n  min-width: 200px;\n  word-break: break-all;\n}\n[dir] #page-user-view table td {\n  padding-bottom: 0.8rem;\n}\n@media screen and (max-width: 370px) {\n#page-user-view table:not(.permissions-table) td {\n    display: block;\n}\n}\n@media screen and (min-width: 1201px) and (max-width: 1211px), only screen and (min-width: 636px) and (max-width: 991px) {\n#account-info-col-1 {\n    width: calc(100% - 12rem) !important;\n}\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=template&id=564246be&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientView.vue?vue&type=template&id=564246be& ***!
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
  return _c("div", { attrs: { id: "page-user-view" } }, [
    _c(
      "div",
      { attrs: { id: "user-data" } },
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
                      attrs: { svgClasses: "w-6 h-6", icon: "UserIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Información de identificación")]
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
            _c("div", { staticClass: "vx-col", attrs: { id: "avatar-col" } }, [
              _c("div", { staticClass: "img-container mb-4" }, [
                _c("img", {
                  staticClass: "rounded w-full",
                  attrs: { src: _vm.userImg }
                })
              ])
            ]),
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
                    _c("td", [_vm._v(_vm._s(_vm.firstName))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Apellido")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.lastName))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Genero (M, F)")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.getGender(_vm.gender)))])
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
                      _vm._v("Tipo de documento")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.getDoctype(_vm.docType)))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Numero de documento")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.docNumber))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("CUIL")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(
                          _vm.cuilFirst +
                            "-" +
                            _vm.docNumber +
                            "-" +
                            _vm.cuilSecond
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Fecha de nacimiento")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.birthDate))])
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
                      attrs: { svgClasses: "w-6 h-6", icon: "InfoIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Datos Personales")]
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
                      _vm._v("Civil state")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(_vm._s(_vm.getCivilstate(_vm.civilState)))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Correo electronico")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.email))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Telefono1")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.phoneNumber1))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Telefono2")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.phoneNumber2))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Telefono3")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.phoneNumber3))])
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
                      _vm._v("Calle")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.addressStreet))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Numero")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.addressNumber))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Barrio")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.addressNeighbour))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Localidad")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.addressLocation))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [_vm._v("CP")]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.addressCp))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Provincia")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.addressProvince))])
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
                      attrs: { svgClasses: "w-6 h-6", icon: "GitlabIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Afiliación")]
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
                      _vm._v("Clase")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        _vm._s(_vm.getMembershipclass(_vm.membershipClass))
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Sucursal")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.membershipBranch))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c("td", { staticClass: "font-semibold" }, [
                      _vm._v("Cuota")
                    ]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.membershipFee))])
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
                      attrs: { svgClasses: "w-6 h-6", icon: "DollarSignIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Datos bancarios")]
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
                _c(
                  "table",
                  [
                    _c("tr", [
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("ID")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Banco")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("CBU")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Numero de Cuenta")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Numero de Cliente")
                      ])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.bankInfo, function(item, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(index + 1))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.bankName))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.bankNumber))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.bankAccount))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(item.bankClient))])
                      ])
                    })
                  ],
                  2
                )
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
                      attrs: { svgClasses: "w-6 h-6", icon: "UsersIcon" }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "font-medium text-lg leading-none" },
                      [_vm._v("Datos de empleador")]
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
                staticStyle: { "padding-left": "138px" },
                attrs: { id: "account-info-col-1" }
              },
              _vm._l(_vm.employInfo, function(item, index) {
                return _c(
                  "table",
                  {
                    key: index,
                    staticStyle: {
                      border: "1px solid",
                      "border-radius": "17px",
                      padding: "10px 20px",
                      "border-color": "#28717f",
                      "margin-bottom": "20px"
                    }
                  },
                  [
                    _c("tr", [
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("ID")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Empresa")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Ingresos")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Fecha de cobro")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Fecha proximo cobro")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(index + 1))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.companyName))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.companySalary))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.salaryDate))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.nextSalarydate))])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Calle")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Numero")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Barrio")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Localidad")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("CP")
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "font-semibold" }, [
                        _vm._v("Provincia")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("td", [_vm._v(_vm._s(item.addressStreet))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.addressNumber))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.addressNeighbour))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.addressLocation))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.addressCp))]),
                      _vm._v(" "),
                      _c("td", [_vm._v(_vm._s(item.addressProvince))])
                    ])
                  ]
                )
              }),
              0
            )
          ])
        ])
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

/***/ "./resources/js/src/views/clients/ClientView.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/clients/ClientView.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientView_vue_vue_type_template_id_564246be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientView.vue?vue&type=template&id=564246be& */ "./resources/js/src/views/clients/ClientView.vue?vue&type=template&id=564246be&");
/* harmony import */ var _ClientView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/clients/ClientView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientView.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ClientView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientView_vue_vue_type_template_id_564246be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientView_vue_vue_type_template_id_564246be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/clients/ClientView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/clients/ClientView.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/clients/ClientView.vue?vue&type=template&id=564246be&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientView.vue?vue&type=template&id=564246be& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_template_id_564246be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientView.vue?vue&type=template&id=564246be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientView.vue?vue&type=template&id=564246be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_template_id_564246be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientView_vue_vue_type_template_id_564246be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);