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
import { defineComponent } from "vue";
import InputWrapper from "@/components/form/input-wrapper.vue";

export default defineComponent({
  name: "ChatFooter",
  components: { InputWrapper }
});
</script>

<style lang="scss">
.chat-footer {
}
</style>
