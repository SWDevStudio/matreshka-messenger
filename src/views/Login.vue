<template>
  <div class="login --wrapper">
    <header class="login__header border-bottom pv-4">
      Добавить новый аккаунт
    </header>
    <network-list
      ref="networkList"
      class="login__networks"
      @change="setNetwork"
      v-if="!selectNetwork"
    />
  </div>
</template>

<script lang="ts">
import NetworkList from "@/components/Login/network-list.vue";
import { NetworksType } from "@/data/NETWORKS";
import { Vue, Options } from "vue-class-component";
import { Ref } from "vue-property-decorator";

@Options({
  name: "login",
  components: { NetworkList }
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
    border-bottom: 1px solid #7a7a7a;
  }
}
</style>