<template>
  <div class="settings">
    <header-page />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderPage from "@/components/header-page.vue";

export default defineComponent({
  name: "Settings",
  components: { HeaderPage }
});
</script>

<style lang="scss"></style>
