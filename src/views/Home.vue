<template>
  <div class="layout">
    <h2>추천 앨범</h2>

    <preview-albums :info="previewAlbums"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PreviewAlbums from '../components/PreviewAlbums.vue';
import { previewAlbums } from './Home.dummy';

const Home = Vue.extend({
  components: {
    PreviewAlbums,
  },
  data() {
    return {
      previewAlbums,
    };
  },
});

export default Home;
</script>
