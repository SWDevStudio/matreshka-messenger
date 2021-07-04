<template>
  <div class="chat-footer border-top pv-3 ph-4 d-flex gap-3 align-center">
    <span class="icon-clip icon"></span>
    <input-wrapper class="flex-basis-100">
      <input type="text" placeholder="Введите сообщение..."/>
    </input-wrapper>
    <span class="icon-emotion-laugh-line icon"></span>
    <span class="icon icon-microphone"></span>
  </div>
</template>

<script lang="ts">
import InputWrapper from "@/components/form/input-wrapper.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  name: "ChatFooter",
  components: { InputWrapper }
})
export default class ChatFooter extends Vue {}
</script>

<style lang="scss">
.chat-footer {
}
</style>
