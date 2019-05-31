<template>
  <svg-layout>
    <line x1="0" y1="0" x2="64" y2="64"/>
    <line x1="64" y1="0" x2="0" y2="64"/>
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
class Cross extends Vue {}

export default Cross;
</script>
