<template>
  <div class="login --wrapper">
    <header class="login__header border-bottom pv-4">
      Добавить новый аккаунт
    </header>
    <network-login :network="selectNetwork" v-if="selectNetwork" />
    <network-list
      v-else
      ref="networkList"
      class="login__networks"
      @change="setNetwork"
    />
  </div>
</template>

<script lang="ts">
import NetworkList from "@/components/Login/network-list.vue";
import { NetworksType } from "@/data/NETWORKS";
import { Vue, Options } from "vue-class-component";
import { Ref } from "vue-property-decorator";
import NetworkLogin from "@/components/Login/network-login.vue";

@Options({
  name: "login",
  components: { NetworkLogin, NetworkList }
})
export default class Login extends Vue {
  selectNetwork: NetworksType | null = null;

  @Ref() networkList!: NetworkList;

  setNetwork(network: NetworksType): void {
    this.selectNetwork = network;
  }
}
</script>

<style lang="scss">
.login {
  &__header {
    @include text(24px, bold);
    display: flex;
    justify-content: center;
  }
}
</style>