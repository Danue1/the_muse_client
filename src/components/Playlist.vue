<template>
  <div v-if="currentTrack" class="playlist">
    <div class="layout">
      <div class="info">
        <div class="title">{{currentTrack.name}}</div>
        <div class="artist">{{currentTrack.artist}}</div>
      </div>

      <div class="handlers">
        <div class="play-icon pause-icon" @click="toggle()">
          <play-icon v-if="!isPlaying"/>
          <pause-icon v-if="isPlaying"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import PlayIcon from '../icons/Play.vue';
import PauseIcon from '../icons/Pause.vue';
import { TrackModel } from '../Models';
import { MutationKind } from '../store/Playlist';

const PlaylistStore = namespace('Playlist');

@Component({
  components: {
    PlayIcon,
    PauseIcon,
  },
})
class Playlist extends Vue {
  @PlaylistStore.Getter('currentTrack')
  private readonly currentTrack!: TrackModel;

  @PlaylistStore.Getter('isPlaying')
  private readonly isPlaying!: boolean;

  @PlaylistStore.Mutation(MutationKind.Play)
  private readonly play!: () => void;

  @PlaylistStore.Mutation(MutationKind.Pause)
  private readonly pause!: () => void;

  private toggle() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }
}

export default Playlist;
</script>

<style lang="scss" scoped>
.playlist {
  position: fixed;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 3.5rem;

  padding: 0 0.5rem;

  background-color: white;
  box-shadow: 0 0 0.25rem 0 hsl(0, 0%, 84%);

  .layout {
    display: grid;
    grid-gap: 0.5rem;
    align-items: center;
    grid-template-columns: 1fr min-content;

    max-width: 64rem;
    height: 100%;

    margin: 0 auto;

    .info {
      .title {
        font-weight: bolder;
        font-size: 1.25rem;
      }

      .artist {
        color: hsl(0, 0%, 36%);
      }
    }

    .handlers {
      display: grid;
      grid-gap: 0.5rem;
      grid-auto-flow: column;
      align-items: center;

      .previous-icon,
      .play-icon,
      .pause-icon,
      .next-icon {
        cursor: pointer;

        display: grid;
      }

      .previous-icon,
      .next-icon {
        width: 2rem;
        height: 2rem;

        padding: 0.5rem;
      }

      .play-icon,
      .pause-icon {
        width: 2rem;
        height: 2rem;

        padding: 0.5rem;

        border-radius: 50%;
        box-shadow: 0 0 0 1px currentColor;
      }
    }
  }
}
</style>
