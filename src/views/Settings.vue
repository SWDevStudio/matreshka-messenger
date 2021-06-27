<template>
  <div class="settings">
    <page-header title="Настройки">
      <template v-slot:title>Настройки</template>
    </page-header>
    <div class="p-4 settings__blocks">
      <setting-block
        v-for="(setting, key) in SETTINGS"
        :settings="setting"
        :key="key"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/page-header.vue";
import SettingBlock from "@/components/Settings/setting-block.vue";
import { SETTINGS, SETTINGS } from "@/data/SETTINGS";

export default defineComponent({
  name: "Settings",
  components: { SettingBlock, PageHeader },
  data: () => ({
    SETTINGS: SETTINGS as SETTINGS[]
  }),
});
</script>

<style lang="scss">
.settings {
  &__blocks {
    display: grid;
    grid-row-gap: 20px;
  }
}
</style>