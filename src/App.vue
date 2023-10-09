<template>
  <div class="wrapper">
    <Sidebar />
    <main class="content">
      <Window>
        <Home />
        <AboutMe />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </Window>
    </main>
  </div>
</template>

<script setup lang="ts">
import Sidebar from "@/components/Sidebar.vue";
import Window from "@/components/Window.vue";
import Home from "@/components/Home.vue";
import AboutMe from "@/components/AboutMe.vue";
import Experience from "@/components/Experience.vue";
import Education from "@/components/Education.vue";
import Resume from "@/components/Resume.vue";
import Contact from "@/components/Contact.vue";
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
