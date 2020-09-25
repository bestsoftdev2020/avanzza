<!-- =========================================================================================
    File Name: Register.vue
    Description: Register Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
        <div class="vx-col sm:w-5/6 md:w-4/5 lg:w-4/5 xl:w-4/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter">
                        <div class="vx-col hidden sm:hidden md:hidden lg:block lg:w-1/2 mx-auto self-center">
                            <img src="@assets/images/pages/login.png" alt="register" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 mx-auto self-center  d-theme-dark-bg">
                            <div class="px-8 pt-8 register-tabs-container">
                                <div class="vx-card__title mb-4">
                                    <img src="@assets/images/pages/logo.svg" alt="logo" class="centered mt-6" style="height: 2rem;">
                                    <p class="pt-5">Complete el siguiente formulario para crear una nueva cuenta.</p>
                                </div>
                                <vs-tabs>
                                  <vs-tab label="Propietarios">
                                    <register-owner></register-owner>
                                  </vs-tab>

                                  <vs-tab label="Proveedor">
                                    <register-provider></register-provider>
                                  </vs-tab>

                                  <vs-tab label="Técnico">
                                    <register-technical></register-technical>
                                  </vs-tab>
                                </vs-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>
import RegisterOwner from "./RegisterOwner.vue"
import RegisterProvider from "./RegisterProvider.vue"
import RegisterTechnical from "./RegisterTechnical.vue"

export default {
    components: {
      RegisterOwner,
      RegisterProvider,
      RegisterTechnical
    }
}
</script>

<style lang="scss">
.register-tabs-container {
  min-height: 517px;

  .con-tab {
    padding-bottom: 23px;
  }
}
</style>
