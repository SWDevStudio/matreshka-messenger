<template>
  <div class="setting-block">
    <div class="setting-block__header text text--small">
      <h5 class="setting-block__title">{{ settings.title }}</h5>
      <div class="setting-block__line border-bottom" />
    </div>
    <div class="pt-4 pl-2 pr-2 setting-block__list">
      <div
        class="setting-block__item"
        v-for="(setting, key) in settings.blocks"
        :key="key"
      >
        <span class="icon" :class="setting.icon" v-if="setting.icon" />
        <span class="text text--black">{{ setting.text }}</span>
        <f-toggle
          class="ml-auto"
          v-if="'checked' in setting"
          :model-value="setting.checked"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import FToggle from "@/components/form/f-toggle.vue";
import { Setting } from "@/data/SETTING";
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
@Options({
  name: 'SettingBlock',
  components: {FToggle}
})
export default class SettingBlock extends Vue {
  @Prop() settings?: Setting
}

</script>

<style lang="scss">
.setting-block {
  &__header {
    display: flex;
    gap: 15px;
  }

  &__line {
    flex: 1 1 auto;
  }

  &__list {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 30px;

    .icon {
      @include icon-font-size(30px);
    }
  }
}
</style>