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
    <vs-table ref="table" v-model="selected" pagination :max-items="itemsPerPage" search :data="clients">

      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">

        <div class="flex flex-wrap-reverse items-center">

          <!-- ADD NEW -->
          <div class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary" @click="addNewData">
              <feather-icon icon="PlusIcon" svgClasses="h-4 w-4" />
              <span class="ml-2 text-base text-primary">Nuevo usuario</span>
          </div>

          <toggle-switch
            :options="myOptions"
            v-model="deleteFlag"
            class="ml-5 mb-2"
            v-if="this.$store.state.AppActiveUser.userRole === 'sales_manager'"
          /> 
        </div>


        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium">
            <span class="mr-2">{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ clients.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : clients.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="firstname">Nombre</vs-th>
        <vs-th sort-key="lastname">Apellido</vs-th>
        <vs-th sort-key="Gender">Genero</vs-th>
        <vs-th sort-key="dni">DNI</vs-th>
        <vs-th sort-key="phone">Telefono</vs-th>
        <vs-th sort-key="email">Correo electronico</vs-th>
        <vs-th sort-key="status">estado</vs-th>
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
              <p class="product-name font-medium truncate">{{ tr.first_name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.last_name }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ getGenderText(tr.gender) }}</p>
            </vs-td>

            <vs-td>
              <p class="product-price">{{ tr.doc_num }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.phone_number1 }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.email }}</p>
            </vs-td>

            <vs-td>
              <vs-chip :color="getStatusColor(tr.status)" class="product-order-status">{{ getStatusText(tr.status) }}</vs-chip>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <feather-icon icon="ShoppingCartIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" @click="showSalesHistory(tr.id)" />
              <feather-icon icon="DollarSignIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" @click="editQuota(tr)" />
              <feather-icon icon="EyeIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" @click.stop="viewData(tr.id)" />
              <feather-icon icon="EditIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="editData(tr.id)" />
              <feather-icon icon="TrashIcon" svgClasses="w-5 h-5 hover:text-danger stroke-current" class="ml-2" @click.stop="deleteData(tr.id)"/>
            </vs-td>

          </vs-tr>
        </tbody>
      </template>
    </vs-table>
    <vs-popup classContent="popup-example" title="Cambiar cuota" :active.sync="popupActive">
      <form data-vv-scope="Quota_Request">
        <div class="vx-row">
          <div class="vx-col md:w-1/3 w-full mt-5">
            <vs-input label="Valor Original" v-model="selectedQuota.membership_fee" class="w-full" disabled />
          </div>
          <div class="vx-col md:w-1/3 w-full mt-5">
            <vs-input label="Nuevo Valor" v-model="quotaVal" class="w-full" name="quota_value" v-on:change="changeQuotaval" v-if="!selectedQuota.quota_flag" v-validate="'required'"/>
            <vs-input label="Nuevo Valor" v-model="selectedQuota.quota_request_val" class="w-full" v-if="selectedQuota.quota_flag" disabled/>
            <span class="text-danger">{{ errors.first('Quota_Request.quota_value') }}</span>
          </div>
          <div class="vx-col md:w-1/3 w-full mt-5">
            <vs-input label="%" v-model="quotaPercentage" type="number" name="quota_percent" class="w-full" v-on:change="changePercent" v-if="!selectedQuota.quota_flag" v-validate="'required'"/>
            <span class="text-danger">{{ errors.first('Quota_Request.quota_percent') }}</span>
          </div>
          <div class="vx-col md:w-1/1 w-full mt-5">
            <vs-textarea label="Comentarios" v-model="quotaComment" name="quota_comment" v-if="!selectedQuota.quota_flag" v-validate="'required'"/>
            <vs-textarea label="Comentarios" v-model="selectedQuota.quota_request_comment" v-if="selectedQuota.quota_flag" disabled/>
            <span class="text-danger">{{ errors.first('Quota_Request.quota_comment') }}</span>
          </div>
          <div class="vx-col md:w-1/1 w-full mt-3 text-center">
            <vs-button class="mr-3 mb-2 mt-5" @click.stop="requestQuota" v-if="!selectedQuota.quota_flag">Solicitud</vs-button>
            <vs-button class="mr-3 mb-2 mt-5" @click="popupActive=false" v-if="selectedQuota.quota_flag">Cerrar</vs-button>
          </div>
        </div>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import moduleClientList from "@/store/client-list/moduleClientList.js"
import axios from "@/axios.js"
import { Validator } from 'vee-validate';

const dict = {
  custom: {
    quota_value: {
      required: "Quota Valor es requerido",
    },
    quota_comment: {
      required: "Quota Comentarios es requerido",
    },
    quota_percent: {
      required: "Quota porcentaje es requerido",
    },
  }
};

// register custom messages
Validator.localize('en', dict);

export default {
  components: {
  },
  data() {
    return {
      userId : 1 ,
      selected: [],
      quotaVal: '',
      quotaPercentage: 0,
      itemsPerPage: 4,
      isMounted: false,
      deleteFlag: "Activos",
      popupActive: false,
      quotaComment: '',
      selectedQuota: [],
      myOptions: {
        layout: {
          color: 'black',
          backgroundColor: 'white',
          selectedColor: 'white',
          selectedBackgroundColor: 'green',
          borderColor: 'rgb(37,107,122)',
          fontFamily: 'Arial',
          fontWeight: 'normal',
          fontWeightSelected: 'bold',
          squareCorners: false,
          noBorder: false
        },
        size: {
          fontSize: 1.3,
          height: 3,
          padding: 0.5,
          width: 14
        },
        items: {
          delay: .4,
          preSelected: 'unknown',
          disabled: false,
          labels: [
            {name: 'De Baja', color: 'white', backgroundColor: 'red'}, 
            {name: 'Activos', color: 'white', backgroundColor: 'rgb(37,107,122)'}
          ]
        }
      }
    }
  },
  computed: {
    currentPage() {
      if(this.isMounted) {
        return this.$refs.table.currentx
      }
      return 0
    },
    clients() {
      return this.$store.state.clientList.clients
    },
    queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.clients.length
    },
  },
  methods: {
    requestQuota() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("Quota_Request").then(result => {
          if (result) {
            axios.post("/api/client-list/client/update_quota/", {id:this.selectedQuota.id,value:this.quotaVal,comment:this.quotaComment})
            .then((response) => {
              if(response.data) {
                this.popupActive = false
                resolve(true)
              }
            })
            .catch((error) => { reject(error) })
          }
        })
      })
    },
    changePercent() {
      this.quotaVal = this.selectedQuota.membership_fee/100 * (100+parseFloat(this.quotaPercentage))
    },
    changeQuotaval() {
      this.quotaPercentage = (this.quotaVal-this.selectedQuota.membership_fee)/this.selectedQuota.membership_fee*100
    },
    addNewData() {
      this.$router.push('/client/add')
    },
    deleteData(id) {
      this.$store.dispatch("clientList/removeItem", {id:id, role:this.$store.state.AppActiveUser.userRole, user_id: this.userId}).catch(err => { console.error(err) })
    },
    editData(id) {
      this.$router.push('/client/edit?id='+id)
    },
    showSalesHistory(id) {
      this.$router.push('/sales?id='+id)
    },
    editQuota(val) {
      this.selectedQuota = val 
      this.quotaVal = val.membership_fee
      this.quotaPercentage = 0
      this.quotaComment = ''
      this.popupActive = true
    },
    viewData(id) {
      this.$router.push('/client/view?id='+id)
    },
    getGenderText(status) {
      if(status == '0') return "F"
      if(status == '1') return "M"
      return "F"
    },
    getStatusColor(status) {
      if(status == '1') return "success"
      if(status == '2') return "primary"
      if(status == '3') return "primary"
      if(status == '4') return "danger"
      if(status == '5') return "danger"
      return "success"
    },
    getStatusText(status) {
      if(status == '1') return "Activo"
      if(status == '2') return "Inactivo pendiente"
      if(status == '3') return "Baja pendiente"
      if(status == '4') return "Inactivo"
      if(status == '5') return "De baja"
      return "Activo"
    },
  },
  created() {
    if(!moduleClientList.isRegistered) {
      this.$store.registerModule('clientList', moduleClientList)
      moduleClientList.isRegistered = true
    }
    this.$store.dispatch("clientList/fetchClientListItems")

    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userID = userInfo.uid
  },
  mounted() {
    this.isMounted = true;
  },
  watch: {
    deleteFlag: function (val) {
      if(val === "Activos")
        this.$store.dispatch("clientList/fetchClientListItems")
      else
        this.$store.dispatch("clientList/fetchClientListItemsDeleted")
    },
  }
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
