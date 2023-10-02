<template>
  <div class="hamburger" @click="() => handleMenu">
    <div
      class="bar"
      v-for="(bar, index) in [1, 2, 3]"
      :key="index"
      :class="{ active: isActive }"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isActive: Boolean,
  handleMenu: Function
});
</script>

<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 35px;
  height: 30px;
  position: relative;
}

.bar {
  width: 100%;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}

.bar.active:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.bar.active:nth-child(2) {
  opacity: 0;
}

.bar.active:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}
</style>
