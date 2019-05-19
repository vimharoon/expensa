<template>
  <component :is="activeComponent"></component>
</template>

<script>
import { EventBus } from "./../eventBus";
import Login from "@/components/authentication/Login";
import Signup from "@/components/authentication/Signup";
import Forgotpassword from "@/components/authentication/Forgotpassword";
export default {
  components: {
    Login,
    Signup,
    Forgotpassword
  },
  created() {
    EventBus.$on("switch-active-comp", compName => {
      this.activeComponent = compName;
    });
  },
  data() {
    return {
      activeComponent: "Login"
    };
  },
  methods: {
    setActiveComponent() {
      // this.activeComponent =
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
