<template>
  <div class="network-login">
    <div class="network-login__name">
      <div class="border-bottom" />
      <span class="text">Vk</span>
      <div class="border-bottom"></div>
    </div>

    <div class="network-login__form">
      <input-wrapper class="mb-6">
        <span class="icon icon-account"></span>
        <input type="text" placeholder="Логин" v-model="form.login" />
      </input-wrapper>
      <input-wrapper class="mb-12">
        <span class="icon icon-key-line"></span>
        <input
          :type="showPassword ? 'text' : 'password'"
          placeholder="Пароль"
          v-model="form.password"
        />
        <span
          class="icon"
          :class="showPassword ? 'icon-eye' : 'icon-eye-close'"
          @click="toggleShowPassword"
          style="right: 20px; left: auto; cursor: pointer"
        ></span>
      </input-wrapper>
      <button class="btn" @click="startLogin">Войти</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
import { NetworksType } from "@/data/NETWORKS";
import InputWrapper from "@/components/form/input-wrapper.vue";

export interface NetworkLoginForm {
  login: string;
  password: string;
  authCode: string;
}

@Options({
  name: "NetworkLogin",
  components: { InputWrapper }
})
export default class NetworkLogin extends Vue {
  //Store state-getters
  //Prop
  @Prop() network!: NetworksType;
  //Data
  showPassword: boolean = false;
  form: NetworkLoginForm = {
    login: "",
    password: "",
    authCode: ""
  };
  //Computed
  //Ref
  //Hooks
  //Store actions-mutation
  //Methods
  toggleShowPassword(): void {
    this.showPassword = !this.showPassword;
  }

  async startLogin(): Promise<void> {
    console.log("123");
    const resp = await this.network.api.login(
      this.form.login,
      this.form.password
    );
  }
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
