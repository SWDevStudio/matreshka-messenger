<template>
  <div class="network-login">
    <div class="network-login__name">
      <div class="border-bottom" />
      <span class="text">Vk</span>
      <div class="border-bottom"></div>
    </div>

    <div class="network-login__form">
      <input-wrapper class="mb-6">
        <span class="icon icon-key-line"></span>
        <input type="text" placeholder="Логин">
      </input-wrapper>
      <input-wrapper class="mb-12">
        <span class="icon icon-key-line"></span>
        <input type="password" placeholder="Пароль">
        <span class="icon icon-eye-close" style="right: 20px; left: auto"></span>
      </input-wrapper>
      <button class="btn">Войти</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { NetworksType } from "@/data/NETWORKS";
import InputWrapper from "@/components/form/input-wrapper.vue";

@Options({
  name: "NetworkLogin",
  components: { InputWrapper }
})
export default class NetworkLogin extends Vue {
  //Store state-getters
  //Prop
  @Prop() network!: NetworksType;
  //Data
  //Computed
  //Ref
  //Hooks
  //Store actions-mutation
  //Methods
}
</script>
<style lang="scss">
.network-login {
  &__name {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-column-gap: 15px;
    margin: 60px 0;
  }
  &__form {
    text-align: center;
    .input-wrapper {
      height: 70px;
      position: relative;
      .icon {
        position: absolute;
        margin: auto 0;
        font-size: 50px;
        width: 50px;
        display: flex;
        align-items: center;
        top: 0;
        left: 20px;
        bottom: 0;
      }
      input {
        padding-left: 90px;
      }
    }
  }
}
</style>