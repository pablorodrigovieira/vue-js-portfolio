<template>
  <aside :class="`${getIsExpanded ? 'is-expanded' : ''}`">
    <div class="logo">
      <img src="../assets/logo.svg" alt="PV Logo" width="56" height="56" />
    </div>

    <div class="menu-toggle-wrap">
      <span class="menu-toggle icon" @click="setIsExpanded">
        <component :is="IconAnglesRight" />
      </span>
    </div>

    <div class="menus">
      <div class="menu">
        <hr />
        <div
          class="button"
          v-for="btn in arrayOfButtons"
          :key="btn.name"
          :class="getCurrentView === btn.name ? 'active' : ''"
          @click="setCurrenView(btn.name)"
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
  </aside>
</template>

<script setup lang="ts">
import { useLayoutStore } from "@/stores/layout";
import { storeToRefs } from "pinia";
import IconHome from "@/components/icons/IconHome.vue";
import IconAnglesRight from "@/components/icons/IconAnglesRight.vue";
import IconAddressCard from "@/components/icons/IconAddressCard.vue";
import IconBriefcase from "@/components/icons/IconBriefcase.vue";
import IconGraduationCap from "@/components/icons/IconGraduationCap.vue";
import IconFilePdf from "@/components/icons/IconFilePdf.vue";
import IconEnvelope from "@/components/icons/IconEnvelope.vue";
import IconLinkedIn from "@/components/icons/IconLinkedIn.vue";
import IconGitHub from "@/components/icons/IconGitHub.vue";

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

const store = useLayoutStore();
const { setIsExpanded, setCurrenView } = store;
const { getIsExpanded, getCurrentView } = storeToRefs(store);
</script>

<style scoped lang="scss">
aside {
  display: flex;
  flex-direction: column;
  width: calc(3rem + 32px);
  overflow: hidden;
  transition: 0.2s ease-out;

  &.is-expanded {
    width: 300px;
    .menu-toggle-wrap {
      top: -3rem;
      justify-content: flex-end;
      padding-right: 0.7rem;
      padding-left: 0.7rem;
      .menu-toggle {
        transform: rotate(-180deg);
      }
    }

    .button .text {
      opacity: 1;
    }
  }
  //@media (max-width: 768px) {
  //  position: fixed;
  //}
}

.logo {
  padding-top: 0.7rem;
  padding-left: 0.7rem;

  img {
    width: 3.5rem;
  }
}

.menu-toggle-wrap {
  display: flex;
  margin-bottom: 1rem;
  position: relative;
  top: 0;
  transition: 0.2s ease-out;
  justify-content: center;
  margin-right: 0.7rem;
  padding-left: 0.7rem;

  .menu-toggle {
    transition: 0.2s ease-out;
    background: transparent;
    border: none;
    cursor: pointer;
    margin: 0;
    .icon {
      font-size: 1.5rem;
      color: white;
      transition: 0.2s ease-out;
    }
    &:hover {
      .icon {
        color: var(--color-yellow);
        transition: 0.2s ease-in-out;
        transform: translateX(0.3rem);
      }
    }
  }
}

.button .text {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

svg {
  fill: white;
  width: 1.5rem;
  &:hover {
    fill: var(--color-yellow);
  }
}

.menus {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
}

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
      justify-content: space-between;
      align-items: center;
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
}
</style>