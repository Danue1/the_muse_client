<template>
  <div class="layout">
    <h2>추천 앨범</h2>

    <preview-albums v-if="info.length" :info="info"/>

    <div v-if="!info.length">앨범 목록을 불러오는 중입니다.</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import PreviewAlbums from '../components/PreviewAlbums.vue';
import { loadPreviewAlbums } from '../services';
import { PreviewAlbumModel } from '../Models';

@Component({
  components: {
    PreviewAlbums,
  },
})
class Home extends Vue {
  private info: PreviewAlbumModel[] = [];

  private async created() {
    this.info = await loadPreviewAlbums();
  }
}

export default Home;
</script>
