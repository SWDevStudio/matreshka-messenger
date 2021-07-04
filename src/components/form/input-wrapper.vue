<template>
  <div class="input-wrapper text">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  name: "InputWrapper",
})
export default class InputWrapper extends Vue {
}
</script>

<style lang="scss">

.input-wrapper {
  input {
    font-family: $font-main;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border-radius: 25px;
    border: 2px solid $color-border;
    padding-left: 29px;
    caret-color: $color-text;
  }
}
</style>