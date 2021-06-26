<template>
  <div class="aside-menu">
    <div class="aside-menu__group">
      <span class="icon-plus" />
      <span class="icon-star-line" />
      <span class="icon-settings" />
      <span class="icon-search" />
    </div>
    <div class="aside-menu__group">
      <span class="icon-vk-circle"/>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "aside-menu"
});
</script>

<style lang="scss">
.aside-menu {
  overflow: auto;
  max-height: 100%;
  background-color: $color-background-aside;
  color: $color-text;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  gap: 30px;
  &__group {
    display: flex;
    gap: 15px;
    flex-direction: column;
    @include icon-font-size(70px);
    span {
      cursor: pointer;
    }
  }
  &::-webkit-scrollbar {
    width: 3px;               /* ширина scrollbar */
  }
  &::-webkit-scrollbar-track {
    background: transparent;        /* цвет дорожки */
  }
  &::-webkit-scrollbar-thumb {
    background-color: $color-text;    /* цвет плашки */
    border-radius: 20px;       /* закругления плашки */
    border: 1px solid rgba(0, 0,0,0);  /* padding вокруг плашки */
  }
}
</style>
