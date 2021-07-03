<template>
  <div class="login --wrapper">
    <header class="login__header border-bottom pv-4">
      Добавить новый аккаунт
    </header>
    <network-list class="login__networks"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NetworkList from "@/components/Login/network-list.vue";

export default defineComponent({
  name: "login",
  components: { NetworkList }
});
</script>

<style lang="scss">
.login {
  &__header {
    @include text(24px, bold);
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #7a7a7a;
  }
}


</style>