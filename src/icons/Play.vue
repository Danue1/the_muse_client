<template>
  <svg-layout class="play icon">
    <path d="m12,0 48,32, -48,32z"/>
  </svg-layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import SvgLayout from './SvgLayout.vue';

@Component({
  components: {
    SvgLayout,
  },
})
class Play extends Vue {}

export default Play;
</script>

<style lang="scss" scoped>
.play.icon {
  fill: currentColor;
}
</style>
