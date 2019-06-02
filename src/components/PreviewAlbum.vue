<template>
  <router-link :to="goTo">
    <div class="preview-album">
      <div class="image-container">
        <div class="image" :style="imageStyle"/>
      </div>
      <div class="description-container">
        <div>{{info.name}}</div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

import { PreviewAlbumModel } from '../Models';

interface ImageStyle {
  readonly 'background-image': string;
}

@Component
class PreviewAlbum extends Vue {
  @Prop()
  private readonly info!: PreviewAlbumModel;

  private get imageStyle() {
    return {
      'background-image': `url(${this.info.thumnailLink})`,
    };
  }

  private get goTo() {
    return {
      name: 'about',
      params: {
        imageId: this.info.to,
      },
    };
  }
}

export default PreviewAlbum;
</script>

<style lang="scss" scoped>
.preview-album {
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background-color: white;
  border-radius: 0.25rem;

  &:hover {
    background-color: hsl(0, 0%, 96%);

    .image {
      transform: scale(1.1);
    }
  }

  .image-container {
    overflow: hidden;

    position: relative;

    height: 12rem;

    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;

    .image {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 12rem;

      background-size: cover;
      background-position: 50%;
      box-shadow: 0 0 0 1px hsl(0, 0%, 84%);

      transition-property: transform;
    }
  }

  .description-container {
    height: 4rem;

    padding: 0.5rem;

    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
    border: 1px solid hsl(0, 0%, 84%);
    border-top-width: 0;
  }
}
</style>
