<template>
  <router-link
    to="/"
    class="message-item pv-3 ph-4 border-bottom"
    v-if="messageInfo"
  >
    <img :src="messageInfo.img" alt="" class="icon-user-logo" />
    <div class="message-item__info text">
      <div class="message-item__user-info">
        <span class="text--black">{{ messageInfo.userName }}</span>
        <span class="icon icon-volume-mute text--important" />
      </div>
      <div class="message-item__user-info">
        <span class="message-item__circle" v-if="messageInfo.unreadMessage" />
        <span class="text">
          {{ messageInfo.lastTimeMessage }}
        </span>
      </div>
    </div>
    <div class="text text--black text--small">
      {{ messageInfo.lastMessage }}
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MessageItemProp } from "@/struct/components/wall/MessageItem";

export default defineComponent({
  name: "MessageItem",
  props: {
    messageInfo: {
      type: Object as () => MessageItemProp,
      required: true
    }
  }
});
</script>

<style lang="scss">
.message-item {
  display: grid;
  grid-row-gap: 10px;
  grid-column-gap: 20px;
  grid-template-columns: 70px 1fr;
  grid-template-rows: repeat(2, 1fr);

  &__info {
    display: flex;
    justify-content: space-between;
    align-self: end;
  }

  &__user-info {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__circle {
    width: 12px;
    height: 12px;
    border-radius: 100%;
    background-color: $color-important;
  }

  .icon-user-logo {
    grid-row: 1 / 3;
  }
}
</style>