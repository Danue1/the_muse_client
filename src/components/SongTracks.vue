<template>
  <div class="songtracks">
    <song-track
      v-for="(track, index) in info"
      :key="index"
      :index="index"
      :info="track"
      :isClicked="tracks.includes(track)"
      @click.native="toggleTrack(track)"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { State, namespace } from 'vuex-class';

import { TrackModel } from '../Models';
import { ActionKind } from '../store/SelectedTracks';
import SongTrack from './SongTrack.vue';

const SelectedTracksStore = namespace('SelectedTracks');

@Component({
  components: {
    SongTrack,
  },
})
class SongTracks extends Vue {
  @Prop([Array])
  private readonly info!: [TrackModel, TrackModel, TrackModel, TrackModel];

  @SelectedTracksStore.State(({ selected }) => selected)
  private readonly tracks!: TrackModel[];

  @SelectedTracksStore.Action(ActionKind.Reset)
  private readonly reset!: () => Promise<void>;

  @SelectedTracksStore.Action(ActionKind.Toggle)
  private readonly toggleTrack!: (track: TrackModel) => Promise<void>;

  private created() {
    this.reset();
  }

  private destroyed() {
    this.reset();
  }
}

export default SongTracks;
</script>

<style scoped>
.songtracks {
  border-top: 1px solid hsl(0, 0%, 84%);
}
</style>
