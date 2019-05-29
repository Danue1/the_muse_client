<template>
  <div class="layout">
    <preview-album v-for="album in info" :key="album.to" :info="album"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import PreviewAlbum from './PreviewAlbum.vue';

const PreviewAlbums = Vue.extend({
  props: {
    // [PreviewAlbumModel, PreviewAlbumModel, PreviewAlbumModel, PreviewAlbumModel]
    info: Array,
  },
  components: {
    PreviewAlbum,
  },
});

export default PreviewAlbums;
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 32rem) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
