<template>
  <div class="wall">
    <page-header :arrow="false">
      <template v-slot:title>
        {{ NETWORK.name }}
      </template>
      <template v-slot:icon-panel>
        <span class="icon-account-group" />
        <span class="icon-volume" />
        <img
          src="/img/icon-logo.png"
          alt="icon-logo"
          class="icon-user-logo icon-logo--small"
        />
      </template>
    </page-header>
    <div class="wall__body">
      <message-item
        v-for="(item, key) in messages"
        :key="key"
        :message-info="item"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NETWORKS, NetworksType } from "@/data/NETWORKS";
import PageHeader from "@/components/page-header.vue";
import MessageItem from "@/components/wall/message-item.vue";
import { MessageItemProp } from "@/struct/components/wall/MessageItem";

interface Data {
  NETWORK: NetworksType | null;
  messages: MessageItemProp[];
}

export default defineComponent({
  name: "Wall",
  components: { MessageItem, PageHeader },
  data(): Data {
    return {
      NETWORK: null,
      messages: [
        {
          userName: "Kotaro",
          lastMessage: "Hello brother",
          lastTimeMessage: "11:53",
          unreadMessage: true,
          img: "/img/icon-logo.png"
        },
        {
          userName: "Alina",
          lastMessage: "How are you?",
          lastTimeMessage: "Вчера",
          unreadMessage: false,
          img: "/img/icon-logo.png"
        }
      ]
    };
  },
  created() {
    this.NETWORK = NETWORKS.find(i => i.id === ~~this.$route.params.id) || null;
    // this.NETWORK = null
    // console.log(123);
  },
  watch: {
    "$route.params.id"() {
      this.$forceUpdate();
    }
  }
});
</script>

<style lang="scss"></style>