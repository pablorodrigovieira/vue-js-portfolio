<template>
  <section class="section">
    <div class="mac-window active">
      <div class="title-bar">
        <div class="buttons">
          <div class="close" />
          <div class="minimize" />
          <div class="maximize" />
        </div>
        <div class="title">
          {{ getCurrentView }}
        </div>
      </div>
      <div class="window">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLayoutStore } from "@/stores/layout";
import { storeToRefs } from "pinia";

const store = useLayoutStore();
const { getCurrentView } = storeToRefs(store);
</script>

<style scoped lang="scss">
.section {
  display: flex;
  flex-grow: 1;
  margin-top: 85px;
  color: #000;

  @media (min-width: 1024px) {
    margin-top: 0;
  }
  .mac-window {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    border-radius: 5px;
    box-shadow: 0 15px 20px rgba(black, 0.7);
    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    .title-bar {
      background: rgb(208, 207, 208);
      background: linear-gradient(to top, rgb(200, 197, 200), rgb(234, 231, 234));
      border-bottom: 1px solid rgb(180, 180, 180);
      min-height: 35px;
      width: 100%;
      display: flex;
      align-items: center;
      .buttons {
        height: 100%;
        width: 60px;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .close {
          height: 15px;
          width: 15px;
          border-radius: 50%;
          background: rgb(251, 73, 72);
          border: solid 1px rgba(214, 46, 48, 0.15);
          &:hover {
            cursor: not-allowed;
          }
        }
        .minimize {
          @extend .close;
          background: rgb(253, 178, 37);
          margin-left: 10px;
          border-color: rgba(213, 142, 27, 0.15);
        }
        .maximize {
          @extend .close;
          margin-left: 10px;
          background: rgb(42, 200, 51);
          border-color: rgba(30, 159, 32, 0.15);
        }
      }
      .title {
        text-align: center;
        font-size: 0.9em;
        color: rgb(34, 32, 34);
        width: 100%;
        padding-right: 30px;
        font-weight: bold;
      }
    }
    .window {
      background: white;
      overflow-y: scroll;
      min-height: 100%;
      padding: 1em;
    }
  }
}
</style>
