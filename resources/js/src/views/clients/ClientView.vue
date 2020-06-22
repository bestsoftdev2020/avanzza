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
              <feather-icon svgClasses="w-6 h-6" icon="UserIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Información de identificación</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Avatar Col -->
          <div class="vx-col" id="avatar-col">
            <div class="img-container mb-4">
              <img :src="userImg" class="rounded w-full" />
            </div>
          </div>

          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1">
            <table>
              <tr>
                <td class="font-semibold">Nombre</td>
                <td>{{ firstName }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Apellido</td>
                <td>{{ lastName }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Genero (M, F)</td>
                <td>{{ getGender(gender) }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Tipo de documento</td>
                <td>{{ getDoctype(docType) }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Numero de documento</td>
                <td>{{ docNumber }}</td>
              </tr>
              <tr>
                <td class="font-semibold">CUIL</td>
                <td>{{ cuilFirst+'-'+docNumber+'-'+cuilSecond }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Fecha de nacimiento</td>
                <td>{{ birthDate }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
        </div>
      </vx-card>

      <vx-card class="mb-base">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="InfoIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Datos Personales</span>
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
                <td class="font-semibold">Civil state</td>
                <td>{{ getCivilstate(civilState) }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Correo electronico</td>
                <td>{{ email }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Telefono1</td>
                <td>{{ phoneNumber1 }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Telefono2</td>
                <td>{{ phoneNumber2 }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Telefono3</td>
                <td>{{ phoneNumber3 }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 1 -->

          <!-- Information - Col 2 -->
          <div class="vx-col flex-1" id="account-info-col-2">
            <table>
              <tr>
                <td class="font-semibold">Calle</td>
                <td>{{ addressStreet }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Numero</td>
                <td>{{ addressNumber }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Barrio</td>
                <td>{{ addressNeighbour }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Localidad</td>
                <td>{{ addressLocation }}</td>
              </tr>
              <tr>
                <td class="font-semibold">CP</td>
                <td>{{ addressCp }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Provincia</td>
                <td>{{ addressProvince }}</td>
              </tr>
            </table>
          </div>
          <!-- /Information - Col 2 -->
        </div>
      </vx-card>

      <vx-card class="mb-base">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="GitlabIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Afiliación</span>
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
                <td class="font-semibold">Clase</td>
                <td>{{ getMembershipclass(membershipClass) }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Sucursal</td>
                <td>{{ membershipBranch }}</td>
              </tr>
              <tr>
                <td class="font-semibold">Cuota</td>
                <td>{{ membershipFee }}</td>
              </tr>
            </table>
          </div>
        </div>
      </vx-card>

      <vx-card class="mb-base">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="DollarSignIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Datos bancarios</span>
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
                <td class="font-semibold">ID</td>
                <td class="font-semibold">Banco</td>
                <td class="font-semibold">CBU</td>
                <td class="font-semibold">Numero de Cuenta</td>
                <td class="font-semibold">Numero de Cliente</td>
              </tr>
              <tr :key="index" v-for="(item,index) in bankInfo">
                <td>{{index+1}}</td>
                <td>{{item.bankName}}</td>
                <td>{{item.bankNumber}}</td>
                <td>{{item.bankAccount}}</td>
                <td>{{item.bankClient}}</td>
              </tr>
            </table>
          </div>
        </div>
      </vx-card>

      <vx-card class="mb-base">
        <div class="vx-row">
          <div class="vx-col w-full">
            <div class="flex items-end px-3">
              <feather-icon svgClasses="w-6 h-6" icon="UsersIcon" class="mr-2" />
              <span class="font-medium text-lg leading-none">Datos de empleador</span>
            </div>
            <vs-divider />
          </div>
        </div>
        <!-- Avatar -->
        <div class="vx-row">
          <!-- Information - Col 1 -->
          <div class="vx-col flex-1" id="account-info-col-1" style="padding-left:138px;">
            <table :key="index" v-for="(item,index) in employInfo" style="border: 1px solid;border-radius: 17px;padding: 10px 20px;border-color: #28717f; margin-bottom:20px;">
              <tr>
                <td class="font-semibold">ID</td>
                <td class="font-semibold">Empresa</td>
                <td class="font-semibold">Ingresos</td>
                <td class="font-semibold">Fecha de cobro</td>
                <td class="font-semibold">Fecha proximo cobro</td>
              </tr>
              <tr>
                <td>{{index+1}}</td>
                <td>{{item.companyName}}</td>
                <td>{{item.companySalary}}</td>
                <td>{{item.salaryDate}}</td>
                <td>{{item.nextSalarydate}}</td>
              </tr>
              <tr>
                <td class="font-semibold">Calle</td>
                <td class="font-semibold">Numero</td>
                <td class="font-semibold">Barrio</td>
                <td class="font-semibold">Localidad</td>
                <td class="font-semibold">CP</td>
                <td class="font-semibold">Provincia</td>
              </tr>
              <tr>
                <td>{{item.addressStreet}}</td>
                <td>{{item.addressNumber}}</td>
                <td>{{item.addressNeighbour}}</td>
                <td>{{item.addressLocation}}</td>
                <td>{{item.addressCp}}</td>
                <td>{{item.addressProvince}}</td>
              </tr>
            </table>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import moduleClientList from "@/store/client-list/moduleClientList.js";
import axios from "@/axios.js";

export default {
  data() {
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
    getGender(id) {
      if (id === 1) return "M";
      else return "F";
    },
    getDoctype(id) {
      if (id === 1) return "L.E";
      else if (id === 2) return "DNI";
      else if (id === 3) return "CARNET EXT";
      else if (id === 4) return "RUC";
      else if (id === 5) return "PASAPORTE";
    },
    getCivilstate(id) {
      if (id === 1) return "Casado";
      else if (id === 2) return "soltero";
      else if (id === 3) return "En convivencia";
      else if (id === 4) return "viudo";
      else if (id === 5) return "divorciado";
    },
    getMembershipclass(id) {
      if (id === 1) return "particulares";
      else if (id === 2) return "otros";
    }
  },
  async created() {
    if (!moduleClientList.isRegistered) {
      this.$store.registerModule("clientList", moduleClientList);
      moduleClientList.isRegistered = true;
    }

    await axios
      .get("/api/client-list/client-view/" + this.$route.query.id)
      .then(response => {
        if (response.data) {
          var clientInfo = response.data[0];
          var bankInfo = response.data[1];
          var employInfo = response.data[2];
          this.firstName = clientInfo.first_name;
          this.lastName = clientInfo.last_name;
          this.gender = clientInfo.gender;
          this.email = clientInfo.email;
          this.docType = clientInfo.doc_type;
          this.docNumber = clientInfo.doc_num;
          this.cuilFirst = clientInfo.cuil_first;
          this.cuilSecond = clientInfo.cuil_last;
          this.birthDate = clientInfo.birth_date;
          this.salaryDate = clientInfo.salary_date;
          this.nextSalarydate = clientInfo.next_salary_date;
          this.civilState = clientInfo.civil_state;
          this.addressStreet = clientInfo.address_street;
          this.addressNumber = clientInfo.address_number;
          this.addressNeighbour = clientInfo.address_neighbour;
          this.addressLocation = clientInfo.address_location;
          this.addressCp = clientInfo.address_cp;
          this.addressProvince = clientInfo.address_province;
          this.eaddressStreet = clientInfo.eaddress_street;
          this.eaddressNumber = clientInfo.eaddress_number;
          this.eaddressNeighbour = clientInfo.eaddress_neighbour;
          this.eaddressLocation = clientInfo.eaddress_location;
          this.eaddressCp = clientInfo.eaddress_cp;
          this.eaddressProvince = clientInfo.eaddress_province;
          this.phoneNumber1 = clientInfo.phone_number1;
          this.phoneNumber2 = clientInfo.phone_number2;
          this.phoneNumber3 = clientInfo.phone_number3;
          this.membershipClass = clientInfo.membership_class;
          this.membershipBranch = clientInfo.membership_branch;
          this.membershipFee = clientInfo.membership_fee;
          this.companySalary = clientInfo.profit;
          this.companyName = clientInfo.employ_company;
          (this.userImg = clientInfo.avatar),
            (this.file = null),
            bankInfo.forEach(item => {
              var info = {
                bankName: item.bank_name,
                bankNumber: item.bank_number,
                bankAccount: item.bank_account,
                bankClient: item.bank_client
              };
              this.bankInfo.push(info);
            });

          employInfo.forEach(item => {
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
            this.employInfo.push(info);
          });
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
