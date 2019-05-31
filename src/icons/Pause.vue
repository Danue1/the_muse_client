<template>
  <svg-layout class="pause icon">
    <line x1="16" y1="0" x2="16" y2="64"/>
    <line x1="48" y1="0" x2="48" y2="64"/>
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
class Pause extends Vue {}

export default Pause;
</script>

<style lang="scss" scoped>
.pause.icon {
  stroke-width: 16px;
}
</style>
