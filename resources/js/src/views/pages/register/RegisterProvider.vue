<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="clearfix mt-2" style="max-height: 70vh;position: relative;overflow-y: auto;">
        <div class="pt-2 pb-1">Información del Socio Asesor</div>
        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="name"
            placeholder="Nombres"
            v-model="name"
            class="w-11/12 mt-2" />
        <span class="text-danger text-sm">{{ errors.first('name') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="surname"
            placeholder="Apellidos"
            v-model="surname"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('surname') }}</span>

        <vs-input
            v-validate="'required|email'"
            data-vv-validate-on="blur"
            name="email"
            type="email"
            placeholder="Correo"
            v-model="email"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('email') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="handphone"
            placeholder="Celular"
            v-model="handphone"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('handphone') }}</span>

        <div class="pt-6 pb-0">Información Laboral</div>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="company_address"
            placeholder="Empresa donde trabajas"
            v-model="company_address"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('company_address') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="address"
            placeholder="Dirección"
            v-model="address"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('address') }}</span>

        <vs-input
            v-validate="'required|email'"
            data-vv-validate-on="blur"
            name="work_email"
            type="work_email"
            placeholder="Correo"
            v-model="work_email"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('work_email') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="telephone"
            placeholder="Teléfono"
            v-model="telephone"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('telephone') }}</span>

        <v-select
            v-validate="'required'"
            :options="categories"
            name="category"
            placeholder="Categoría"
            v-model="category"
            class="w-11/12 mt-4"/>
        <span class="text-danger text-sm">{{ errors.first('category') }}</span>

        <vs-input
            ref="password"
            type="password"
            data-vv-validate-on="blur"
            v-validate="'required'"
            name="password"
            placeholder="Contraseña"
            v-model="password"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('password') }}</span>

        <vs-input
            type="password"
            v-validate="'required'"
            data-vv-validate-on="blur"
            data-vv-as="password"
            name="confirm_password"
            placeholder="Confirmación"
            v-model="confirm_password"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

        <span class="text-danger">{{error}}</span> <br>

        <vs-button  type="border" to="/login" class="mt-6">Iniciar sesión</vs-button>
        <vs-button class="float-right mt-6 mr-10" @click="registerOwner">Regístrate</vs-button>
    </div>
</template>

<script>

import vSelect from 'vue-select'
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    name: {
      required: '"Nombres" no puede estar en blanco'
    },
    surname: {
      required: '"Apellido" no puede estar en blanco'
    },
    handphone: {
      required: '"Celular" no puede estar en blanco'
    },
    telephone: {
      required: '"Teléfono" no puede estar en blanco'
    },
    category: {
      required: '"Categoría" no puede estar en blanco'
    },
    address: {
      required: '"Dirección" no puede estar en blanco'
    },
    company_address: {
      required: '"Empresa donde trabajas" no puede estar en blanco'
    },
    email: {
      required: '"Correo" no puede estar en blanco',
      email: 'El "Correo" no es válido'
    },
    work_email: {
      required: '"Correo" no puede estar en blanco',
      email: 'El "Correo" no es válido'
    },
    password: {
      required: '"Contraseña" no puede estar en blanco',
    },
    confirm_password: {
      required: '"Confirmación " no puede estar en blanco',
    },
  }
};

Validator.localize('en', dict);

export default {
    data() {
        return {
            name: '',
            surname: '',
            telephone: '',
            handphone: '',
            work_email: '',
            address: '',
            company_address: '',
            category: '',
            email: '',
            password: '',
            confirm_password: '',
            error: '',
        }
    },
    computed: {
        categories() { return this.$store.state.initialSelectData.categories },
    },
    components: {
        'v-select': vSelect,
    },
    methods: {
        registerOwner() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    if(this.password != this.confirm_password) {
                        this.error = "Confirme que la contraseña no coincide"
                        return false
                    }
                    this.$http.post('/api/register_provider', {
                        name: this.name,
                        surname: this.surname,
                        telephone: this.telephone,
                        handphone: this.handphone,
                        address: this.address,
                        company_address: this.company_address,
                        category: this.category.value,
                        role: 2,
                        email: this.email,
                        work_email: this.work_email,
                        password: this.password,
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.$store.commit('auth/SET_LOGIN',true)
                            this.$store.commit('UPDATE_USER_INFO',response.data.userInfo)
                            this.$router.push('/')
                        } else {
                            this.$store.commit('auth/SET_LOGIN',false)
                            this.error = response.data.error
                        }
                    })
                    .catch(error => {
                        this.$store.commit('auth/SET_LOGIN',false)
                        this.error = error
                    })
                }
            })
        }
    }
}
</script>
