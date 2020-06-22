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
                <td class="font-semibold">
                  <vs-input
                    label="Nombre"
                    v-model="name"
                    class="w-full"
                    name="name"
                    v-validate="'required|alpha'"
                  />
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('name',name)" :disabled="name == ''">Update</vs-button></td>
              </tr>

              <tr>
                <td class="font-semibold">
                  <vs-input
                    label="Description"
                    v-model="description"
                    class="w-full"
                    name="description"
                    v-validate="'required'"
                  />
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('description',description)" :disabled="description == ''">Update</vs-button></td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">
                  <vs-select v-model="minimumRisk" class="w-full select-large" label="Minimum Risk">
                    <vs-select-item
                      :key="index"
                      :value="item.value"
                      :text="item.text"
                      v-for="(item,index) in minimumRisks"
                      class="w-full"
                    />
                  </vs-select>
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('minimum_risk',minimumRisk)" :disabled="description == ''">Update</vs-button></td>
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

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2" style="padding-left:154px;">
            <table>
              <tr>
                <td class="font-semibold">
                  <vs-checkbox v-model="minFlag">Disable</vs-checkbox>
                </td>
                <td>
                  <vs-input
                    label="Minimum Amount"
                    v-model="loan_minimum"
                    class="w-full"
                    type="number"
                    name="loan_minimum"
                    :disabled = minFlag
                  />
                </td>
                <td><vs-button class="ml-20 mr-3 mb-2 mt-6" @click.stop="UpdateField('loan_min_amount',loan_minimum)" :disabled="description == ''">Update</vs-button></td>
              </tr>
              <tr>
                <td class="font-semibold">
                  <vs-checkbox v-model="maxFlag" class="mt-3">Disable</vs-checkbox>
                </td>
                <td>
                  <vs-input
                    label="Maximum Amount"
                    v-model="loan_maximum"
                    class="w-full"
                    type="number"
                    name="loan_maxiimum"
                    :disabled = maxFlag
                  />
                </td>
                <td><vs-button class="ml-20 mr-3 mb-2 mt-6" @click.stop="UpdateField('loan_max_amount',loan_maximum)" :disabled="loan_maximum == '' && !maxFlag">Update</vs-button></td>
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
                <td class="font-semibold">
                  <vs-input
                    label="Price"
                    v-model="retail_price"
                    class="w-full"
                    name="retail_price"
                  />
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('retail_price',retail_price)" :disabled="retail_price == ''">Update</vs-button></td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">
                  <vs-input
                    label="Stock"
                    v-model="retail_stock"
                    class="w-full"
                    name="retail_stock"
                  />
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('retail_stock',retail_stock)" :disabled="retail_stock == ''">Update</vs-button></td>
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
                <td class="font-semibold">
                  <vs-input
                    label="Original Fee"
                    v-model="insurance_fee"
                    class="w-full"
                    name="insurance_fee"
                    disabled
                  />
                </td>
                <td class="font-semibold">
                  <vs-input
                    label="New Fee"
                    v-model="insurance_fee_new"
                    class="w-full"
                    name="insurance_fee"
                    v-on:change="changeFee"
                  />
                </td>
                <td class="font-semibold">
                  <label class="vs-input--label ml-2">Percentage</label>
                  <vs-input-number v-model="insurance_percentage" v-on:change="changePercent"/>
                </td>
                <td>
                    <vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('insurance_fee',insurance_fee_new)" :disabled="insurance_fee_new == ''">Update</vs-button>
                </td>
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
                <td class="font-semibold">
                  <vs-input
                    label="Destination"
                    v-model="trips_destination"
                    class="w-full"
                    name="trips_destination"
                  />
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('trips_destination',trips_destination)" :disabled="trips_destination == ''">Update</vs-button></td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">
                  <vs-input
                    label="Available seats"
                    v-model="trips_available_seats"
                    class="w-full"
                    type="number"
                    name="trips_available_seats"
                  />
                </td>
                <td><vs-button class="ml-5 mr-3 mb-2 mt-6" @click.stop="UpdateField('trips_available_seats',trips_available_seats)" :disabled="trips_available_seats == ''">Update</vs-button></td>
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
      userID: 1,
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
      insurance_fee_new: "",
      insurance_percentage: 0,
      trips_price: "",
      trips_destination: "",
      trips_provider: "",
      trips_available_seats: "",
      trips_sold_seats: "",
      minimumRisks: [
        { text: "A", value: 1 },
        { text: "B", value: 2 },
        { text: "C", value: 3 },
        { text: "D", value: 4 },
      ],
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
    changePercent() {
      this.insurance_fee_new = this.insurance_fee/100 * (100+parseFloat(this.insurance_percentage))
    },
    changeFee() {
      this.insurance_percentage = parseInt((this.insurance_fee_new-this.insurance_fee)/this.insurance_fee*100)
    },
    UpdateField(fieldName, fieldValue) {
      var data = new FormData(); 
      data.append('user_id', this.userID)
      data.append('field_name', fieldName)
      data.append('field_value', fieldValue)
      axios.post("/api/offering-list/offering/update/"+this.id,data, {headers: {'Content-Type': 'multipart/form-data'}})
      .then(response => {
        if (response.data) {
          this.$router.push('/offering/view?id='+this.id)
          resolve(true);
        }
        else {
          reject(false) ;
        }
      })
      .catch(error => {
        reject(error);
      });
    },
  },
  async created() {
    if(!moduleOfferingList.isRegistered) {
      this.$store.registerModule('offeringList', moduleOfferingList)
      moduleOfferingList.isRegistered = true
    }

    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userID = userInfo.uid

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
          this.insurance_fee_new = offeringInfo.insurance_fee
          this.trips_destination = offeringInfo.trips_destination
          this.trips_provider = offeringInfo.trips_provider
          this.trips_price = offeringInfo.trips_price
          this.trips_available_seats = offeringInfo.trips_available_seats
          this.trips_sold_seats = offeringInfo.trips_sold_seats
          this.minFlag = offeringInfo.loan_min_flag ? true : false
          this.maxFlag = offeringInfo.loan_max_flag ? true : false
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
