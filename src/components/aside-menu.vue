<template>
  <div class="aside-menu">
    <div class="aside-menu__group">
      <span class="icon-plus" />
      <span class="icon-star-line" />
<!--      <router-link to="/">-->
        <router-link class="icon-settings" :to="Routers.settings"/>
<!--      </router-link>-->

      <span class="icon-search" />
    </div>
    <div class="aside-menu__group">
      <span class="icon-vk-circle"/>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Routers } from '@/data/Routers';

export default defineComponent({
  name: "aside-menu",
  data: () => ({
    Routers
  })
});
</script>

<style lang="scss">
.aside-menu {
  @include set-scrollbar();
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
}
</style>
