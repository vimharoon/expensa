<template>
  <component :is="activeComponent"></component>
</template>

<script>
import { EventBus } from "./../eventBus";
import Login from "@/components/authentication/Login";
import Signup from "@/components/authentication/Signup";
export default {
  components: {
    Login,
    Signup
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
  }
};
</script>

<style lang="scss" scoped>
</style>
