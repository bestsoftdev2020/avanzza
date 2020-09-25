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
    <vs-input
      v-validate="'required'"
      data-vv-validate-on="blur"
      name="name"
      placeholder="Nombres"
      v-model="name"
      class="w-full mt-2" />
    <span class="text-danger text-sm">{{ errors.first('name') }}</span>

    <vs-input
      data-vv-validate-on="blur"
      name="surname"
      placeholder="Apellidos"
      v-model="surname"
      class="w-full mt-4" />
    <span class="text-danger text-sm">{{ errors.first('surname') }}</span>

    <vs-input
      data-vv-validate-on="blur"
      name="telephone"
      placeholder="Teléfono"
      v-model="telephone"
      class="w-full mt-4" />
    <span class="text-danger text-sm">{{ errors.first('telephone') }}</span>

    <vs-input
      data-vv-validate-on="blur"
      name="address"
      placeholder="Dirección"
      v-model="address"
      class="w-full mt-4" />
    <span class="text-danger text-sm">{{ errors.first('address') }}</span>

    <vs-input
      v-validate="'required|email'"
      data-vv-validate-on="blur"
      name="email"
      type="email"
      placeholder="Correo"
      v-model="email"
      class="w-full mt-4" />
    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

    <v-select
        :options="countries"
        name="country"
        placeholder="Elige País"
        v-model="country"
        class="w-full mt-4"/>
    <span class="text-danger text-sm">{{ errors.first('country') }}</span>

    <v-select
        :options="cities"
        name="city"
        placeholder="Elige ciudad"
        v-model="city"
        class="w-full mt-4"/>
    <span class="text-danger text-sm">{{ errors.first('city') }}</span>

    <vs-input
      ref="password"
      type="password"
      data-vv-validate-on="blur"
      v-validate="'required'"
      name="password"
      placeholder="Contraseña"
      v-model="password"
      class="w-full mt-4" />
    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

    <vs-input
      type="password"
      v-validate="'required'"
      data-vv-validate-on="blur"
      data-vv-as="password"
      name="confirm_password"
      placeholder="Confirmación"
      v-model="confirm_password"
      class="w-full mt-4" />
    <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>

    <span class="text-danger">{{error}}</span> <br>

    <vs-button  type="border" to="/login" class="mt-6">Iniciar sesión</vs-button>
    <vs-button class="float-right mt-6" @click="registerOwner">Regístrate</vs-button>
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
            telephone: '',
            address: '',
            country: '',
            city: '',
            email: '',
            password: '',
            confirm_password: '',
            error: '',
        }
    },
    computed: {
        countries() { return this.$store.state.initialSelectData.countries },
        cities() { return this.$store.state.initialSelectData.cities },
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
                    this.$http.post('/api/register', {
                        name: this.name,
                        surname: this.surname,
                        telephone: this.telephone,
                        address: this.address,
                        country: this.country ? this.city.country : 0,
                        city: this.city ? this.city.value : 0,
                        role: 1,
                        email: this.email,
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
