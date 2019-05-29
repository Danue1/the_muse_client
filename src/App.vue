<template>
  <div>
    <CustomHeader/>

    <div class="main-layout">
      <div class="layout">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import CustomHeader from './components/CustomHeader.vue';

const App = Vue.extend({
  components: {
    CustomHeader,
  },
});

export default App;
</script>


<style>
* {
  box-sizing: border-box;
}

html {
  font-size: 16px;
}

html,
body {
  margin: 0;
  padding: 0;
}
</style>

<style lang="scss" scoped>
.main-layout {
  position: relative;

  width: 100%;
  height: calc(100vh - 3.5rem);

  margin-top: 3.5rem;
  padding: 0 1rem;

  .layout {
    max-width: 64rem;

    margin: 0 auto;
  }
}
</style>
