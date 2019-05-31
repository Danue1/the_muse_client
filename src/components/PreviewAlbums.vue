<template>
  <div class="preview-albums">
    <preview-album v-for="album in info" :key="album.to" :info="album"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import PreviewAlbum from './PreviewAlbum.vue';
import { PreviewAlbumModel } from '../Models';

@Component({
  components: {
    PreviewAlbum,
  },
})
class PreviewAlbums extends Vue {
  @Prop([Array])
  private readonly info!: [
    PreviewAlbumModel,
    PreviewAlbumModel,
    PreviewAlbumModel,
    PreviewAlbumModel
  ];
}

export default PreviewAlbums;
</script>

<style lang="scss" scoped>
.preview-albums {
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(2, 1fr);

  padding: 0 0.5rem;

  @media (min-width: 32rem) {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
