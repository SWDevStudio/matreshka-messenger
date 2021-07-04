<template>
  <header class="header-page border-bottom">
    <span class="icon-arrow-left" v-if="arrow" />
    <div class="header-page__title" :style="!arrow ? 'grid-column: 1/3' : ''">
      <slot name="title"></slot>
    </div>
    <div class="header-page__panel">
      <slot name="icon-panel" />
    </div>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import {Prop} from "vue-property-decorator";

@Options({
  name: "PageHeader"
})
export default class PageHeader extends Vue {
  @Prop({ default: true}) arrow!: boolean
}

</script>

<style lang="scss">
.header-page {
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 50px 2fr 1fr;
  grid-column-gap: 30px;
  color: $color-text--black;
  align-items: center;
  @include text(24px);

  .icon-arrow-left {
    @include icon-font-size(50px);
    cursor: pointer;
  }

  &__panel {
    span {
      @include icon-font-size(50px);
      cursor: pointer;
    }
    align-items: center;
    justify-self: right;

    display: flex;
    gap: 5px;
  }
}
</style>