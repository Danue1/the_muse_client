<template>
  <div class="album">
    <div class="title">
      <h2 class="name">{{info.name}}</h2>
    </div>

    <song-tracks :info="info.tracks"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import SongTracks from './SongTracks.vue';
import { AlbumModel, TrackModel } from '../Models';

interface ImageStyle {
  readonly 'background-image': string;
}

@Component({
  components: {
    SongTracks,
  },
})
class Album extends Vue {
  @Prop([AlbumModel])
  private readonly info!: AlbumModel;
}

export default Album;
</script>

<style lang="scss" scoped>
.album {
  .title {
    padding: 0 0.5rem;

    .name {
      padding-top: 1rem;
    }
  }
}
</style>
