<template>
  <div v-if="tracks.length" class="track-selector">
    <div class="layout">
      <div class="left">{{title}}</div>

      <div class="right">
        <div class="play" @click="setTracks()">
          <div class="play-icon">
            <play-icon/>
          </div>재생
        </div>

        <div class="add" @click="addTracks()">
          <div class="add-icon">
            <plus-icon/>
          </div>담기
        </div>

        <div class="cancel" @click="resetSelectedTracks()">
          <div class="cancel-icon">
            <cancel-icon/>
          </div>선택 해제
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import PlayIcon from '../icons/RightArrow.vue';
import PlusIcon from '../icons/Plus.vue';
import CancelIcon from '../icons/Cross.vue';
import { TrackModel } from '../Models';
import { ActionKind as SelectedTracksActionKind } from '../store/SelectedTracks';
import { ActionKind as PlaylistActionKind } from '../store/Playlist';

const SelectedTracksStore = namespace('SelectedTracks');
const PlaylistStore = namespace('Playlist');

@Component({
  components: {
    PlayIcon,
    PlusIcon,
    CancelIcon,
  },
})
class TrackSelector extends Vue {
  @SelectedTracksStore.State(({ selected }) => selected)
  private readonly tracks!: TrackModel[];

  @PlaylistStore.Action(PlaylistActionKind.Set)
  private readonly setTracksToStore!: (tracks: TrackModel[]) => void;

  @PlaylistStore.Action(PlaylistActionKind.Add)
  private readonly addTracksToStore!: (tracks: TrackModel[]) => void;

  @SelectedTracksStore.Action(SelectedTracksActionKind.Reset)
  private readonly resetSelectedTracks!: () => void;

  private setTracks() {
    this.setTracksToStore(this.tracks);
    this.resetSelectedTracks();
  }

  private addTracks() {
    this.addTracksToStore(this.tracks);
    this.resetSelectedTracks();
  }

  private get title() {
    const count = this.tracks.length;
    return `${count}개 트랙`;
  }
}

export default TrackSelector;
</script>

<style lang="scss" scoped>
.track-selector {
  position: fixed;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 3.5rem;

  padding: 0 0.5rem;

  white-space: nowrap;
  background-color: white;
  box-shadow: 0 0 0.25rem 0 hsl(0, 0%, 84%);

  .layout {
    display: grid;
    grid-gap: 0.5rem;
    align-items: center;
    grid-template-columns: 1fr min-content;

    height: 100%;

    // .left {
    // }

    .right {
      display: grid;
      grid-gap: 0.5rem;
      grid-auto-flow: column;

      .play,
      .add,
      .cancel {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
      }

      .play-icon,
      .add-icon,
      .cancel-icon {
        width: 2rem;
        height: 2rem;

        padding: 0.5rem;
      }
    }
  }
}
</style>
