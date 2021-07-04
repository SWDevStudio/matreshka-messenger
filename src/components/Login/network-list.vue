<template>
  <div class="networks-list">
    <div
      class="networks-list__item d-flex gap-8 align-center justify-center pv-2 border-bottom"
      v-for="(network, key) in NETWORKS"
      :key="key"
      @click="setNetworks(network)"
    >
      <span class="icon" :class="network.icon" />
      <span class="text">{{ network.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { NETWORKS, NetworksType } from "@/data/NETWORKS";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "NetworkList"
})
export default class NetworkList extends Vue {
  NETWORKS: NetworksType[] = NETWORKS;

  setNetworks(network: NetworksType): void {
    this.$emit("change", network);
  }
}
</script>

<style lang="scss">
.networks-list {
  &__item {
    cursor: pointer;

    .icon {
      @include icon-font-size(100px);
    }
  }
}
</style>