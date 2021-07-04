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
import PageHeader from "@/components/page-header.vue";
import SettingBlock from "@/components/Settings/setting-block.vue";
import { SETTINGS, Setting } from "@/data/SETTING";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Settings",
  components: { SettingBlock, PageHeader }
})
export default class Settings extends Vue {
  SETTINGS: Setting[] = SETTINGS;
}
</script>

<style lang="scss">
.settings {
  &__blocks {
    display: grid;
    grid-row-gap: 20px;
  }
}
</style>