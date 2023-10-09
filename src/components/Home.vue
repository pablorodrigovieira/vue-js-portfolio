<template>
  <section class="home">
    <div class="home__content">
      <h1>👋 Hi there,<br />I'm <strong>Pablo Vieira.</strong></h1>
      <p>Senior full-stack developer and Programming instructor.</p>
    </div>
    <div class="home__image">
      <img src="../assets/profile.webp" alt="Profile picture" width="220" height="220" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  gap: 2em;
  grid-template-areas:
    "content content"
    "image image";

  @media (min-width: 50em) {
    grid-template-areas: "content image";
  }

  &__content {
    grid-area: content;
    margin: auto;

    h1 {
      font-size: 2rem;
      line-height: 3.2rem;
    }
    strong {
      padding: 0 0.2em 0 0.1em;
      font-weight: bold;
      font-size: 2.5rem;
      background-position: top left;
      background-repeat: no-repeat;
      background-size: 0 auto;
      background-image: linear-gradient(to top, rgba(252, 177, 38, 65%) 100%, transparent 0);
      animation: animate-background 1s forwards;
    }
    p {
      margin-top: 1em;
      background-position: top left;
      background-repeat: no-repeat;
      background-size: 0 auto;
      background-image: linear-gradient(to top, rgba(252, 177, 38, 65%) 100%, transparent 0);
      animation: animate-background 1s forwards;
      animation-delay: 0.9s;
    }
  }
  &__image {
    grid-area: image;
    margin: 0 auto;
    @media (min-width: 50em) {
      padding: 2em;
    }
    img {
      max-width: 220px;
      border-radius: 50%;
      border: 3px solid rgba(255, 177, 38, 0.8);
      box-shadow:
        rgba(255, 177, 38, 0.4) 5px 0,
        rgba(255, 177, 38, 0.3) 10px 0,
        rgba(255, 177, 38, 0.2) 15px 0,
        rgba(255, 177, 38, 0.1) 20px 0,
        rgba(255, 177, 38, 0.05) 25px 0;
    }
  }
}

@keyframes animate-background {
  0% {
    background-size: 0 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}
</style>
