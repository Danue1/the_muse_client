<template>
  <svg-layout class="right-arrow icon">
    <path d="m12,0 48,32, -48,32"/>
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
class RightArrow extends Vue {}

export default RightArrow;
</script>
