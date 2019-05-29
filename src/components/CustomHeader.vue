<template>
  <div class="fixed-layout">
    <div class="layout">
      <div class="hamburger-icon">
        <hamburger/>
      </div>

      <div class="title">the Muse</div>

      <div class="search-icon">
        <search/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import Hamburger from '../icons/Hamburger.vue';
import Search from '../icons/Search.vue';

const CustomHeader = Vue.extend({
  components: {
    Hamburger,
    Search,
  },
});

export default CustomHeader;
</script>

<style lang="scss" scoped>
.fixed-layout {
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 3.5rem;

  padding: 0 1rem;

  background-color: white;
  box-shadow: 0 0 0 1px hsl(0, 0%, 84%);

  .layout {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;

    max-width: 64rem;
    height: 100%;

    margin: 0 auto;

    .hamburger-icon,
    .search-icon {
      width: 2.5rem;
      height: 2.5rem;

      padding: 0.5rem;

      &:hover {
        background-color: hsl(0, 0%, 96%);
      }
    }

    .title {
      width: min-content;

      margin: 0 auto;

      white-space: nowrap;
      font-weight: bolder;
    }
  }
}
</style>
