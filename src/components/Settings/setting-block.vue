<template>
  <div class="setting-block">
    <div class="setting-block__header">
      <h5 class="setting-block__title">{{ title }}</h5>
      <div class="setting-block__line border-bottom"/>
    </div>
    <div class="pt-4 pl-2 pr-2 setting-block__list">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SettingBlock",
  props: {
    title: {
      type: String
    }
  }
});
</script>

<style lang="scss">
.setting-block {
  &__header {
    @include text(18px);
    color: $color-text;
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
      @include icon-font-size(30px)
    }
  }
}
</style>