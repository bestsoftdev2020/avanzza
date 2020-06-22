<!-- =========================================================================================
  File Name: AddNewDataSidebar.vue
  Description: Add New Data - Sidebar component
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary" class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
        <h4>{{ Object.entries(this.data).length === 0 ? "Nuevo usuario" : "Actualizar información de usuario" }}</h4>
        <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <VuePerfectScrollbar class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">

      <div class="p-6">
         <vs-alert :active="alertFlag" color="danger" icon="new_releases" >
          <span>There is the same username</span>
        </vs-alert>
        <!-- Product Image -->
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

        <!-- USER NAME -->
        <vs-input label="Nombre de usuario" v-model="userName" class="mt-5 w-full" name="user-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('user-name')">{{ errors.first('user-name') }}</span>

        <!-- FIRST NAME -->
        <vs-input label="Nombre" v-model="firstName" class="mt-5 w-full" name="first-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('first-name')">{{ errors.first('first-name') }}</span>

        <!-- LAST NAME -->
        <vs-input label="Apellido" v-model="lastName" class="mt-5 w-full" name="last-name" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('last-name')">{{ errors.first('last-name') }}</span>

        <!-- DNI -->
        <vs-input label="DNI" v-model="dniNumber" class="mt-5 w-full" name="DNI" v-validate="{ required: true, regex: /^[0-9]{8}$/ }" />
        <span class="text-danger text-sm" v-show="errors.has('DNI')">{{ errors.first('DNI') }}</span>

        <!-- PHONE NUMBER -->
        <vs-input label="Telefono" v-model="phoneNumber" class="mt-5 w-full" name="phone-number" />
        <span class="text-danger text-sm" v-show="errors.has('phone-number')">{{ errors.first('phone-number') }}</span>
        
        <!-- EMAIL -->
        <vs-input label="Correo electronico" v-model="email" class="mt-5 w-full" name="email" v-validate="{ required: false, regex: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ }" />
        <span class="text-danger text-sm" v-show="errors.has('email')">{{ errors.first('email') }}</span>

        <!-- PASSWORD -->
        <vs-input label="Contraseña" v-model="password" class="mt-5 w-full" name="password" v-validate="'required'" />
        <span class="text-danger text-sm" v-show="errors.has('password')">{{ errors.first('password') }}</span>

        <!-- CATEGORY -->
        <vs-select v-model="role" label="Rol" class="mt-5 w-full" name="role" v-validate="'required'">
          <vs-select-item :key="item.value" :value="item.value" :text="item.text" v-for="item in role_choices" />
        </vs-select>
        <span class="text-danger text-sm" v-show="errors.has('role')">{{ errors.first('role') }}</span>

        <!-- Upload -->
        <!-- <vs-upload text="Upload Image" class="img-upload" ref="fileUpload" /> -->

        <div class="upload-img mt-5" v-if="!userImg">
          <input type="file" class="hidden" ref="uploadImgInput" @change="updateCurrImg" accept="image/*">
          <vs-button @click="$refs.uploadImgInput.click()">Seleccionar Imagen</vs-button>
        </div>
      </div>
    </VuePerfectScrollbar>

    <div class="flex flex-wrap items-center p-6" slot="footer">
      <vs-button class="mr-6" @click="submitData" :disabled="!isFormValid">Guardar</vs-button>
      <vs-button type="border" color="danger" @click="isSidebarActiveLocal = false">Cancelar</vs-button>
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import axios from "@/axios.js"

export default {
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {},
    }
  },
  watch: {
    isSidebarActive(val) {
      if(!val) return
      if(Object.entries(this.data).length === 0) {
        this.initValues()
        this.$validator.reset()
      }else {
        let { first_name, last_name, id, avatar, name, dni, phone, email, password, role } = JSON.parse(JSON.stringify(this.data))
        this.userID = id
        this.firstName = first_name
        this.lastName = last_name
        this.userImg = avatar
        this.userName = name
        this.dniNumber = dni
        this.phoneNumber = phone
        this.email = email
        this.password = password
        this.role = role
        this.initValues()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.userID, this.userName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },
  data() {
    return {
      alertFlag : false,
      userID : null,
      userName : "",
      firstName : "",
      lastName : "",
      dniNumber : null,
      phoneNumber : "",
      email : "",
      password : "",
      role : 1,
      userImg : null,
      file : null,

      role_choices: [
        {text:'Administrador de ventas',value:1},
        {text:'Usuario Ejecutivo',value:2},
        {text:'Web Cliente',value:3},
        {text:'Vendedor',value:4}
      ],

      settings: { // perfectscrollbar settings
          maxScrollbarLength: 60,
          wheelSpeed: .60,
      },
    }
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive
      },
      set(val) {
        if(!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    isFormValid() {
      return !this.errors.any() && this.userName && this.dniNumber && this.password
    }
  },
  methods: {
    initValues() {
      if(this.data.id) return
        this.userID = null
        this.userName = ""
        this.firstName = ""
        this.lastName = ""
        this.dniNumber = null
        this.phoneNumber = ""
        this.email = ""
        this.password = ""
        this.role = 1
        this.userImg = null
        this.file = null
        this.alertFlag = false
    },

    submitData() {
      this.$validator.validateAll().then(result => {
          if (result) {
            var data = new FormData(); 
            data.append('username', this.userName)
            if(this.file)
              data.append('file', this.file)
            else
              data.append('avatar', this.userImg)
            data.append('id', this.userID)
            data.append('first_name', this.firstName)
            data.append('last_name', this.lastName)
            data.append('dni', this.dniNumber)
            data.append('phone', this.phoneNumber)
            data.append('email', this.email)
            data.append('password', this.password)
            data.append('role', this.role)

            if(this.userID !== null && this.userID >= 0) {
              axios.post(`/api/user-list/users/${this.userID}`, data, {headers: {'Content-Type': 'multipart/form-data'}})
              .then((response) => {
                if(response.data) {
                  this.$store.commit('userList/UPDATE_USER', response.data)
                  this.file = null
                  this.$emit('closeSidebar')
                  this.initValues()
                }
                else {
                  this.alertFlag = true
                }
              })
              .catch((error) => { reject(error) })
            } else {
              axios.post(`/api/user-list/users`, data, {headers: {'Content-Type': 'multipart/form-data'}})
              .then((response) => {
                if(response.data) {
                  this.$store.commit('userList/ADD_USER', response.data)
                  this.file = null
                  this.$emit('closeSidebar')
                  this.initValues()
                }
                else {
                  this.alertFlag = true
                }
              })
              .catch((error) => { reject(error) })
            }
          }
      })
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
    }
  },
  components: {
    VuePerfectScrollbar,
  }
}
</script>

<style lang="scss" scoped>
.add-new-data-sidebar {
  ::v-deep .vs-sidebar--background {
    z-index: 52010;
  }

  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 400px;
    max-width: 90vw;

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
  }
}

.scroll-area--data-list-add-new {
    // height: calc(var(--vh, 1vh) * 100 - 4.3rem);
    height: calc(var(--vh, 1vh) * 100 - 16px - 45px - 82px);
}
</style>
