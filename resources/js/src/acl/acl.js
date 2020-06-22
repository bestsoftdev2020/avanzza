import Vue from "vue"
import { AclInstaller, AclCreate, AclRule } from "vue-acl"
import router from "@/router"

Vue.use(AclInstaller)

let initialRole = "demo"

let userInfo = JSON.parse(localStorage.getItem("userInfo"))
if(userInfo && userInfo.userRole) initialRole = userInfo.userRole

export default new AclCreate({
  initial: initialRole,
  notfound: "/login",
  router,
  acceptLocalRules: true,
  globalRules: {
    allow_all: new AclRule("sales_manager").or("vendor").generate(),
    sales_manager: new AclRule("sales_manager").generate(),
    vendor: new AclRule("vendor").generate(),
    // public: new AclRule("public").or("admin").or("editor").generate(),
  }
})
