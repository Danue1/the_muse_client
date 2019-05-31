<template>
  <div class="songtrack" :class="{'is-active': isClicked}">
    <div class="info">
      <div class="name">{{info.name}}</div>
      <div class="artist">{{info.artist}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { TrackModel } from '../Models';

@Component
class SongTrack extends Vue {
  @Prop([Number])
  private readonly index!: number;

  @Prop([TrackModel])
  private readonly info!: TrackModel;

  @Prop([Boolean])
  private readonly isClicked!: boolean;

  private get audioLink(): string {
    return this.info.audioLink;
  }
}

export default SongTrack;
</script>

<style lang="scss" scoped>
.songtrack {
  cursor: pointer;

  display: grid;
  grid-template-columns: 1fr min-content;
  align-items: center;

  padding: 0.5rem;

  border-bottom: 1px solid hsl(0, 0%, 84%);

  @media (min-width: 32rem) {
    &:hover {
      background-color: hsl(0, 0%, 96%);
    }
  }

  &.is-active {
    background-color: hsl(0, 0%, 92%);
  }

  .info {
    display: grid;
    grid-gap: 0.25rem;

    // .title {
    // }

    .artist {
      color: hsl(0, 0%, 36%);
      font-size: 0.75rem;
    }
  }
}
</style>
