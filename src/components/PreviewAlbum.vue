<template>
  <router-link :to="goTo">
    <div class="preview-album layout">
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
import Vue from 'vue';

import { PreviewAlbumModel } from '../Models';

interface ImageStyle {
  readonly 'background-image': string;
}

const PreviewAlbum = Vue.extend({
  props: {
    info: PreviewAlbumModel,
  },
  computed: {
    imageStyle(): ImageStyle {
      return {
        'background-image': `url(${this.info.thumnailLink})`,
      };
    },
    goTo(): any {
      return {
        name: 'about',
        params: {
          imageId: this.info.to,
        },
      };
    },
  },
});

export default PreviewAlbum;
</script>

<style lang="scss" scoped>
.preview-album.layout {
  display: flex;
  flex-direction: column;

  box-shadow: 0 0 0 1px hsl(0, 0%, 84%);

  &:hover .image {
    transform: scale(1.1);
  }

  .image-container {
    overflow: hidden;

    position: relative;

    height: 12rem;

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
  }
}
</style>
