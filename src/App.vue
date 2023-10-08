<template>
  <div class="wrapper">
    <Sidebar />
    <div class="content">
<!--      <Modal />-->
    </div>
    <PacmanLoader v-if="getIsLoading" />
  </div>
</template>

<script setup lang="ts">
import PacmanLoader from "@/components/PacmanLoader.vue";
import Sidebar from "@/components/Sidebar.vue";
import Modal from "@/components/Modal.vue";
import { useLayoutStore } from "@/stores/layout";
import { storeToRefs } from "pinia";

const store = useLayoutStore();
const { getIsLoading } = storeToRefs(store);
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  flex-direction: row;
  min-height: 100%;
  width: 100%;

  h2 {
    color: black;
    margin-bottom: 50px;
  }

  .content {
    flex: 1 1 0;
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    overflow: hidden;

    @media (max-width: 768px) {
      padding-left: 1rem;
    }
  }
}
</style>
