<template>
  <div
    @click="$emit('update:modelValue', !modelValue)"
    class="f-toggle"
    :class="{
      'f-toggle--active': modelValue === true
    }"
  >
    <div class="f-toggle__swipe" />
  </div>
</template>

<script lang="ts">

import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Options({
  name: "FToggle",
})
export default class FToggle extends Vue {
  @Prop() modelValue?: boolean
}

</script>

<style lang="scss">
$width: 30;
$height: 17.5;
.f-toggle {
  box-sizing: border-box;
  width: $width + px;
  height: $height + px;
  border: 3px solid $color-toggle;
  border-radius: 25px;
  position: relative;
  cursor: pointer;

  &__swipe {
    transition: all 0.3s ease;
    position: absolute;
    border-radius: 100%;
    width: 7.5px;
    height: 7.5px;
    background-color: $color-toggle;
    left: 8%;
    @include absolute-center-horizontal();
  }

  &--active {
    .f-toggle__swipe {
      left: calc(92% - 7.5px);
    }
  }
}
</style>