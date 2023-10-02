<template>
  <div class="section">
    <div class="mac-window" :class="[getIsExpanded ? 'active' : 'active-wide', currentClassName]">
      <div class="title-bar">
        <div class="buttons">
          <div class="close" @click="closeModal"></div>
          <div class="minimize" @click="setClassName('minimize')"></div>
          <div class="maximize" @click="setClassName('maximize')"></div>
        </div>
        <div class="title">
          {{ getCurrentView }}
        </div>
      </div>
      <div class="window">Content</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useLayoutStore } from "@/stores/layout";
import { storeToRefs } from "pinia";

const store = useLayoutStore();
const { getIsExpanded, getCurrentView } = storeToRefs(store);

const currentClassName = ref("");

// const openModal = () => {
//   isModalOpen.value = true;
//   setClassName("");
// };

const closeModal = () => {
  setClassName("");
};

const setClassName = (className: string) => {
  if (currentClassName.value === "minimize" && className === "minimize") {
    currentClassName.value = "";
  } else if (currentClassName.value === "maximize" && className === "maximize") {
    currentClassName.value = "";
  } else {
    currentClassName.value = className;
  }
};
</script>

<style scoped lang="scss">
.section {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  .content {
    width: 100%;
    text-align: center;
  }
}

.mac-window {
  border-radius: 5px;
  overflow: hidden;
  height: 100%;
  max-height: 80%;
  width: 85vw;
  max-width: 75vw;
  box-shadow: 0 15px 20px rgba(black, 0.7);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%) scale(0);
  opacity: 0;
  transition: all 0.25s;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 75vw;
  }
  &.active {
    transform: translateY(-50%) translateX(calc(-50% + 150px)) scale(1);
    opacity: 1;
  }
  &.active-wide {
    transform: translateY(-50%) translateX(-50%) scale(1);
    opacity: 1;
    @media (min-width: 768px) and (max-width: 1200px) {
      transform: translateY(-50%) translateX(-44%) scale(1);
    }
  }
  &.minimize {
    top: 125%;
    transform: translateY(-50%) translateX(calc(-50% + 150px)) scale(1);
    opacity: 1;
    transition: all 0.5s;
  }
  &.maximize {
    height: 100%;
    max-height: 100%;
    width: 100%;
    max-width: 100%;
    transform: translateY(-50%) translateX(-50%) scale(1);
  }
  .title-bar {
    background: rgb(208, 207, 208);
    background: linear-gradient(to top, rgb(200, 197, 200), rgb(234, 231, 234));
    border-bottom: 1px solid rgb(180, 180, 180);
    height: 35px;
    width: 100%;
    display: flex;
    align-items: center;
    .buttons {
      height: 100%;
      width: 60px;
      margin-left: 10px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .close {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background: rgb(251, 73, 72);
        border: solid 1px rgba(214, 46, 48, 0.15);
        opacity: 0.2;
        &:hover {
          cursor: not-allowed;
        }
      }
      .minimize {
        @extend .close;
        background: rgb(253, 178, 37);
        margin-left: 10px;
        border-color: rgba(213, 142, 27, 0.15);
        opacity: 1;
        &:hover {
          cursor: pointer;
        }
      }
      .maximize {
        @extend .close;
        margin-left: 10px;
        background: rgb(42, 200, 51);
        border-color: rgba(30, 159, 32, 0.15);
        opacity: 1;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .title {
      text-align: center;
      line-height: 21px;
      font-size: 13px;
      color: rgb(34, 32, 34);
      width: 100%;
      padding-right: 30px;
    }
  }
  .window {
    background: white;
    overflow-y: scroll;
    height: 100%;
  }
}
</style>
