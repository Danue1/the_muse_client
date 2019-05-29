<template>
  <div class="fixed-layout">
    <div class="layout">the Muse</div>
  </div>
</template>

<style lang="scss" scoped>
.fixed-layout {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 3.5rem;

  padding: 0 1rem;

  background-color: white;
  box-shadow: 0 0 0 1px hsl(0, 0, 84%);
}

.layout {
  display: grid;
  align-items: center;

  max-width: 64rem;
  height: 100%;

  margin: 0 auto;
}
</style>
