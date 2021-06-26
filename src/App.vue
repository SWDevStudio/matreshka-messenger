<template>
  <div class="app">
    <header class="app__header header-app">
      <span class="icon-cros"/>
      <span class="icon-subtract"/>
      <span class="icon-logo"></span>
    </header>
    <div class="app__body">
      123
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.app {
  display: grid;
  grid-template-columns: 90px 1fr;
  grid-template-rows: 50px 1fr;
  min-width: 100vw;
  min-height: 100vh;
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
