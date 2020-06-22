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
        <!-- tab 1 content -->
        <tab-content
          title="Choose offering"
          class="mb-5"
          icon="feather icon-info"
          :before-change="validateStep1"
        >
          <form data-vv-scope="step-1">
            <vs-table
              ref="table_offering"
              v-model="selected_offering"
              pagination
              :max-items="itemsPerPageOffering"
              search
              :data="offerings"
            >
              <div
                slot="header"
                class="flex flex-wrap-reverse items-center flex-grow justify-between"
              >
                <!-- ITEMS PER PAGE -->
                <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
                  <div
                    class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                  >
                    <span
                      class="mr-2"
                    >{{ currentPageOffering * itemsPerPageOffering - (itemsPerPageOffering - 1) }} - {{ offerings.length - currentPageOffering * itemsPerPageOffering > 0 ? currentPageOffering * itemsPerPageOffering : offerings.length }} of {{ queriedItemsOffering }}</span>
                    <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                  </div>
                  <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
                  <vs-dropdown-menu>
                    <vs-dropdown-item @click="itemsPerPageOffering=4">
                      <span>4</span>
                    </vs-dropdown-item>
                    <vs-dropdown-item @click="itemsPerPageOffering=10">
                      <span>10</span>
                    </vs-dropdown-item>
                    <vs-dropdown-item @click="itemsPerPageOffering=15">
                      <span>15</span>
                    </vs-dropdown-item>
                    <vs-dropdown-item @click="itemsPerPageOffering=20">
                      <span>20</span>
                    </vs-dropdown-item>
                  </vs-dropdown-menu>
                </vs-dropdown>
              </div>

              <template slot="thead">
                <vs-th>ID</vs-th>
                <vs-th sort-key="type">Type</vs-th>
                <vs-th sort-key="name">Name</vs-th>
                <vs-th sort-key="description">Description</vs-th>
                <vs-th sort-key="minimum_risk">Minimum Risk</vs-th>
              </template>

              <template slot-scope="{data}">
                <tbody>
                  <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
                    <vs-td>
                      <p class="product-name font-medium truncate">{{ tr.id }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="product-name font-medium truncate">{{ getTypeText(tr.type) }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="product-name font-medium truncate">{{ tr.name }}</p>
                    </vs-td>

                    <vs-td>
                      <p class="product-price">{{ tr.description }}</p>
                    </vs-td>

                    <vs-td>
                      <p
                        class="product-name font-medium truncate"
                      >{{ getMinimumRiskText(tr.minimum_risk) }}</p>
                    </vs-td>
                  </vs-tr>
                </tbody>
              </template>
            </vs-table>
          </form>
        </tab-content>

        <!-- tab 2 content -->
        <tab-content
          title="Input Values"
          class="mb-5"
          icon="feather icon-gitlab"
          :before-change="validateStep2"
        >
          <form data-vv-scope="step-2">
            <div class="vx-row">
              <div class="vx-col md:w-1/1 w-full mt-2" v-if="this.selected_offering.type == 1">
                <vs-input
                  label="Loan Amount"
                  v-model="loan_amount"
                  class="w-full"
                  type="number"
                  name="loan_amount"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.loan_amount') }}</span>
              </div>
              <div class="vx-col md:w-1/1 w-full mt-2" v-if="this.selected_offering.type == 4">
                <vs-input
                  label="Amount of seats"
                  v-model="seats_amount"
                  class="w-full"
                  type="number"
                  name="seats_amount"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.seats_amount') }}</span>
              </div>
              <div class="vx-col md:w-1/1 w-full mt-2" v-if="this.selected_offering.type == 2">
                <vs-input
                  label="Amount of retail"
                  v-model="retail_amount"
                  class="w-full"
                  type="number"
                  name="retail_amount"
                  v-validate="'required'"
                />
                <span class="text-danger">{{ errors.first('step-2.retail_amount') }}</span>
              </div>
            </div>
          </form>
        </tab-content>

        <!-- tab 3 content -->
        <tab-content
          title="Confirm Step"
          class="mb-5"
          icon="feather icon-check-circle"
          :before-change="validateStep3"
        >
          <form data-vv-scope="step-3">
            <div id="page-user-view">
              <vx-card class="mb-base">
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <div class="flex items-end px-3">
                      <feather-icon svgClasses="w-6 h-6" icon="UserIcon" class="mr-2" />
                      <span class="font-medium text-lg leading-none">Client Information</span>
                    </div>
                    <vs-divider />
                  </div>
                </div>

                <div class="vx-row">
                  <!-- Avatar Col -->
                  <div class="vx-col" id="avatar-col">
                    <div class="img-container mb-4">
                      <img :src="this.selected.avatar" class="rounded w-full" />
                    </div>
                  </div>

                  <!-- Information - Col 1 -->
                  <div class="vx-col flex-1" id="account-info-col-1">
                    <table>
                      <tr>
                        <td class="font-semibold">Nombre</td>
                        <td>{{ this.selected.first_name }}</td>
                      </tr>
                      <tr>
                        <td class="font-semibold">Apellido</td>
                        <td>{{ this.selected.last_name }}</td>
                      </tr>
                    </table>
                  </div>

                  <div class="vx-col flex-1" id="account-info-col-2">
                    <table>
                      <tr>
                        <td class="font-semibold">Gender</td>
                        <td>{{ getGender(this.selected.gender) }}</td>
                      </tr>
                      <tr>
                        <td class="font-semibold">Email</td>
                        <td>{{ this.selected.email }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </vx-card>

              <vx-card class="mb-base">
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <div class="flex items-end px-3">
                      <feather-icon svgClasses="w-6 h-6" icon="InfoIcon" class="mr-2" />
                      <span class="font-medium text-lg leading-none">Offering Information</span>
                    </div>
                    <vs-divider />
                  </div>
                </div>

                <div class="vx-row">
                  <!-- Information - Col 1 -->
                  <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
                    <table>
                      <tr>
                        <td class="font-semibold">ID</td>
                        <td>{{ this.selected_offering.id }}</td>
                      </tr>
                      <tr>
                        <td class="font-semibold">Type</td>
                        <td>{{ getTypeText(this.selected_offering.type) }}</td>
                      </tr>
                    </table>
                  </div>

                  <div class="vx-col flex-1" id="account-info-col-2">
                    <table>
                      <tr>
                        <td class="font-semibold">Description</td>
                        <td>{{ this.selected_offering.description }}</td>
                      </tr>
                      <tr>
                        <td class="font-semibold">Minimum Risk</td>
                        <td>{{ getMinimumRiskText(this.selected_offering.minimum_risk) }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </vx-card>

              <vx-card class="mb-base">
                <div class="vx-row">
                  <div class="vx-col w-full">
                    <div class="flex items-end px-3">
                      <feather-icon svgClasses="w-6 h-6" icon="GitlabIcon" class="mr-2" />
                      <span class="font-medium text-lg leading-none">Input Values</span>
                    </div>
                    <vs-divider />
                  </div>
                </div>

                <div class="vx-row">
                  <!-- Information - Col 1 -->
                  <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
                    <table>
                      <tr v-if="this.selected_offering.type == 1">
                        <td class="font-semibold">Loan Amount</td>
                        <td>{{ this.loan_amount }}</td>
                      </tr>
                      <tr v-if="this.selected_offering.type == 2">
                        <td class="font-semibold">Retail Amount</td>
                        <td>{{ this.retail_amount }}</td>
                      </tr>
                      <tr v-if="this.selected_offering.type == 4">
                        <td class="font-semibold">Seats Amount</td>
                        <td>{{ this.seats_amount }}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </vx-card>
            </div>
          </form>
        </tab-content>
      </form-wizard>
    </div>
  </vx-card>
</template>

<script>
import moduleClientList from "@/store/client-list/moduleClientList.js";
import moduleOfferingList from "@/store/offering-list/moduleOfferingList.js";
import { FormWizard, TabContent } from "vue-form-wizard";
import axios from "@/axios.js";
import "vue-form-wizard/dist/vue-form-wizard.min.css";

// For custom error message
import { Validator } from "vee-validate";
const dict = {
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
};

// register custom messages
Validator.localize("en", dict);

export default {
  data() {
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
      retail_amount: 0,
    };
  },

  computed: {
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }
      return 0;
    },
    currentPageOffering() {
      if (this.isMountedOffering) {
        return this.$refs.table_offering.currentx;
      }
      return 0;
    },
    clients() {
      return this.$store.state.clientList.clients;
    },
    queriedItems() {
      return this.$refs.table
        ? this.$refs.table.queriedResults.length
        : this.clients.length;
    },
    currentPageOffering() {
      if (this.isMountedOffering) {
        return this.$refs.table_offering.currentx;
      }
      return 0;
    },
    offerings() {
      return this.$store.state.offeringList.offerings;
    },
    queriedItemsOffering() {
      return this.$refs.table_offering
        ? this.$refs.table_offering.queriedResults.length
        : this.offerings.length;
    }
  },

  methods: {
    getGender(id) {
      if (id === 1) return "M";
      else return "F";
    },
    getTypeText(type) {
      if (type == "1") return "Loan";
      if (type == "2") return "Retail";
      if (type == "3") return "Insurance";
      if (type == "4") return "Trips";
      return "Loan";
    },
    getMinimumRiskText(type) {
      if (type == "1") return "A";
      if (type == "2") return "B";
      if (type == "3") return "C";
      if (type == "4") return "D";
      return "A";
    },
    validateStep1() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("step-1").then(result => {
          if (result) {
            if (this.selected_offering.id) resolve(true);
            else reject("correct all values");
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
            var data = new FormData();
            data.append("user_id", this.userId);
            data.append("client_id", this.selected.id);
            data.append("offer_id", this.selected_offering.id);
            data.append("loan_amount", this.loan_amount);
            data.append("retail_amount", this.retail_amount);
            data.append("seats_amount", this.seats_amount);
            axios.post("/api/sales-list/sales/add", data, {
                headers: { "Content-Type": "multipart/form-data" }
              })
              .then(response => {
                if (response.data) {
                  this.$router.push("/sales?id="+response.data);
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
  async created() {
    if (!moduleOfferingList.isRegistered) {
      this.$store.registerModule("offeringList", moduleOfferingList);
      moduleOfferingList.isRegistered = true;
    }
    this.$store.dispatch("offeringList/fetchOfferingListItems");

    if (!moduleClientList.isRegistered) {
      this.$store.registerModule("clientList", moduleClientList);
      moduleClientList.isRegistered = true;
    }
    await this.$store.dispatch("clientList/fetchClientListItems");

    let tempClients = this.$store.state.clientList.clients
    tempClients.forEach((element) => {
      if(element.id == this.$route.query.id)
        this.selected = element
    });

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.userID = userInfo.uid;
  },

  mounted() {
    this.isMounted = true;
    this.isMountedOffering = true;
  },

  components: {
    FormWizard,
    TabContent
  }
};
</script>

<style lang="scss" scoped>
#avatar-col {
  width: 10rem;
}
.font-semibold {
    color: rgba(var(--vs-primary), 1);;
}


.vs-con-table {
  .product-name {
    max-width: 23rem;
  }

  .vs-table--header {
    display: flex;
    flex-wrap: wrap-reverse;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    > span {
      display: flex;
      flex-grow: 1;
    }

    .vs-table--search {
      padding-top: 0;

      .vs-table--search-input {
        padding: 0.9rem 2.5rem;
        font-size: 1rem;

        & + i {
          left: 1rem;
        }

        &:focus + i {
          left: 1rem;
        }
      }
    }
  }

  .vs-table {
    border-collapse: separate;
    border-spacing: 0 1.3rem;
    padding: 0 1rem;

    tr {
      box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);
      td {
        padding: 10px;
        &:first-child {
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        }
        &:last-child {
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        }
        &.img-container {
          // width: 1rem;
          // background: #fff;

          span {
            display: flex;
            justify-content: flex-start;
          }

          .product-img {
            height: 60px;
          }
        }
      }
      td.td-check {
        padding: 20px !important;
      }
    }
  }

  .vs-table--thead {
    th {
      padding-top: 0;
      padding-bottom: 0;

      .vs-table-text {
        text-transform: uppercase;
        font-weight: 600;
      }
    }
    th.td-check {
      padding: 0 15px !important;
    }
    tr {
      background: none;
      box-shadow: none;
    }
  }

  .vs-table--pagination {
    justify-content: center;
  }
}

#page-user-view {
  table {
    td {
      vertical-align: top;
      min-width: 200px;
      padding-bottom: 0.8rem;
      word-break: break-all;
    }

    &:not(.permissions-table) {
      td {
        @media screen and (max-width: 370px) {
          display: block;
        }
      }
    }
  }
}

@media screen and (min-width: 1201px) and (max-width: 1211px),
  only screen and (min-width: 636px) and (max-width: 991px) {
  #account-info-col-1 {
    width: calc(100% - 12rem) !important;
  }

  // #account-manage-buttons {
  //   width: 12rem !important;
  //   flex-direction: column;

  //   > button {
  //     margin-right: 0 !important;
  //     margin-bottom: 1rem;
  //   }
  // }
}
</style>
