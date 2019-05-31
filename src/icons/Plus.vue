<template>
  <svg-layout>
    <line x1="32" y1="0" x2="32" y2="64"/>
    <line x1="0" y1="32" x2="64" y2="32"/>
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
class Plus extends Vue {}

export default Plus;
</script>
