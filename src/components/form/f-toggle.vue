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
import { defineComponent } from "vue";

export default defineComponent({
  name: "FToggle",
  props: {
    modelValue: {
      type: Boolean
    }
  }
});
</script>

<style lang="scss">
.f-toggle {
  box-sizing: border-box;
  width: 30px;
  height: 17.5px;
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