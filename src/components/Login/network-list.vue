<template>
  <div class=" networks-list">
    <div
        class="networks-list__item d-flex gap-8 align-center justify-center pv-2 border-bottom"
        v-for="(network, key) in NETWORKS"
        :key="key"
    >
      <span class="icon" :class="network.icon" />
      <span class="text">{{ network.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NETWORKS, NetworksType } from "@/data/NETWORKS";
interface Data {
  readonly NETWORKS: NetworksType[];
}

export default defineComponent({
  name: "NetworkList",
  data: (): Data => ({
    NETWORKS: NETWORKS
  })
});
</script>

<style lang="scss">
.networks-list {
  span {
    cursor: pointer;
  }
  .icon {
    @include icon-font-size(100px);
  }
}
</style>