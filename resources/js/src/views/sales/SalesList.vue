<!-- =========================================================================================
  File Name: userListThumbView.vue
  Description: Data List - Thumb View
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
  <div id="client-list-view" class="data-list-container">
    <vs-table ref="table" v-model="selected" pagination :max-items="itemsPerPage" search :data="sales">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Nuevo sales</span>
          </div>
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ sales.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : sales.length }} of {{ queriedItems }}</span>
            <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
          </div>
          <!-- <vs-button class="btn-drop" type="line" color="primary" icon-pack="feather" icon="icon-chevron-down"></vs-button> -->
          <vs-dropdown-menu>

            <vs-dropdown-item @click="itemsPerPage=4">
              <span>4</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=10">
              <span>10</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=15">
              <span>15</span>
            </vs-dropdown-item>
            <vs-dropdown-item @click="itemsPerPage=20">
              <span>20</span>
            </vs-dropdown-item>
          </vs-dropdown-menu>
        </vs-dropdown>
      </div>

      <template slot="thead">
        <vs-th>Imagen de perfil</vs-th>
        <vs-th sort-key="created_at">Requested Date</vs-th>
        <vs-th sort-key="id">Client ID</vs-th>
        <vs-th sort-key="firstname">First Name</vs-th>
        <vs-th sort-key="lastname">Last Name</vs-th>
        <vs-th sort-key="type">Offer Type</vs-th>
        <vs-th sort-key="description">Offer Description</vs-th>
        <vs-th sort-key="minimum_risk">Minimum Risk</vs-th>
        <vs-th>acciones</vs-th>
      </template>

      <template slot-scope="{data}">
        <tbody>
          <vs-tr :data="tr" :key="indextr" v-for="(tr, indextr) in data">
            <vs-td class="img-container">
              <template v-if="tr.avatar">
                <img :src="tr.avatar" class="product-img" />
              </template>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.created_at }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.client_id }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.first_name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.last_name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-price font-medium truncate">{{ getTypeText(tr.type) }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.description }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ getMinimumRiskText(tr.minimum_risk) }}</p>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)" v-if="$store.state.AppActiveUser.userRole=='sales_manager'"/>
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
  </div>
</template>

<script>
import moduleSalesList from "@/store/sales-list/moduleSalesList.js"
import axios from "@/axios.js"

export default {
  components: {
  },
  data() {
    return {
      userID: 1,
      selected: [],
      itemsPerPage: 4,
      isMounted: false,
      popupActive: false,
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    sales() {
      return this.$store.state.salesList.sales
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.sales.length
    },
  },
  methods: {
    addNewData() {
      this.$router.push('/sales/add?id='+this.$route.query.id)
    },
    deleteData(id) {
      this.$store.dispatch("offeringList/removeItem", {id:id, user_id: this.userID}).catch(err => { console.error(err) })
    },
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
  },
  created() {
    if(!moduleSalesList.isRegistered) {
      this.$store.registerModule('salesList', moduleSalesList)
      moduleSalesList.isRegistered = true
    }
    this.$store.dispatch("salesList/fetchSalesListItems",[this.$route.query.id])
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userID = userInfo.uid
  },
  mounted() {
    this.isMounted = true;
  },
}
</script>

<style lang="scss">
.con-vs-popup .vs-popup {
  width: 700px;
}
#client-list-view {
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

      .vs-table--search{
        padding-top: 0;

        .vs-table--search-input {
          padding: 0.9rem 2.5rem;
          font-size: 1rem;

          &+i {
            left: 1rem;
          }

          &:focus+i {
            left: 1rem;
          }
        }
      }
    }

    .vs-table {
      border-collapse: separate;
      border-spacing: 0 1.3rem;
      padding: 0 1rem;


      tr{
          box-shadow: 0 4px 20px 0 rgba(0,0,0,.05);
          td{
            padding: 10px;
            &:first-child{
              border-top-left-radius: .5rem;
              border-bottom-left-radius: .5rem;
            }
            &:last-child{
              border-top-right-radius: .5rem;
              border-bottom-right-radius: .5rem;
            }
            &.img-container {
              // width: 1rem;
              // background: #fff;

              span {
                display: flex;
                justify-content: flex-start;
              }

              .product-img {
                height: 110px;
              }
            }
          }
          td.td-check{
            padding: 20px !important;
          }
      }
    }

    .vs-table--thead{
      th {
        padding-top: 0;
        padding-bottom: 0;

        .vs-table-text{
          text-transform: uppercase;
          font-weight: 600;
        }
      }
      th.td-check{
        padding: 0 15px !important;
      }
      tr{
        background: none;
        box-shadow: none;
      }
    }

    .vs-table--pagination {
      justify-content: center;
    }
  }
}
</style>
