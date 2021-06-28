<template>
  <div class="wall">
    <page-header :arrow="false">
      <template v-slot:title>
        {{NETWORK.name}}
      </template>
      <template v-slot:icon-panel>
        <span class="icon-account-group"/>
        <span class="icon-star-line"/>
        <img src="/img/icon-logo.png" alt="icon-logo" class="icon-logo icon-logo--small">
      </template>
    </page-header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NETWORKS, NetworksType } from "@/data/NETWORKS";
import PageHeader from "@/components/page-header.vue";
interface Data {
  readonly NETWORK: NetworksType | null;
}
export default defineComponent({
  name: "Wall",
  components: { PageHeader },
  data(): Data {
    return {
      NETWORK: NETWORKS.find(i => i.id === ~~this.$route.params.id) || null
    };
  },
  created() {
    // this.NETWORK = null
  }
});
</script>

<style lang="scss"></style>