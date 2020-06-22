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
    <vs-table
      ref="table"
      v-model="selected"
      pagination
      :max-items="itemsPerPage"
      search
      :data="clients"
    >
      <div slot="header" class="flex flex-wrap-reverse items-center flex-grow justify-between">
        <div class="flex flex-wrap-reverse items-center">
          <div
            class="p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-between text-lg font-medium text-base text-primary border border-solid border-primary"
            @click="changeAll"
          >
            <feather-icon icon="GlobeIcon" svgClasses="h-4 w-4" />
            <span class="ml-2 text-base text-primary">Todos los afiliados</span>
          </div>
        </div>

        <!-- ITEMS PER PAGE -->
        <vs-dropdown vs-trigger-click class="cursor-pointer mb-4 mr-4">
          <div
            class="p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
          >
            <span
              class="mr-2"
            >{{ currentPage * itemsPerPage - (itemsPerPage - 1) }} - {{ clients.length - currentPage * itemsPerPage > 0 ? currentPage * itemsPerPage : clients.length }} of {{ queriedItems }}</span>
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
        <vs-th sort-key="original">Valor Original</vs-th>
        <vs-th sort-key="new_val">Nuevo Valor</vs-th>
        <vs-th sort-key="comment">Comentarios</vs-th>
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
              <p class="product-name font-medium truncate">{{ tr.membership_fee }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.quota_request_val }}</p>
            </vs-td>

            <vs-td>
              <p class="product-name font-medium truncate">{{ tr.quota_request_comment }}</p>
            </vs-td>

            <vs-td>
              <vs-chip
                :color="getStatusColor(tr.status)"
                class="product-order-status"
              >{{ getStatusText(tr.status) }}</vs-chip>
            </vs-td>

            <vs-td class="whitespace-no-wrap">
              <vs-dropdown vs-trigger-click class="cursor-pointer">
                <div
                  class="p-3 shadow-drop rounded-lg d-theme-dark-light-bg cursor-pointer flex items-end justify-center text-lg font-medium w-32 bg-info-gradient"
                >
                  <span class="mr-2 leading-none">Acciones</span>
                  <feather-icon icon="ChevronDownIcon" svgClasses="h-4 w-4" />
                </div>
                <vs-dropdown-menu>
                  <vs-dropdown-item @click="approveRequest(tr.id)">
                    <span class="flex items-center">
                      <feather-icon icon="ArchiveIcon" svgClasses="h-4 w-4" class="mr-2" />
                      <span>Aprobar</span>
                    </span>
                  </vs-dropdown-item>

                  <vs-dropdown-item @click="rejectRequest(tr.id)">
                    <span class="flex items-center">
                      <feather-icon icon="TrashIcon" svgClasses="h-4 w-4" class="mr-2" />
                      <span>Rechazar</span>
                    </span>
                  </vs-dropdown-item>
                </vs-dropdown-menu>
              </vs-dropdown>
            </vs-td>
          </vs-tr>
        </tbody>
      </template>
    </vs-table>
    <vs-popup
      classContent="popup-example"
      title="Actualizar cuota para todos los afiliados"
      :active.sync="popupActive"
    >
      <form data-vv-scope="Quota_Request">
        <div class="vx-row">
          <div class="vx-col md:w-1/1 w-full mt-5">
            <vs-select v-model="percentageFlag" class="w-full select-large" label="Modalidad">
              <vs-select-item key="0" value="0" text="Fijo" class="w-full" />
              <vs-select-item key="1" value="1" text="Porcentaje" class="w-full" />
            </vs-select>
          </div>
          <div class="vx-col md:w-1/1 w-full mt-5">
            <vs-input
              label="Valor"
              v-model="quotaVal"
              type="number"
              name="quota_value"
              class="w-full"
              v-validate="'required'"
            />
            <span class="text-danger">{{ errors.first('Quota_Request.quota_value') }}</span>
          </div>
          <div class="vx-col md:w-1/1 w-full mt-5">
            <vs-textarea
              label="Comentarios"
              v-model="quotaComment"
              name="quota_comment"
              v-validate="'required'"
            />
            <span class="text-danger">{{ errors.first('Quota_Request.quota_comment') }}</span>
          </div>
          <div class="vx-col md:w-1/1 w-full mt-3 text-center">
            <vs-checkbox v-model="deluserFlag">Modificar afiliados inactivos y en baja</vs-checkbox>
          </div>
          <div class="vx-col md:w-1/1 w-full mt-3 text-center">
            <vs-button class="mr-3 mb-2 mt-5" @click.stop="requestQuota">Solicitud</vs-button>
          </div>
        </div>
      </form>
    </vs-popup>
  </div>
</template>

<script>
import moduleClientList from "@/store/client-list/moduleClientList.js";
import axios from "@/axios.js";
import { Validator } from "vee-validate";

const dict = {
  custom: {
    quota_value: {
      required: "Quota Valor es requerido"
    },
    quota_comment: {
      required: "Quota Comentarios es requerido"
    }
  }
};

// register custom messages
Validator.localize("en", dict);

export default {
  components: {},
  data() {
    return {
      userId: 1 ,
      selected: [],
      quotaVal: "",
      itemsPerPage: 4,
      isMounted: false,
      popupActive: false,
      quotaComment: "",
      selectedQuota: [],
      deluserFlag: false,
      percentageFlag: 0
    };
  },
  computed: {
    currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
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
    }
  },
  methods: {
    requestQuota() {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll("Quota_Request").then(result => {
          if (result) {
            axios
              .post("/api/client-list/client/update_quota_all/", {
                value: this.quotaVal,
                comment: this.quotaComment,
                del_flag: this.deluserFlag,
                percent_flag: this.percentageFlag
              })
              .then(response => {
                if (response.data) {
                  this.popupActive = false;
                  resolve(true);
                }
              })
              .catch(error => {
                reject(error);
              });
          }
        });
      });
    },
    changeAll() {
      this.popupActive = true;
      this.quotaComment = "";
      this.quotaVal = "";
      this.deluserFlag = false;
      this.percentageFlag = 0;
    },
    approveRequest(id) {
      this.$store.dispatch("clientList/approveItem", { id: id }).catch(err => {
        console.error(err);
      });
    },
    rejectRequest(id) {
      this.$store.dispatch("clientList/rejectItem", { id: id }).catch(err => {
        console.error(err);
      });
    },
    getGenderText(status) {
      if (status == "0") return "F";
      if (status == "1") return "M";
      return "F";
    },
    getStatusColor(status) {
      if (status == "1") return "success";
      if (status == "2") return "primary";
      if (status == "3") return "primary";
      if (status == "4") return "danger";
      if (status == "5") return "danger";
      return "success";
    },
    getStatusText(status) {
      if (status == "1") return "Active";
      if (status == "2") return "Inactive requested";
      if (status == "3") return "Remove requested";
      if (status == "4") return "Inactived";
      if (status == "5") return "Removed";
      return "Active";
    }
  },
  created() {
    if (!moduleClientList.isRegistered) {
      this.$store.registerModule("clientList", moduleClientList);
      moduleClientList.isRegistered = true;
    }
    this.$store.dispatch("clientList/fetchClientListRequest");

    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    this.userID = userInfo.uid
  },
  mounted() {
    this.isMounted = true;
  }
};
</script>

<style lang="scss">
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
              height: 110px;
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
}
</style>
