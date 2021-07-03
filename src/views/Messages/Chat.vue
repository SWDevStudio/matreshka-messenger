<template>
  <div class="chat">
    <page-header>
      <template v-slot:title>
        <div class="d-flex align-center gap-2">
          <img
            src="/img/icon-logo.png"
            alt="icon-logo"
            class="icon-user-logo"
          />
          Name
        </div>
      </template>
      <template v-slot:icon-panel>
        <div class="d-flex gap-4">
          <span class="icon-volume" />
          <span class="icon-star-line" />
          <span class="icon-point-more"></span>
        </div>
      </template>
    </page-header>
    <div class="chat__body ph-3">
      <div v-for="item in new Array(100)" :key="item">
        123123
      </div>
    </div>
    <chat-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/page-header.vue";
import ChatFooter from "@/components/Chat/chat-footer.vue";
export default defineComponent({
  name: "Chat",
  components: { PageHeader, ChatFooter }
});
</script>

<style lang="scss">
.chat {
  display: grid;
  grid-template-rows: auto 1fr auto;
  &__body {
    @include set-scrollbar(5px, $color-important);
    overflow-y: auto;
  }
}
</style>
