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
          title="Common Information"
          class="mb-5"
          icon="feather icon-command"
          :before-change="validateStep1"
        >
          <!-- tab 1 content -->
          <form data-vv-scope="step-1">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-select v-model="offeringType" class="w-full select-large" label="Offering Type">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in offeringTypes"
                    class="w-full"
                  />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-select v-model="minimumRisk" class="w-full select-large" label="Minimum Risk">
                  <vs-select-item
                    :key="index"
                    :value="item.value"
                    :text="item.text"
                    v-for="(item,index) in minimumRisks"
                    class="w-full"
                  />
                </vs-select>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Nombre"
                  v-model="name"
                  class="w-full"
                  name="name"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{ errors.first('step-1.name') }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Description"
                  v-model="description"
                  class="w-full"
                  name="description"
                  v-validate="'required|alpha'"
                />
                <span class="text-danger">{{ errors.first('step-1.description') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 2 content -->
        <tab-content
          title="Loan data"
          class="mb-5"
          icon="feather icon-minus-square"
          :before-change="validateStep2"
          v-if="offeringType == 1"
        >
          <form data-vv-scope="step-2">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Installments"
                  v-model="loan_installments"
                  class="w-full"
                  type="number"
                  name="loan_installments"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.loan_installments') }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Term"
                  v-model="loan_term"
                  class="w-full"
                  type="number"
                  name="loan_term"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.loan_term') }}</span>
              </div>
              <div class="vx-col md:w-2/12 w-full mt-5 disableCheckbox">
                <vs-checkbox v-model="minFlag">Disable</vs-checkbox>
              </div>
              <div class="vx-col md:w-4/12 w-full mt-5">
                <vs-input
                  label="Minimum Amount"
                  v-model="loan_minimum"
                  class="w-full"
                  type="number"
                  name="loan_minimum"
                  v-validate="minFlag ? '' : 'required'"
                  :disabled = minFlag
                />
                <span class="text-danger">{{ errors.first('step-2.loan_minimum') }}</span>
              </div>
              <div class="vx-col md:w-2/12 w-full mt-5 disableCheckbox">
                <vs-checkbox v-model="maxFlag">Disable</vs-checkbox>
              </div>
              <div class="vx-col md:w-4/12 w-full mt-5">
                <vs-input
                  label="Maximum Amount"
                  v-model="loan_maximum"
                  class="w-full"
                  type="number"
                  name="loan_maximum"
                  v-validate="maxFlag ? '' : 'required'"
                  :disabled = maxFlag
                />
                <span class="text-danger">{{ errors.first('step-2.loan_maximum') }}</span>
              </div>
              <div class="vx-col md:w-1/1 w-full mt-5">
                <vs-input
                  label="Interest rate"
                  v-model="loan_interest"
                  class="w-full"
                  type="number"
                  name="loan_interest"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.loan_interest') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content
          title="Retail Data"
          class="mb-5"
          icon="feather icon-shopping-cart"
          :before-change="validateStep3"
          v-if="offeringType == 2"
        >
          <form data-vv-scope="step-3">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Price"
                  v-model="retail_price"
                  class="w-full"
                  name="retail_price"
                  type="number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-3.retail_price') }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Stock"
                  v-model="retail_stock"
                  class="w-full"
                  name="retail_stock"
                  type="number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-3.retail_stock') }}</span>
              </div>
              <div class="vx-col md:w-1/1 w-full mt-5">
                <vs-input
                  label="Provider"
                  v-model="retail_provider"
                  class="w-full"
                  name="retail_provider"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-3.retail_provider') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 4 content -->
        <tab-content
          title="Insurance Data"
          class="mb-5"
          icon="feather icon-user-check"
          :before-change="validateStep4"
          v-if="offeringType == 3"
        >
          <form data-vv-scope="step-4">
            <div class="vx-row">
              <div class="vx-col md:w-1/1 w-full mt-5">
                <vs-input
                  label="Fee"
                  v-model="insurance_fee"
                  class="w-full"
                  name="insurance_fee"
                  type="number"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-4.insurance_fee') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 5 content -->
        <tab-content
          title="Trips Data"
          class="mb-5"
          icon="feather icon-navigation"
          :before-change="validateStep5"
          v-if="offeringType == 4"
        >
          <form data-vv-scope="step-5">
            <div class="vx-row">
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Destination"
                  v-model="trips_destination"
                  class="w-full"
                  name="trips_destination"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-5.trips_destination') }}</span>
              </div>
              <div class="vx-col md:w-1/2 w-full mt-5">
                <vs-input
                  label="Provider"
                  v-model="trips_provider"
                  class="w-full"
                  name="trips_provider"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-5.trips_provider') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Price"
                  v-model="trips_price"
                  class="w-full"
                  type="number"
                  name="trips_price"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-5.trips_price') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Available seats"
                  v-model="trips_available_seats"
                  class="w-full"
                  type="number"
                  name="trips_available_seats"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-5.trips_available_seats') }}</span>
              </div>
              <div class="vx-col md:w-1/3 w-full mt-5">
                <vs-input
                  label="Sold seats"
                  v-model="trips_sold_seats"
                  class="w-full"
                  type="number"
                  name="trips_sold_seats"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-5.trips_sold_seats') }}</span>
              </div>
            </div>
          </form>
        </tab-content>
      </form-wizard>
    </div>
  </vx-card>
</template>

<script>
import { FormWizard, TabContent } from "vue-form-wizard";
import axios from "@/axios.js";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
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
    },
  }
};

// register custom messages
Validator.localize("en", dict);

export default {
  data() {
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
      offeringTypes: [
        { text: "Loan", value: 1 },
        { text: "Retail", value: 2 },
        { text: "Insurance", value: 3 },
        { text: "Trips", value: 4 },
      ],
      minimumRisks: [
        { text: "A", value: 1 },
        { text: "B", value: 2 },
        { text: "C", value: 3 },
        { text: "D", value: 4 },
      ],
    };
  },

  methods: {
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-1").then(result => {
          if (result) {
            resolve(true)
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
            var data = new FormData(); 
            data.append('user_id', this.userID)
            data.append('type', this.offeringType)
            data.append('name', this.name)
            data.append('description', this.description)
            data.append('minimum_risk', this.minimumRisk)
            data.append('loan_installment', this.loan_installments)
            data.append('loan_term', this.loan_term)
            data.append('loan_min_amount', this.loan_minimum)
            data.append('loan_max_amount', this.loan_maximum)
            data.append('loan_interest_rate', this.loan_interest)
            data.append('loan_min_flag', this.minFlag)
            data.append('loan_max_flag', this.maxFlag)
            axios.post("/api/offering-list/offering/add",data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(response => {
              if (response.data) {
                this.$router.push("/offering");
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
    },
    validateStep3() {
      return new Promise((resolve, reject) => {
        if(this.retail_price != "" && this.retail_stock != "" && this.retail_provider != "") {
          var data = new FormData(); 
          data.append('user_id', this.userID)
          data.append('type', this.offeringType)
          data.append('name', this.name)
          data.append('description', this.description)
          data.append('minimum_risk', this.minimumRisk)
          data.append('retail_price', this.retail_price)
          data.append('retail_stock', this.retail_stock)
          data.append('retail_provider', this.retail_provider)
          axios.post("/api/offering-list/offering/add",data, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(response => {
            if (response.data) {
              this.$router.push("/offering");
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
    },
    validateStep4() {
      return new Promise((resolve, reject) => {
        if(this.insurance_fee != "") {
          var data = new FormData(); 
          data.append('user_id', this.userID)
          data.append('type', this.offeringType)
          data.append('name', this.name)
          data.append('description', this.description)
          data.append('minimum_risk', this.minimumRisk)
          data.append('insurance_fee', this.insurance_fee)
          axios.post("/api/offering-list/offering/add",data, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(response => {
            if (response.data) {
              this.$router.push("/offering");
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
    },
    validateStep5() {
      return new Promise((resolve, reject) => {
        if(this.trips_destination != "" && this.trips_provider != "" && this.trips_price != "" && this.trips_available_seats != "" && this.trips_sold_seats != "") {
          var data = new FormData(); 
          data.append('user_id', this.userID)
          data.append('type', this.offeringType)
          data.append('name', this.name)
          data.append('description', this.description)
          data.append('minimum_risk', this.minimumRisk)
          data.append('trips_destination', this.trips_destination)
          data.append('trips_provider', this.trips_provider)
          data.append('trips_price', this.trips_price)
          data.append('trips_available_seats', this.trips_available_seats)
          data.append('trips_sold_seats', this.trips_sold_seats)
          axios.post("/api/offering-list/offering/add",data, {headers: {'Content-Type': 'multipart/form-data'}})
          .then(response => {
            if (response.data) {
              this.$router.push("/offering");
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
    }
  },
  async created() {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userID = userInfo.uid
  },
  components: {
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

  .disableCheckbox {
    align-self: center;
  }
</style>
