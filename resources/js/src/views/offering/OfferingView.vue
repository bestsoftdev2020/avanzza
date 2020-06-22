<!-- =========================================================================================
  File Name: UserView.vue
  Description: User View page
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="page-user-view">
    <div id="user-data">
      <div class="flex flex-wrap-reverse items-center" v-if="$store.state.AppActiveUser.userRole != 'vendor'">
        <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="EditOffering">
            <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
            <span class="ml-2 text-base text-primary">Edit offering</span>
        </div>
      </div>
      <vx-card class="mb-base">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="CommandIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Common Information</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
            <table>
              <tr>
                <td class="font-semibold">Type</td>
                <td>{{ getTypeText(this.offeringType) }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Name</td>
                <td>{{ this.name }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Description</td>
                <td>{{ this.description }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Minimum risk</td>
                <td>{{ getMinimumRiskText(this.minimumRisk) }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
        </div>
      </vx-card>

      <vx-card class="mb-base" v-if="offeringType == 1">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="MinusSquareIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Loan data</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
            <table>
              <tr>
                <td class="font-semibold">Installments</td>
                <td>{{ this.loan_installments }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Term</td>
                <td>{{ this.loan_term }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Interest rate</td>
                <td>{{ this.loan_interest }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Minimum amount</td>
                <td>{{ !this.minFlag ? this.loan_minimum : "disabled"}}</td>
              </tr>
              <tr>
                <td class="font-semibold">Maximum amount</td>
                <td>{{ !this.maxFlag ? this.loan_maximum : "disabled"}}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
        </div>
      </vx-card>

      <vx-card class="mb-base" v-if="offeringType == 2">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="ShoppingCartIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Retail Data</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
            <table>
              <tr>
                <td class="font-semibold">Price</td>
                <td>{{ this.retail_price }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Stock</td>
                <td>{{ this.retail_stock }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Provider</td>
                <td>{{ this.retail_provider }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
        </div>
      </vx-card>

      <vx-card class="mb-base" v-if="offeringType == 3">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="UserCheckIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Insurance Data</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
            <table>
              <tr>
                <td class="font-semibold">Fee</td>
                <td>{{ this.insurance_fee }}</td>
              </tr>
            </table>
          </div>
        </div>
      </vx-card>

      <vx-card class="mb-base" v-if="offeringType == 4">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="NavigationIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Trips Data</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:154px;">
            <table>
              <tr>
                <td class="font-semibold">Destination</td>
                <td>{{ this.trips_destination }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Provider</td>
                <td>{{ this.trips_provider }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Price</td>
                <td>{{ this.trips_price }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Available Seats</td>
                <td>{{ this.trips_available_seats }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Sold seats</td>
                <td>{{ this.trips_sold_seats }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import moduleOfferingList from "@/store/offering-list/moduleOfferingList.js"
import axios from "@/axios.js";

export default {
  data() {
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
      trips_sold_seats: "",
    };
  },

  methods: {
    getTypeText(type) {
      if(type == '1') return "Loan"
      if(type == '2') return "Retail"
      if(type == '3') return "Insurance"
      if(type == '4') return "Trips"
      return "Loan"
    },
    getMinimumRiskText(type) {
      if(type == '1') return "A"
      if(type == '2') return "B"
      if(type == '3') return "C"
      if(type == '4') return "D"
      return "A"
    },
    EditOffering() {
      this.$router.push('/offering/edit?id='+this.id)
    },
  },
  async created() {
    if(!moduleOfferingList.isRegistered) {
      this.$store.registerModule('offeringList', moduleOfferingList)
      moduleOfferingList.isRegistered = true
    }

    await axios.get("/api/offering-list/offering-view/" + this.$route.query.id)
      .then(response => {
        if (response.data) {
          var offeringInfo = response.data[0]
          this.id = offeringInfo.id
          this.offeringType = offeringInfo.type
          this.name = offeringInfo.name
          this.description = offeringInfo.description
          this.minimumRisk = offeringInfo.minimum_risk
          this.loan_installments = offeringInfo.loan_installment 
          this.loan_term = offeringInfo.loan_term
          this.loan_minimum = offeringInfo.loan_min_amount
          this.loan_maximum = offeringInfo.loan_max_amount
          this.loan_interest = offeringInfo.loan_interest_rate
          this.retail_price = offeringInfo.retail_price
          this.retail_stock = offeringInfo.retail_stock
          this.retail_provider = offeringInfo.retail_provider
          this.insurance_fee = offeringInfo.insurance_fee
          this.trips_destination = offeringInfo.trips_destination
          this.trips_provider = offeringInfo.trips_provider
          this.trips_price = offeringInfo.trips_price
          this.trips_available_seats = offeringInfo.trips_available_seats
          this.trips_sold_seats = offeringInfo.trips_sold_seats
          this.minFlag = offeringInfo.loan_min_flag
          this.maxFlag = offeringInfo.loan_max_flag
        }
      })
      .catch(error => {});
  }
};
</script>

<style lang="scss">
#avatar-col {
  width: 10rem;
}

.font-semibold {
    color: rgba(var(--vs-primary), 1);;
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

// #account-info-col-1 {
//   // flex-grow: 1;
//   width: 30rem !important;
//   @media screen and (min-width:1200px) {
//     & {
//       flex-grow: unset !important;
//     }
//   }
// }

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
