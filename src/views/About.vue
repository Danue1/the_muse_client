<template>
  <div class="about">
    <album v-if="album" :info="album"/>

    <div v-if="!album">앨범 정보를 불러오는 중입니다.</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Route } from 'vue-router';

import Album from '../components/Album.vue';
import { AlbumModel } from '../Models';
import { loadAlbumInfoById } from '../services';

interface RouteParams {
  readonly imageId: string;
}

@Component({
  components: {
    Album,
  },
})
class About extends Vue {
  public $route!: Route;

  private album: null | AlbumModel = null;

  private async created() {
    const { imageId } = this.$route.params;

    this.album = await loadAlbumInfoById(+imageId);
  }
}

export default About;
</script>
