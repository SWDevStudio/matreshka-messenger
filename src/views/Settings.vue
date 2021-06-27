<template>
  <div class="settings">
    <page-header title="Настройки">
      <template v-slot:title>Настройки</template>
    </page-header>
    <div class="p-4 settings__blocks">
      <setting-block title="Важное">
        <div class="setting-block__item">
          <span class="icon icon-logo"/>
          <span class="text text--black">О проекте</span>
        </div>
      </setting-block>
      <setting-block title="Основные">
        <div class="setting-block__item">
          <span class="icon icon-share"/>
          <span class="text text--black">Режим offline</span>
          <f-toggle class="ml-auto" v-model="test" />
        </div>
      </setting-block>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/page-header.vue";
import SettingBlock from "@/components/Settings/setting-block.vue";
import FToggle from "@/components/form/f-toggle.vue";

export default defineComponent({
  name: "Settings",
  components: { FToggle, SettingBlock, PageHeader },
  data: () => ({
    test: false
  })
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