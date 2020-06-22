<!-- =========================================================================================
  File Name: FormWizardValidation.vue
  Description: Form wizard with validation
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vx-card title="Formulario de alta">
    <div class="mt-0">
      <form-wizard
        color="rgba(var(--vs-primary), 1)"
        errorColor="rgba(var(--vs-danger), 1)"
        :title="null"
        :subtitle="null"
        finishButtonText="Guardar"
        nextButtonText="Siguiente"
        backButtonText="Atras"
      >
        <tab-content
          title="Información de identificación"
          class="mb-5"
          icon="feather icon-user"
          :before-change="validateStep1"
        >
          <!-- tab 1 content -->
          <form data-vv-scope="step-1">
            <div class="vx-row">
              <div class="vx-col md:w-1/4 w-full mt-5 mb-5">
                <template v-if="userImg">

                  <!-- Image Container -->
                  <div class="img-container w-64 mx-auto flex items-center justify-center">
                    <img :src="userImg" alt="img" class="responsive">
                  </div>

                  <!-- Image upload Buttons -->
                  <div class="modify-img flex justify-between mt-5">
                    <input type="file" class="hidden" ref="updateImgInput" @change="updateCurrImg" accept="image/*">
                    <vs-button class="mr-4" type="flat" @click="$refs.updateImgInput.click()">Actualizar imagen</vs-button>
                    <vs-button type="flat" color="#999" @click="userImg = null">Eliminar imagen</vs-button>
                  </div>
                </template>

                <div class="upload-img mt-5" v-if="!userImg">
                  <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
                  <vs-button @click="$refs.uploadImgInput.click()">Seleccionar Imagen</vs-button>
                  <span class="text-danger ml-2" v-if="!userImg">Foto es requerido</span>
                </div>
              </div>
            </div>

            <div class="vx-row">
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Nombre"
                  v-model="firstName"
                  class="w-full"
                  name="first_name"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{ errors.first('step-1.first_name') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Apellido"
                  v-model="lastName"
                  class="w-full"
                  name="last_name"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{ errors.first('step-1.last_name') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-select v-model="gender" class="w-full select-large" label="Genero (M, F)">
                  <vs-select-item key="1" value="1" text="M" class="w-full" />
                  <vs-select-item key="2" value="2" text="F" class="w-full" />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-select v-model="docType" class="w-full select-large" label="Tipo de documento">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in docTypes"
                    class="w-full"
                  />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Numero de documento"
                  v-model="docNumber"
                  class="w-full"
                  name="doc_number"
                  type="number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-1.doc_number') }}</span>
              </div>
              <div class="vx-col md:w-1/6 w-full mt-5">
                <vs-input
                  label="CUIL"
                  v-model="cuilFirst"
                  class="w-full"
                  name="cuil_first"
                  type="number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-1.cuil_first') }}</span>
              </div>
              <div class="vx-col md:w-1/6 w-full mt-5">
                <vs-input label=" " disabled v-model="docNumber" class="w-full" type="number" />
              </div>
              <div class="vx-col md:w-1/6 w-full mt-5">
                <vs-input
                  label=" "
                  v-model="cuilSecond"
                  class="w-full"
                  name="cuil_second"
                  type="number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-1.cuil_second') }}</span>
              </div>
              <div class="vx-col md:w-1/1 w-full mt-5">
                <label class="text-sm">Fecha de nacimiento</label>
                <flat-pickr v-model="birthDate" :config="{ dateFormat: 'Y-m-d' }" class="w-full" />
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 2 content -->
        <tab-content
          title="Datos Personales"
          class="mb-5"
          icon="feather icon-info"
          :before-change="validateStep2"
        >
          <form data-vv-scope="step-2">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-select v-model="civilState" class="w-full select-large" label="Civil state">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in civilStates"
                    class="w-full"
                  />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  type="email"
                  label="Correo electronico"
                  v-model="email"
                  class="w-full"
                  name="email"
                  v-validate="'required|email'"
                />
                <span class="text-danger">{{ errors.first('step-2.email') }}</span>
              </div>
            </div>
            <div class="vx-row">
              <h5 class="ml-4 mt-10">Dirección</h5>
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Calle"
                  v-model="addressStreet"
                  class="w-full"
                  name="address_street"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.address_street') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Numero"
                  v-model="addressNumber"
                  class="w-full"
                  type="number"
                  name="address_number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.address_number') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Barrio"
                  v-model="addressNeighbour"
                  class="w-full"
                  name="address_neighbour"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.address_neighbour') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Localidad"
                  v-model="addressLocation"
                  class="w-full"
                  name="address_location"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.address_location') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="CP"
                  v-model="addressCp"
                  class="w-full"
                  name="address_cp"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.address_cp') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Provincia"
                  v-model="addressProvince"
                  class="w-full"
                  name="address_province"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.address_province') }}</span>
              </div>
            </div>
            <div class="vx-row">
              <h5 class="ml-4 mt-10">Telefono</h5>
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Telefono1"
                  v-model="phoneNumber1"
                  class="w-full"
                  name="phone_number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.phone_number') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Telefono2"
                  v-model="phoneNumber2"
                  class="w-full"
                  type="number"
                  name="address_number"
                />
              </div>
              <div class="vx-col md:w-1/3 w-full mt-2">
                <vs-input
                  label="Telefono3"
                  v-model="phoneNumber3"
                  class="w-full"
                  name="address_neighbour"
                />
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content
          title="Afiliación"
          class="mb-5"
          icon="feather icon-gitlab"
          :before-change="validateStep3"
        >
          <form data-vv-scope="step-3">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-select v-model="membershipClass" class="w-full select-large" label="Clase">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in membershipClasses"
                    class="w-full"
                  />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-select v-model="membershipBranch" class="w-full select-large" label="Sucursal">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in membershipBranches"
                    class="w-full"
                  />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/1 w-full mt-2">
                <vs-input
                  label="Cuota"
                  v-model="membershipFee"
                  class="w-full"
                  type="number"
                  name="membership_fee"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-3.membership_fee') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 4 content -->
        <tab-content
          title="Datos bancarios"
          class="mb-5"
          icon="feather icon-dollar-sign"
          :before-change="validateStep4"
        >
          <form data-vv-scope="step-4">
            <div class="vx-row">
              <div
                class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary"
                @click="addNewData"
              >
                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-primary">Nuevo</span>
              </div>
            </div>
            <div class="vx-row border border-primary" :key="index" v-for="(item,index) in bankInfo" style="border: 1px solid;border-radius: 16px;padding: 20px; margin-bottom: 20px;">
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="Banco"
                  v-model="item.bankName"
                  class="w-full"
                  name="bank_name"
                  v-validate="'required'"
                />
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <vs-input
                  label="CBU"
                  v-model="item.bankNumber"
                  class="w-full"
                  type="number"
                  name="bank_number"
                  v-validate="'required'"
                />
              </div>
              <div class="vx-col md:w-1/6 w-full mt-5">
                <vs-input
                  label="Numero de Cuenta"
                  v-model="item.bankAccount"
                  class="w-full"
                  type="number"
                  name="bank_account"
                />
              </div>
              <div class="vx-col md:w-1/6 w-full mt-5">
                <vs-input
                  label="Numero de Cliente"
                  v-model="item.bankClient"
                  class="w-full"
                  type="number"
                  name="bank_client"
                />
              </div>
              <div class="vx-col md:w-1/12 w-full mt-5">
                <vs-button class="mr-3 mb-2 mt-5" @click.stop="deleteData(index)">eliminar</vs-button>
              </div>
            </div>
            <div class="vx-row">
              <div class="vx-col md:w-1/4 w-full mt-5">
                <span class="text-danger">{{ errors.first('step-4.bank_name') }}</span>
              </div>
              <div class="vx-col md:w-1/4 w-full mt-5">
                <span class="text-danger">{{ errors.first('step-4.bank_number') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 5 content -->
        <tab-content
          title="Datos de empleador"
          class="mb-5"
          icon="feather icon-users"
          :before-change="validateStep5"
        >
          <form data-vv-scope="step-5">
            <div class="vx-row">
              <div
                class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary"
                @click="addNewEmploy"
              >
                <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
                <span class="ml-2 text-base text-primary">Nuevo</span>
              </div>
            </div>
            <div
              class="vx-row border border-primary"
              style="border: 1px solid;border-radius: 16px;padding: 20px; margin-bottom: 20px;"
              :key="index"
              v-for="(item,index) in employInfo"
            >
              <div class="vx-row">
                <div class="vx-col md:w-1/1 w-full mt-5">
                  <vs-input
                    label="Empresa"
                    v-model="item.companyName"
                    class="w-full"
                    name="company_name"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.company_name') }}</span>
                </div>
                <h5 class="ml-4 mt-6" style="width:100%;">Dirección</h5>
                <div class="vx-col md:w-1/3 w-full mt-2">
                  <vs-input
                    label="Calle"
                    v-model="item.addressStreet"
                    class="w-full"
                    name="address_street"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.address_street') }}</span>
                </div>
                <div class="vx-col md:w-1/3 w-full mt-2">
                  <vs-input
                    label="Numero"
                    v-model="item.addressNumber"
                    class="w-full"
                    type="number"
                    name="address_number"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.address_number') }}</span>
                </div>
                <div class="vx-col md:w-1/3 w-full mt-2">
                  <vs-input
                    label="Barrio"
                    v-model="item.addressNeighbour"
                    class="w-full"
                    name="address_neighbour"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.address_neighbour') }}</span>
                </div>
                <div class="vx-col md:w-1/3 w-full mt-2">
                  <vs-input
                    label="Localidad"
                    v-model="item.addressLocation"
                    class="w-full"
                    name="address_location"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.address_location') }}</span>
                </div>
                <div class="vx-col md:w-1/3 w-full mt-2">
                  <vs-input
                    label="CP"
                    v-model="item.addressCp"
                    class="w-full"
                    name="address_cp"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.address_cp') }}</span>
                </div>
                <div class="vx-col md:w-1/3 w-full mt-2">
                  <vs-input
                    label="Provincia"
                    v-model="item.addressProvince"
                    class="w-full"
                    name="address_province"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.address_province') }}</span>
                </div>
                <h5 class="ml-4 mt-6" style="width:100%;">Ingresos</h5>
                <div class="vx-col md:w-1/4 w-full mt-2">
                  <vs-input
                    type="number"
                    label="Ingresos"
                    v-model="item.companySalary"
                    class="w-full"
                    name="company_salary"
                    v-validate="'required'"
                  />
                  <span class="text-danger">{{ errors.first('step-5.company_salary') }}</span>
                </div>
                <div class="vx-col md:w-1/4 w-full mt-2">
                  <label class="text-sm">Fecha de cobro</label>
                  <flat-pickr
                    v-model="item.salaryDate"
                    :config="{ dateFormat: 'Y-m-d' }"
                    class="w-full"
                  />
                </div>
                <div class="vx-col md:w-1/4 w-full mt-2">
                  <label class="text-sm">Fecha proximo cobro</label>
                  <flat-pickr
                    v-model="item.nextSalarydate"
                    :config="{ dateFormat: 'Y-m-d' }"
                    class="w-full"
                  />
                </div>
                <div class="vx-col md:w-1/4 w-full mt-3 text-center">
                  <vs-button class="mr-3 mb-2 mt-5" @click.stop="deleteEmploy(index)">eliminar</vs-button>
                </div>
              </div>
            </div>
          </form>
        </tab-content>
      </form-wizard>
    </div>
  </vx-card>
</template>

<script>
import moduleClientList from "@/store/client-list/moduleClientList.js";
import { FormWizard, TabContent } from "vue-form-wizard";
import axios from "@/axios.js";
import flatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
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
    },
  }
};

// register custom messages
Validator.localize("en", dict);

export default {
  data() {
    return {
      userId : 1 ,
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
      docTypes: [
        { text: "L.E", value: 1 },
        { text: "DNI", value: 2 },
        { text: "CARNET EXT", value: 3 },
        { text: "RUC", value: 4 },
        { text: "PASAPORTE", value: 5 }
      ],
      civilStates: [
        { text: "Casado", value: 1 },
        { text: "soltero", value: 2 },
        { text: "En convivencia", value: 3 },
        { text: "viudo", value: 4 },
        { text: "divorciado", value: 5 }
      ],
      membershipClasses: [
        { text: "particulares", value: 1 },
        { text: "otros", value: 2 }
      ]
    };
  },

  async created() {
    if (!moduleClientList.isRegistered) {
      this.$store.registerModule("clientList", moduleClientList);
      moduleClientList.isRegistered = true;
    }
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userID = userInfo.uid
    await this.$store.dispatch("clientList/fetchBranchItems");
    var tempBranch = this.$store.state.clientList.branches;
    this.membershipBranches = [];
    tempBranch.forEach(item => {
      var branch = { text: item.name, value: item.id };
      this.membershipBranches.push(branch);
      this.membershipBranch = item.id;
    });
    var today = new Date();
    this.birthDate =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
  },

  methods: {
    addNewData() {
      var info = {
        bankName: "",
        bankNumber: "",
        bankAccount: "",
        bankClient: ""
      };
      this.bankInfo.push(info);
    },
    addNewEmploy() {
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
        salaryDate:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate(),
        nextSalarydate:
          today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
      };
      this.employInfo.push(info);
    },
    deleteData(id) {
      this.bankInfo.splice(id, 1);
    },
    deleteEmploy(id) {
      this.employInfo.splice(id, 1);
    },
    updateCurrImg(input) {
      if (input.target.files && input.target.files[0]) {
        var reader = new FileReader()
        reader.onload = e => {
          this.userImg = e.target.result
          this.file = input.target.files[0]
        }
        reader.readAsDataURL(input.target.files[0])
      }
    },
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-1").then(result => {
          if (result) {
            if(this.userImg)
              resolve(true)
            else
              reject("correct all values")
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep2() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-2").then(result => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep3() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-3").then(result => {
          if (result) {
            resolve(true);
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep4() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-4").then(result => {
          if (result) {
            if (this.bankInfo.length) resolve(true);
            else reject("correct all values");
          } else {
            reject("correct all values");
          }
        });
      });
    },
    validateStep5() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-5").then(result => {
          if (result) {
            var data = new FormData(); 
            if(this.file)
              data.append('file', this.file)
            else
              data.append('avatar', this.userImg)
            data.append('user_id', this.userId)
            data.append('first_name', this.firstName)
            data.append('last_name', this.lastName)
            data.append('gender', this.gender)
            data.append('email', this.email)
            data.append('doc_type', this.docType)
            data.append('doc_num', this.docNumber)
            data.append('birth_date', this.birthDate)
            data.append('cuil_first', this.cuilFirst)
            data.append('cuil_second', this.cuilSecond)
            data.append('civil_state', this.civilState)
            data.append('address_street', this.addressStreet)
            data.append('address_number', this.addressNumber)
            data.append('address_neighbour', this.addressNeighbour)
            data.append('address_location', this.addressLocation)
            data.append('address_cp', this.addressCp)
            data.append('address_province', this.addressProvince)
            data.append('phone_number1', this.phoneNumber1)
            data.append('phone_number2', this.phoneNumber2)
            data.append('phone_number3', this.phoneNumber3)
            data.append('membership_branch', this.membershipBranch)
            data.append('membership_class', this.membershipClass)
            data.append('membership_fee', this.membershipFee)
            data.append('employ_info', JSON.stringify(this.employInfo))
            data.append('bank_info', JSON.stringify(this.bankInfo))
            axios.post("/api/client-list/client/add",data, {headers: {'Content-Type': 'multipart/form-data'}})
              .then(response => {
                if (response.data) {
                  this.$router.push("/clients");
                  resolve(true);
                }
              })
              .catch(error => {
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
    flatPickr,
    FormWizard,
    TabContent
  }
};
</script>

<style lang="scss" scoped>
  .img-upload {
    margin-top: 2rem;

    .con-img-upload {
      padding: 0;
    }

    .con-input-upload {
      width: 100%;
      margin: 0;
    }
  }
</style>
