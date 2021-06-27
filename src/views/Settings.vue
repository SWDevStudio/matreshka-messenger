<template>
  <div class="settings">
    <page-header title="Настройки"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageHeader from "@/components/page-header.vue";

export default defineComponent({
  name: "Settings",
  components: { PageHeader }
});
</script>

<style lang="scss"></style>