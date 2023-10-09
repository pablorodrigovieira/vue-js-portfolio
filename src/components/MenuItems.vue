<template>
  <div class="menus">
    <div class="menu">
      <hr />
      <div
        class="button"
        v-for="btn in arrayOfButtons"
        :key="btn.name"
        :class="getCurrentView === btn.name ? 'active' : ''"
        @click="handleCurrentView(btn.name)"
      >
        <div class="item">
          <span class="icon" :class="getCurrentView === 'home' ? 'active' : ''">
            <component :is="btn.svg" />
          </span>
          <span class="text">
            {{ btn.name }}
          </span>
        </div>
      </div>
      <hr />
    </div>

    <div class="menu">
      <div
        class="button"
        v-for="link in arrayOfLinks"
        :key="link.name"
        :class="getCurrentView === link.name ? 'active' : ''"
      >
        <a class="item" :href="link.url" target="_blank" rel="noopener noreferrer">
          <span class="icon" :class="getCurrentView === 'home' ? 'active' : ''">
            <component :is="link.svg" />
          </span>
          <span class="text">
            {{ link.name }}
          </span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHome from "@/components/icons/IconHome.vue";
import IconAddressCard from "@/components/icons/IconAddressCard.vue";
import IconBriefcase from "@/components/icons/IconBriefcase.vue";
import IconGraduationCap from "@/components/icons/IconGraduationCap.vue";
import IconFilePdf from "@/components/icons/IconFilePdf.vue";
import IconEnvelope from "@/components/icons/IconEnvelope.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";
import { storeToRefs } from "pinia";
import { useLayoutStore } from "@/stores/layout";

defineProps({
  isActive: Boolean,
  handleMenu: Function
});

const store = useLayoutStore();
const { setCurrenView } = store;
const { getCurrentView } = storeToRefs(store);

function handleCurrentView(btnName: string) {
  // if (isMobileScreen) {
  //   handleMenu();
  // }
  setCurrenView(btnName);
}
const arrayOfButtons = [
  {
    name: "Home",
    svg: IconHome
  },
  {
    name: "About",
    svg: IconAddressCard
  },
  {
    name: "Experience",
    svg: IconBriefcase
  },
  {
    name: "Education",
    svg: IconGraduationCap
  },
  {
    name: "Resume",
    svg: IconFilePdf
  },
  {
    name: "Contact",
    svg: IconEnvelope
  }
];
const arrayOfLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/pablorodrigovieira/",
    svg: IconLinkedIn
  },
  {
    name: "GitHub",
    url: "https://github.com/pablorodrigovieira",
    svg: IconGitHub
  }
];
</script>

<style scoped>
.menus {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
  animation: fade-in 0.5s forwards;
  .menu {
    margin: 0;
    hr {
      border: none;
      height: 1px;
      background-color: gray;
    }
    .button {
      width: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      margin-bottom: 0.1rem;
      padding: 0.5rem 0.7rem 0.5rem 1.4rem;
      border-right: 5px solid transparent;
      .icon {
        font-size: 1.5rem;
        color: white;
        transition: 0.2s ease-in-out;
        margin-top: 0.3rem;
        margin-left: 0.3rem;
      }
      .text {
        color: white;
        transition: 0.2s ease-in-out;
      }

      .item {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        width: 100%;
        text-decoration: none;
        :nth-child(2) {
          width: 83%;
        }
      }

      &:hover {
        .icon,
        .text {
          color: var(--color-yellow);
        }
        svg {
          fill: var(--color-yellow);
        }
        background: rgb(255, 255, 255, 0.1);
      }

      &.active {
        border-right: 5px solid var(--color-yellow);
        transition: border-right 0.2s ease-in;
        background: rgb(255, 255, 255, 0.1);

        .icon,
        .text {
          color: var(--color-yellow);
        }

        svg {
          fill: var(--color-yellow);
        }
      }

      &:first-child {
        margin-top: 0.7rem;
      }
    }

    .menu-button {
      transition: opacity 0.5s ease-in-out;
    }
  }
}
</style>
