<template>
  <div class="app">
    <header class="app__header header-app">
      <span class="icon-cros" />
      <span class="icon-subtract" />
      <span class="icon-logo"></span>
    </header>
    <aside-menu/>
    <router-view class="--wrapper"/>
  </div>
</template> c
<script>
import { defineComponent } from "vue";
import AsideMenu from "@/components/aside-menu";
export default defineComponent({
  components: { AsideMenu }
});
</script>
<style lang="scss">
.app {
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 50px calc(100vh - 50px);
  min-width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: $color-background;
  &__header {
    grid-column: 1 / 3;
    background-color: $color-background-header;
  }
}
.header-app {
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  gap: 20px;
  align-items: center;
  padding: 0 20px;
  span {
    @include icon-font-size(40px);
    cursor: pointer;
  }
  .icon-logo {
    @include absolute-center-vertical();
    cursor: auto;
  }
}
</style>
