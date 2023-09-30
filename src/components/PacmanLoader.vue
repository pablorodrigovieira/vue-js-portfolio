<template>
  <div class="pacman-wrapper">
    <div class="pacman">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
</template>

<style scoped lang="scss">
$primaryClr: var(--color-yellow);
$ballSize: 10px;
$pacmanSize: $ballSize * 2.5;

.pacman-wrapper {
  background: rgba(0, 0, 0, 0.95);
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.pacman {
  position: relative;
  > div:nth-child(1),
  > div:nth-child(2) {
    width: 0;
    height: 0;
    border: $pacmanSize solid $primaryClr;
    border-right-color: transparent;
    border-radius: 50%;
    left: -$ballSize * 4;
    animation: rotate_pacman_half_up 0.5s infinite;
    position: relative;
  }
  > div:nth-child(2) {
    animation-name: rotate_pacman_half_down;
    margin-top: -($pacmanSize * 2);
  }
  > div:nth-child(3),
  > div:nth-child(4),
  > div:nth-child(5) {
    animation: pacman-balls 1s infinite linear;
    background-color: $primaryClr;
    border-radius: 50%;
    width: $ballSize;
    height: $ballSize;
    position: absolute;
    top: $ballSize * 2;
    left: $pacmanSize * 2;
  }
  > div:nth-child(3) {
    animation-delay: -0.66s;
  }
  > div:nth-child(4) {
    animation-delay: -0.33s;
  }
}

/* Pacman Animation Keyframes */
@keyframes rotate_pacman_half_up {
  0% {
    transform: rotate(270deg);
  }
  50% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes rotate_pacman_half_down {
  0% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(90deg);
  }
}

@keyframes pacman-balls {
  75% {
    opacity: 0.7;
  }
  100% {
    transform: translateX(-$pacmanSize * 2.5);
  }
}
</style>
