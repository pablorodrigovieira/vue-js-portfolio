<script lang="ts">
import { defineComponent } from "vue";
import PacmanLoader from "@/components/PacmanLoader.vue";
export default defineComponent({
  components: { PacmanLoader }
});
</script>

<template>
  <img src="./assets/logo.svg" alt="PV Logo" class="logo" />

  <div class="wrapper">
    <h2>Coming soon!</h2>
    <PacmanLoader />
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100%;

  h2 {
    color: var(--color-text);
    margin-bottom: 50px;
  }
}

.logo {
  width: 30vw;
  max-width: 150px;
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
