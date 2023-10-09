<template>
  <div class="wrapper">
    <Sidebar />
    <main class="content">
      <Window> CONTENT HERE </Window>
    </main>
    <!--    <PacmanLoader v-if="getIsLoading" />-->
  </div>
</template>

<script setup lang="ts">
// import PacmanLoader from "@/components/PacmanLoader.vue";
import Sidebar from "@/components/Sidebar.vue";
// import Modal from "@/components/Modal.vue";
import { useLayoutStore } from "@/stores/layout";
// import { storeToRefs } from "pinia";
import Window from "@/components/Window.vue";

const store = useLayoutStore();
// const { getIsLoading } = storeToRefs(store);
</script>

<style scoped lang="scss">
.wrapper {
  min-width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @media (min-width: 50em) {
    flex-direction: row;
  }

  .content {
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    display: flex;
    flex-grow: 1;
  }
}
</style>
