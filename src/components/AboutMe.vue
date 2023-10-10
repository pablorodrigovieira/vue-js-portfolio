<script setup lang="ts"></script>

<template>
  <section id="about" class="about">
    <div>
      <h2>About Me</h2>
      <p>
        I'm a Computer science expert with 10+ years of experience leading the delivery of digital
        solutions to renowned clients, such as Mercedes Benz, Telstra, the NSW Government, Oppo, and
        Microsoft's Xbox, among others. Strong commercial awareness, effective communication and
        leadership, advanced coding skills, and a result-driven mindset. Sound knowledge of Agile
        methodologies and extensive experience using a variety of programming languages, frameworks,
        and technologies.
      </p>
      <h3>Skills</h3>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss/mixin";

section{
  @include default-content;
}

.about {
  h2 {
    margin: 1em 0;
  }
  p {
    margin-bottom: 1em;
  }
}
</style>
