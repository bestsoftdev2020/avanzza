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

        <v-select
            :options="countries"
            name="country"
            placeholder="Elige País"
            v-model="country"
            class="w-11/12 mt-4"/>
        <span class="text-danger text-sm">{{ errors.first('country') }}</span>

        <v-select
            :options="cities"
            name="city"
            placeholder="Elige ciudad"
            v-model="city"
            class="w-11/12 mt-4"/>
        <span class="text-danger text-sm">{{ errors.first('city') }}</span>

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

        <date-picker
            placeholder="Fecha de nacimiento"
            v-model="birthday"
            class="w-11/12 mt-4">
        </date-picker>

        <div class="pt-6 pb-0">Información Taller</div>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="taller_name"
            placeholder="Nombre del Taller"
            v-model="taller_name"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('taller_name') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="taller_owner"
            placeholder="Propietario del Taller"
            v-model="taller_owner"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('taller_owner') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="taller_address"
            placeholder="Dirección del Taller"
            v-model="taller_address"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('taller_address') }}</span>

        <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="taller_handphone"
            placeholder="Número celular Taller"
            v-model="taller_handphone"
            class="w-11/12 mt-4" />
        <span class="text-danger text-sm">{{ errors.first('taller_handphone') }}</span>

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

import Datepicker from 'vuejs-datepicker';
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
    taller_name: {
      required: '"Nombre del Taller" no puede estar en blanco'
    },
    taller_address: {
      required: '"Dirección del Taller" no puede estar en blanco'
    },
    taller_owner: {
      required: '"Propietario del Taller" no puede estar en blanco'
    },
    taller_handphone: {
      required: '"Número celular Taller" no puede estar en blanco'
    },
    city: {
      required: '"País" no puede estar en blanco'
    },
    country: {
      required: '"Ciudad" no puede estar en blanco'
    },
    taller_address: {
      required: '"Dirección" no puede estar en blanco'
    },
    email: {
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
            city: '',
            country: '',
            handphone: '',
            birthday: '',
            category: '',
            email: '',
            taller_name: '',
            taller_handphone: '',
            taller_owner: '',
            taller_address: '',
            password: '',
            confirm_password: '',
            error: '',
        }
    },
    computed: {
        countries() { return this.$store.state.initialSelectData.countries },
        cities() { return this.$store.state.initialSelectData.cities },
        categories() { return this.$store.state.initialSelectData.categories },
    },
    components: {
        'v-select': vSelect,
        'date-picker': Datepicker,
    },
    methods: {
        registerOwner() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    if(this.password != this.confirm_password) {
                        this.error = "Confirme que la contraseña no coincide"
                        return false
                    }
                    this.$http.post('/api/register_technical', {
                        name: this.name,
                        surname: this.surname,
                        handphone: this.handphone,
                        email: this.email,
                        city: this.city ? this.city.value : 0,
                        country: this.country ? this.country.value : 0,
                        taller_name: this.taller_name,
                        taller_owner: this.taller_owner,
                        taller_address: this.taller_address,
                        taller_handphone: this.taller_handphone,
                        role: 3,
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
