<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
    <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
      <vx-card>
        <div slot="no-body" class="full-page-bg-color">

          <div class="vx-row no-gutter justify-center items-center">

            <div class="vx-col hidden lg:block lg:w-1/2">
              <img src="@assets/images/pages/login.png" alt="login" class="mx-auto">
            </div>

            <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
              <div class="p-8 login-tabs-container">

                <div class="vx-card__title mb-4">
                  <img src="@assets/images/pages/logo.svg" alt="logo" class="centered mt-6" style="height: 2rem;">
                  <p class="py-5">Tienes que registrarte o iniciar sesión antes de continuar.</p>
                </div>

                <div>
                    <vs-input
                        name="email"
                        icon-no-border
                        icon="icon icon-user"
                        icon-pack="feather"
                        placeholder="Correo electrónico"
                        v-model="email"
                        v-validate="'required|email'"
                        class="w-full"/>
                    <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                    <vs-input
                        type="password"
                        name="password"
                        icon-no-border
                        icon="icon icon-lock"
                        icon-pack="feather"
                        placeholder="Contraseña"
                        v-model="password"
                        v-validate="'required'"
                        class="w-full mt-6" />
                    <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                    <div class="text-danger mt-6">{{error}}</div>

                    <div class="flex flex-wrap justify-between my-6">
                        <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Recuerdame</vs-checkbox>
                    </div>
                    <vs-button type="border" @click="$router.push('register').catch(() => {})">Regístrate</vs-button>
                    <vs-button class="float-right" @click="submitForm">Iniciar sesión</vs-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>

import { Validator } from 'vee-validate';
const dict = {
  custom: {
    email: {
      required: 'O campo "E-Mail" é obrigatório',
      email: 'O campo "E-Mail" precisa ser válido'
    },
    password: {
      required: 'O campo "Senha" é obrigatório'
    },
  }
};

Validator.localize('en', dict);

export default{
    data() {
        return {
            email: "",
            password: "",
            checkbox_remember_me: false,
            error: "",
        }
    },
    methods: {
        submitForm() {
            this.$validator.validateAll().then(result => {
                if(result) {
                    this.$http.post('/api/login', {
                        email: this.email,
                        password: this.password,
                    })
                    .then(response => {
                        if(response.data.status) {
                            this.$store.commit('auth/SET_LOGIN',true)
                            this.$store.commit('UPDATE_USER_INFO',response.data.userInfo)
                            this.$router.push('/')
                        } else {
                            this.error = response.data.error
                        }
                    })
                    .catch(error => {
                        this.error = error
                    })
                }
            })
        }
    },
}
</script>

<style lang="scss">
#page-login {
  .social-login-buttons {
    .bg-facebook { background-color: #1551b1 }
    .bg-twitter { background-color: #00aaff }
    .bg-google { background-color: #4285F4 }
    .bg-github { background-color: #333 }
  }
}
</style>
