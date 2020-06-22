(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientAdd.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/client-list/moduleClientList.js */ "./resources/js/src/store/client-list/moduleClientList.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-form-wizard */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.js");
/* harmony import */ var vue_form_wizard__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/axios.js */ "./resources/js/src/axios.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-form-wizard/dist/vue-form-wizard.min.css */ "./node_modules/vue-form-wizard/dist/vue-form-wizard.min.css");
/* harmony import */ var vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_form_wizard_dist_vue_form_wizard_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vee-validate */ "./node_modules/vee-validate/dist/vee-validate.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    first_name: {
      required: "Nombre es requerido",
      alpha: "Nombre solo puede contener caracteres alfabeticos"
    },
    last_name: {
      required: "Apellido es requerido",
      alpha: "Apellido solo puede contener caracteres alfabeticos"
    },
    address_street: {
      required: "Calle es requerido"
    },
    address_number: {
      required: "Numero es requerido"
    },
    address_neighbour: {
      required: "Barrio es requerido"
    },
    address_location: {
      required: "Localidad es requerido"
    },
    address_cp: {
      required: "CP es requerido"
    },
    address_province: {
      required: "Provincia es requerido"
    },
    doc_number: {
      required: "Numero de documento es requerido"
    },
    phone_number: {
      required: "Telefono es requerido"
    },
    cuil_first: {
      required: "Cuil es requerido"
    },
    cuil_second: {
      required: "Cuil es requerido"
    },
    membership_fee: {
      required: "Cuota es requerido"
    },
    bank_name: {
      required: "Banco es requerido"
    },
    bank_number: {
      required: "CBU es requerido"
    },
    company_name: {
      required: "Empresa es requerido"
    },
    company_salary: {
      required: "Ingresos es requerido"
    },
    email: {
      required: "Correo electronico es requerido",
      email: "Por favor, ingrese una dirección de e-mail valida"
    }
  }
}; // register custom messages

vee_validate__WEBPACK_IMPORTED_MODULE_7__["Validator"].localize("en", dict);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      userId: 1,
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
      membershipClass: 1,
      membershipBranch: 1,
      membershipBranches: [],
      membershipFee: "",
      bankInfo: [],
      employInfo: [],
      docTypes: [{
        text: "L.E",
        value: 1
      }, {
        text: "DNI",
        value: 2
      }, {
        text: "CARNET EXT",
        value: 3
      }, {
        text: "RUC",
        value: 4
      }, {
        text: "PASAPORTE",
        value: 5
      }],
      civilStates: [{
        text: "Casado",
        value: 1
      }, {
        text: "soltero",
        value: 2
      }, {
        text: "En convivencia",
        value: 3
      }, {
        text: "viudo",
        value: 4
      }, {
        text: "divorciado",
        value: 5
      }],
      membershipClasses: [{
        text: "particulares",
        value: 1
      }, {
        text: "otros",
        value: 2
      }]
    };
  },
  created: function () {
    var _created = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _this = this;

      var userInfo, tempBranch, today;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!_store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered) {
                this.$store.registerModule("clientList", _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
                _store_client_list_moduleClientList_js__WEBPACK_IMPORTED_MODULE_1__["default"].isRegistered = true;
              }

              userInfo = JSON.parse(localStorage.getItem('userInfo'));
              this.userID = userInfo.uid;
              _context.next = 5;
              return this.$store.dispatch("clientList/fetchBranchItems");

            case 5:
              tempBranch = this.$store.state.clientList.branches;
              this.membershipBranches = [];
              tempBranch.forEach(function (item) {
                var branch = {
                  text: item.name,
                  value: item.id
                };

                _this.membershipBranches.push(branch);

                _this.membershipBranch = item.id;
              });
              today = new Date();
              this.birthDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

            case 10:
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
  methods: {
    addNewData: function addNewData() {
      var info = {
        bankName: "",
        bankNumber: "",
        bankAccount: "",
        bankClient: ""
      };
      this.bankInfo.push(info);
    },
    addNewEmploy: function addNewEmploy() {
      var today = new Date();
      var info = {
        companyName: "",
        addressStreet: "",
        addressNumber: "",
        addressNeighbour: "",
        addressCp: "",
        addressLocation: "",
        addressProvince: "",
        companySalary: "",
        salaryDate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate(),
        nextSalarydate: today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
      };
      this.employInfo.push(info);
    },
    deleteData: function deleteData(id) {
      this.bankInfo.splice(id, 1);
    },
    deleteEmploy: function deleteEmploy(id) {
      this.employInfo.splice(id, 1);
    },
    updateCurrImg: function updateCurrImg(input) {
      var _this2 = this;

      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
          _this2.userImg = e.target.result;
          _this2.file = input.target.files[0];
        };

        reader.readAsDataURL(input.target.files[0]);
      }
    },
    validateStep1: function validateStep1() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3.$validator.validateAll("step-1").then(function (result) {
          if (result) {
            if (_this3.userImg) resolve(true);else reject("correct all values");
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep2: function validateStep2() {
      var _this4 = this;

      return new Promise(function (resolve, reject) {
        _this4.$validator.validateAll("step-2").then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3: function validateStep3() {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        _this5.$validator.validateAll("step-3").then(function (result) {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep4: function validateStep4() {
      var _this6 = this;

      return new Promise(function (resolve, reject) {
        _this6.$validator.validateAll("step-4").then(function (result) {
          if (result) {
            if (_this6.bankInfo.length) resolve(true);else reject("correct all values");
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep5: function validateStep5() {
      var _this7 = this;

      return new Promise(function (resolve, reject) {
        _this7.$validator.validateAll("step-5").then(function (result) {
          if (result) {
            var data = new FormData();
            if (_this7.file) data.append('file', _this7.file);else data.append('avatar', _this7.userImg);
            data.append('user_id', _this7.userId);
            data.append('first_name', _this7.firstName);
            data.append('last_name', _this7.lastName);
            data.append('gender', _this7.gender);
            data.append('email', _this7.email);
            data.append('doc_type', _this7.docType);
            data.append('doc_num', _this7.docNumber);
            data.append('birth_date', _this7.birthDate);
            data.append('cuil_first', _this7.cuilFirst);
            data.append('cuil_second', _this7.cuilSecond);
            data.append('civil_state', _this7.civilState);
            data.append('address_street', _this7.addressStreet);
            data.append('address_number', _this7.addressNumber);
            data.append('address_neighbour', _this7.addressNeighbour);
            data.append('address_location', _this7.addressLocation);
            data.append('address_cp', _this7.addressCp);
            data.append('address_province', _this7.addressProvince);
            data.append('phone_number1', _this7.phoneNumber1);
            data.append('phone_number2', _this7.phoneNumber2);
            data.append('phone_number3', _this7.phoneNumber3);
            data.append('membership_branch', _this7.membershipBranch);
            data.append('membership_class', _this7.membershipClass);
            data.append('membership_fee', _this7.membershipFee);
            data.append('employ_info', JSON.stringify(_this7.employInfo));
            data.append('bank_info', JSON.stringify(_this7.bankInfo));
            _axios_js__WEBPACK_IMPORTED_MODULE_3__["default"].post("/api/client-list/client/add", data, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }).then(function (response) {
              if (response.data) {
                _this7.$router.push("/clients");

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
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_4___default.a,
    FormWizard: vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__["FormWizard"],
    TabContent: vue_form_wizard__WEBPACK_IMPORTED_MODULE_2__["TabContent"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[dir] .img-upload[data-v-0a5d5c55] {\n  margin-top: 2rem;\n}\n[dir] .img-upload .con-img-upload[data-v-0a5d5c55] {\n  padding: 0;\n}\n.img-upload .con-input-upload[data-v-0a5d5c55] {\n  width: 100%;\n}\n[dir] .img-upload .con-input-upload[data-v-0a5d5c55] {\n  margin: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/clients/ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
                  title: "Información de identificación",
                  icon: "feather icon-user",
                  "before-change": _vm.validateStep1
                }
              },
              [
                _c("form", { attrs: { "data-vv-scope": "step-1" } }, [
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/4 w-full mt-5 mb-5" },
                      [
                        _vm.userImg
                          ? [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "img-container w-64 mx-auto flex items-center justify-center"
                                },
                                [
                                  _c("img", {
                                    staticClass: "responsive",
                                    attrs: { src: _vm.userImg, alt: "img" }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "modify-img flex justify-between mt-5"
                                },
                                [
                                  _c("input", {
                                    ref: "updateImgInput",
                                    staticClass: "hidden",
                                    attrs: { type: "file", accept: "image/*" },
                                    on: { change: _vm.updateCurrImg }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "vs-button",
                                    {
                                      staticClass: "mr-4",
                                      attrs: { type: "flat" },
                                      on: {
                                        click: function($event) {
                                          return _vm.$refs.updateImgInput.click()
                                        }
                                      }
                                    },
                                    [_vm._v("Actualizar imagen")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "vs-button",
                                    {
                                      attrs: { type: "flat", color: "#999" },
                                      on: {
                                        click: function($event) {
                                          _vm.userImg = null
                                        }
                                      }
                                    },
                                    [_vm._v("Eliminar imagen")]
                                  )
                                ],
                                1
                              )
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.userImg
                          ? _c(
                              "div",
                              { staticClass: "upload-img mt-5" },
                              [
                                _c("input", {
                                  ref: "uploadImgInput",
                                  staticClass: "hidden",
                                  attrs: { type: "file", accept: "image/*" },
                                  on: { change: _vm.updateCurrImg }
                                }),
                                _vm._v(" "),
                                _c(
                                  "vs-button",
                                  {
                                    on: {
                                      click: function($event) {
                                        return _vm.$refs.uploadImgInput.click()
                                      }
                                    }
                                  },
                                  [_vm._v("Seleccionar Imagen")]
                                ),
                                _vm._v(" "),
                                !_vm.userImg
                                  ? _c(
                                      "span",
                                      { staticClass: "text-danger ml-2" },
                                      [_vm._v("Foto es requerido")]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-5" },
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
                          attrs: { label: "Nombre", name: "first_name" },
                          model: {
                            value: _vm.firstName,
                            callback: function($$v) {
                              _vm.firstName = $$v
                            },
                            expression: "firstName"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.first_name")))
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
                              value: "required|alpha",
                              expression: "'required|alpha'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: { label: "Apellido", name: "last_name" },
                          model: {
                            value: _vm.lastName,
                            callback: function($$v) {
                              _vm.lastName = $$v
                            },
                            expression: "lastName"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.last_name")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Genero (M, F)" },
                            model: {
                              value: _vm.gender,
                              callback: function($$v) {
                                _vm.gender = $$v
                              },
                              expression: "gender"
                            }
                          },
                          [
                            _c("vs-select-item", {
                              key: "1",
                              staticClass: "w-full",
                              attrs: { value: "1", text: "M" }
                            }),
                            _vm._v(" "),
                            _c("vs-select-item", {
                              key: "2",
                              staticClass: "w-full",
                              attrs: { value: "2", text: "F" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/4 w-full mt-5" },
                      [
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Tipo de documento" },
                            model: {
                              value: _vm.docType,
                              callback: function($$v) {
                                _vm.docType = $$v
                              },
                              expression: "docType"
                            }
                          },
                          _vm._l(_vm.docTypes, function(item, index) {
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
                      { staticClass: "vx-col md:w-1/4 w-full mt-5" },
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
                            label: "Numero de documento",
                            name: "doc_number",
                            type: "number"
                          },
                          model: {
                            value: _vm.docNumber,
                            callback: function($$v) {
                              _vm.docNumber = $$v
                            },
                            expression: "docNumber"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.doc_number")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/6 w-full mt-5" },
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
                            label: "CUIL",
                            name: "cuil_first",
                            type: "number"
                          },
                          model: {
                            value: _vm.cuilFirst,
                            callback: function($$v) {
                              _vm.cuilFirst = $$v
                            },
                            expression: "cuilFirst"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.cuil_first")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/6 w-full mt-5" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: { label: " ", disabled: "", type: "number" },
                          model: {
                            value: _vm.docNumber,
                            callback: function($$v) {
                              _vm.docNumber = $$v
                            },
                            expression: "docNumber"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/6 w-full mt-5" },
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
                            label: " ",
                            name: "cuil_second",
                            type: "number"
                          },
                          model: {
                            value: _vm.cuilSecond,
                            callback: function($$v) {
                              _vm.cuilSecond = $$v
                            },
                            expression: "cuilSecond"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-1.cuil_second")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/1 w-full mt-5" },
                      [
                        _c("label", { staticClass: "text-sm" }, [
                          _vm._v("Fecha de nacimiento")
                        ]),
                        _vm._v(" "),
                        _c("flat-pickr", {
                          staticClass: "w-full",
                          attrs: { config: { dateFormat: "Y-m-d" } },
                          model: {
                            value: _vm.birthDate,
                            callback: function($$v) {
                              _vm.birthDate = $$v
                            },
                            expression: "birthDate"
                          }
                        })
                      ],
                      1
                    )
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
                  title: "Datos Personales",
                  icon: "feather icon-info",
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
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Civil state" },
                            model: {
                              value: _vm.civilState,
                              callback: function($$v) {
                                _vm.civilState = $$v
                              },
                              expression: "civilState"
                            }
                          },
                          _vm._l(_vm.civilStates, function(item, index) {
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
                              value: "required|email",
                              expression: "'required|email'"
                            }
                          ],
                          staticClass: "w-full",
                          attrs: {
                            type: "email",
                            label: "Correo electronico",
                            name: "email"
                          },
                          model: {
                            value: _vm.email,
                            callback: function($$v) {
                              _vm.email = $$v
                            },
                            expression: "email"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-2.email")))
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c("h5", { staticClass: "ml-4 mt-10" }, [
                      _vm._v("Dirección")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                          attrs: { label: "Calle", name: "address_street" },
                          model: {
                            value: _vm.addressStreet,
                            callback: function($$v) {
                              _vm.addressStreet = $$v
                            },
                            expression: "addressStreet"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-2.address_street"))
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                            label: "Numero",
                            type: "number",
                            name: "address_number"
                          },
                          model: {
                            value: _vm.addressNumber,
                            callback: function($$v) {
                              _vm.addressNumber = $$v
                            },
                            expression: "addressNumber"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-2.address_number"))
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                          attrs: { label: "Barrio", name: "address_neighbour" },
                          model: {
                            value: _vm.addressNeighbour,
                            callback: function($$v) {
                              _vm.addressNeighbour = $$v
                            },
                            expression: "addressNeighbour"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-2.address_neighbour"))
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                            label: "Localidad",
                            name: "address_location"
                          },
                          model: {
                            value: _vm.addressLocation,
                            callback: function($$v) {
                              _vm.addressLocation = $$v
                            },
                            expression: "addressLocation"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-2.address_location"))
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                          attrs: { label: "CP", name: "address_cp" },
                          model: {
                            value: _vm.addressCp,
                            callback: function($$v) {
                              _vm.addressCp = $$v
                            },
                            expression: "addressCp"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(_vm._s(_vm.errors.first("step-2.address_cp")))
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                            label: "Provincia",
                            name: "address_province"
                          },
                          model: {
                            value: _vm.addressProvince,
                            callback: function($$v) {
                              _vm.addressProvince = $$v
                            },
                            expression: "addressProvince"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-2.address_province"))
                          )
                        ])
                      ],
                      1
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c("h5", { staticClass: "ml-4 mt-10" }, [
                      _vm._v("Telefono")
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "vx-row" }, [
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                          attrs: { label: "Telefono1", name: "phone_number" },
                          model: {
                            value: _vm.phoneNumber1,
                            callback: function($$v) {
                              _vm.phoneNumber1 = $$v
                            },
                            expression: "phoneNumber1"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-2.phone_number"))
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: {
                            label: "Telefono2",
                            type: "number",
                            name: "address_number"
                          },
                          model: {
                            value: _vm.phoneNumber2,
                            callback: function($$v) {
                              _vm.phoneNumber2 = $$v
                            },
                            expression: "phoneNumber2"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "vx-col md:w-1/3 w-full mt-2" },
                      [
                        _c("vs-input", {
                          staticClass: "w-full",
                          attrs: {
                            label: "Telefono3",
                            name: "address_neighbour"
                          },
                          model: {
                            value: _vm.phoneNumber3,
                            callback: function($$v) {
                              _vm.phoneNumber3 = $$v
                            },
                            expression: "phoneNumber3"
                          }
                        })
                      ],
                      1
                    )
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
                  title: "Afiliación",
                  icon: "feather icon-gitlab",
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
                        _c(
                          "vs-select",
                          {
                            staticClass: "w-full select-large",
                            attrs: { label: "Clase" },
                            model: {
                              value: _vm.membershipClass,
                              callback: function($$v) {
                                _vm.membershipClass = $$v
                              },
                              expression: "membershipClass"
                            }
                          },
                          _vm._l(_vm.membershipClasses, function(item, index) {
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
                            attrs: { label: "Sucursal" },
                            model: {
                              value: _vm.membershipBranch,
                              callback: function($$v) {
                                _vm.membershipBranch = $$v
                              },
                              expression: "membershipBranch"
                            }
                          },
                          _vm._l(_vm.membershipBranches, function(item, index) {
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
                            label: "Cuota",
                            type: "number",
                            name: "membership_fee"
                          },
                          model: {
                            value: _vm.membershipFee,
                            callback: function($$v) {
                              _vm.membershipFee = $$v
                            },
                            expression: "membershipFee"
                          }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-danger" }, [
                          _vm._v(
                            _vm._s(_vm.errors.first("step-3.membership_fee"))
                          )
                        ])
                      ],
                      1
                    )
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
                  title: "Datos bancarios",
                  icon: "feather icon-dollar-sign",
                  "before-change": _vm.validateStep4
                }
              },
              [
                _c(
                  "form",
                  { attrs: { "data-vv-scope": "step-4" } },
                  [
                    _c("div", { staticClass: "vx-row" }, [
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
                            [_vm._v("Nuevo")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.bankInfo, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "vx-row border border-primary",
                          staticStyle: {
                            border: "1px solid",
                            "border-radius": "16px",
                            padding: "20px",
                            "margin-bottom": "20px"
                          }
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/4 w-full mt-5" },
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
                                attrs: { label: "Banco", name: "bank_name" },
                                model: {
                                  value: item.bankName,
                                  callback: function($$v) {
                                    _vm.$set(item, "bankName", $$v)
                                  },
                                  expression: "item.bankName"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/4 w-full mt-5" },
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
                                  label: "CBU",
                                  type: "number",
                                  name: "bank_number"
                                },
                                model: {
                                  value: item.bankNumber,
                                  callback: function($$v) {
                                    _vm.$set(item, "bankNumber", $$v)
                                  },
                                  expression: "item.bankNumber"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/6 w-full mt-5" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  label: "Numero de Cuenta",
                                  type: "number",
                                  name: "bank_account"
                                },
                                model: {
                                  value: item.bankAccount,
                                  callback: function($$v) {
                                    _vm.$set(item, "bankAccount", $$v)
                                  },
                                  expression: "item.bankAccount"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/6 w-full mt-5" },
                            [
                              _c("vs-input", {
                                staticClass: "w-full",
                                attrs: {
                                  label: "Numero de Cliente",
                                  type: "number",
                                  name: "bank_client"
                                },
                                model: {
                                  value: item.bankClient,
                                  callback: function($$v) {
                                    _vm.$set(item, "bankClient", $$v)
                                  },
                                  expression: "item.bankClient"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "vx-col md:w-1/12 w-full mt-5" },
                            [
                              _c(
                                "vs-button",
                                {
                                  staticClass: "mr-3 mb-2 mt-5",
                                  on: {
                                    click: function($event) {
                                      $event.stopPropagation()
                                      return _vm.deleteData(index)
                                    }
                                  }
                                },
                                [_vm._v("eliminar")]
                              )
                            ],
                            1
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/4 w-full mt-5" },
                        [
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(_vm._s(_vm.errors.first("step-4.bank_name")))
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-1/4 w-full mt-5" },
                        [
                          _c("span", { staticClass: "text-danger" }, [
                            _vm._v(
                              _vm._s(_vm.errors.first("step-4.bank_number"))
                            )
                          ])
                        ]
                      )
                    ])
                  ],
                  2
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "tab-content",
              {
                staticClass: "mb-5",
                attrs: {
                  title: "Datos de empleador",
                  icon: "feather icon-users",
                  "before-change": _vm.validateStep5
                }
              },
              [
                _c(
                  "form",
                  { attrs: { "data-vv-scope": "step-5" } },
                  [
                    _c("div", { staticClass: "vx-row" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary",
                          on: { click: _vm.addNewEmploy }
                        },
                        [
                          _c("feather-icon", {
                            attrs: { icon: "PlusIcon", svgClasses: "h-4 w-4" }
                          }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "ml-2 text-base text-primary" },
                            [_vm._v("Nuevo")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.employInfo, function(item, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "vx-row border border-primary",
                          staticStyle: {
                            border: "1px solid",
                            "border-radius": "16px",
                            padding: "20px",
                            "margin-bottom": "20px"
                          }
                        },
                        [
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
                                    label: "Empresa",
                                    name: "company_name"
                                  },
                                  model: {
                                    value: item.companyName,
                                    callback: function($$v) {
                                      _vm.$set(item, "companyName", $$v)
                                    },
                                    expression: "item.companyName"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("step-5.company_name")
                                    )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "h5",
                              {
                                staticClass: "ml-4 mt-6",
                                staticStyle: { width: "100%" }
                              },
                              [_vm._v("Dirección")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                                    label: "Calle",
                                    name: "address_street"
                                  },
                                  model: {
                                    value: item.addressStreet,
                                    callback: function($$v) {
                                      _vm.$set(item, "addressStreet", $$v)
                                    },
                                    expression: "item.addressStreet"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("step-5.address_street")
                                    )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                                    label: "Numero",
                                    type: "number",
                                    name: "address_number"
                                  },
                                  model: {
                                    value: item.addressNumber,
                                    callback: function($$v) {
                                      _vm.$set(item, "addressNumber", $$v)
                                    },
                                    expression: "item.addressNumber"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("step-5.address_number")
                                    )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                                    label: "Barrio",
                                    name: "address_neighbour"
                                  },
                                  model: {
                                    value: item.addressNeighbour,
                                    callback: function($$v) {
                                      _vm.$set(item, "addressNeighbour", $$v)
                                    },
                                    expression: "item.addressNeighbour"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "step-5.address_neighbour"
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
                              { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                                    label: "Localidad",
                                    name: "address_location"
                                  },
                                  model: {
                                    value: item.addressLocation,
                                    callback: function($$v) {
                                      _vm.$set(item, "addressLocation", $$v)
                                    },
                                    expression: "item.addressLocation"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "step-5.address_location"
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
                              { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                                  attrs: { label: "CP", name: "address_cp" },
                                  model: {
                                    value: item.addressCp,
                                    callback: function($$v) {
                                      _vm.$set(item, "addressCp", $$v)
                                    },
                                    expression: "item.addressCp"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("step-5.address_cp")
                                    )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/3 w-full mt-2" },
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
                                    label: "Provincia",
                                    name: "address_province"
                                  },
                                  model: {
                                    value: item.addressProvince,
                                    callback: function($$v) {
                                      _vm.$set(item, "addressProvince", $$v)
                                    },
                                    expression: "item.addressProvince"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first(
                                        "step-5.address_province"
                                      )
                                    )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "h5",
                              {
                                staticClass: "ml-4 mt-6",
                                staticStyle: { width: "100%" }
                              },
                              [_vm._v("Ingresos")]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/4 w-full mt-2" },
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
                                    type: "number",
                                    label: "Ingresos",
                                    name: "company_salary"
                                  },
                                  model: {
                                    value: item.companySalary,
                                    callback: function($$v) {
                                      _vm.$set(item, "companySalary", $$v)
                                    },
                                    expression: "item.companySalary"
                                  }
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-danger" }, [
                                  _vm._v(
                                    _vm._s(
                                      _vm.errors.first("step-5.company_salary")
                                    )
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/4 w-full mt-2" },
                              [
                                _c("label", { staticClass: "text-sm" }, [
                                  _vm._v("Fecha de cobro")
                                ]),
                                _vm._v(" "),
                                _c("flat-pickr", {
                                  staticClass: "w-full",
                                  attrs: { config: { dateFormat: "Y-m-d" } },
                                  model: {
                                    value: item.salaryDate,
                                    callback: function($$v) {
                                      _vm.$set(item, "salaryDate", $$v)
                                    },
                                    expression: "item.salaryDate"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "vx-col md:w-1/4 w-full mt-2" },
                              [
                                _c("label", { staticClass: "text-sm" }, [
                                  _vm._v("Fecha proximo cobro")
                                ]),
                                _vm._v(" "),
                                _c("flat-pickr", {
                                  staticClass: "w-full",
                                  attrs: { config: { dateFormat: "Y-m-d" } },
                                  model: {
                                    value: item.nextSalarydate,
                                    callback: function($$v) {
                                      _vm.$set(item, "nextSalarydate", $$v)
                                    },
                                    expression: "item.nextSalarydate"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "vx-col md:w-1/4 w-full mt-3 text-center"
                              },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    staticClass: "mr-3 mb-2 mt-5",
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.deleteEmploy(index)
                                      }
                                    }
                                  },
                                  [_vm._v("eliminar")]
                                )
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    })
                  ],
                  2
                )
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

/***/ "./resources/js/src/views/clients/ClientAdd.vue":
/*!******************************************************!*\
  !*** ./resources/js/src/views/clients/ClientAdd.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClientAdd_vue_vue_type_template_id_0a5d5c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true& */ "./resources/js/src/views/clients/ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true&");
/* harmony import */ var _ClientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ClientAdd.vue?vue&type=script&lang=js& */ "./resources/js/src/views/clients/ClientAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true& */ "./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ClientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ClientAdd_vue_vue_type_template_id_0a5d5c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ClientAdd_vue_vue_type_template_id_0a5d5c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0a5d5c55",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/clients/ClientAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/clients/ClientAdd.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientAdd.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientAdd.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=style&index=0&id=0a5d5c55&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_style_index_0_id_0a5d5c55_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/clients/ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/src/views/clients/ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_template_id_0a5d5c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/clients/ClientAdd.vue?vue&type=template&id=0a5d5c55&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_template_id_0a5d5c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ClientAdd_vue_vue_type_template_id_0a5d5c55_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);