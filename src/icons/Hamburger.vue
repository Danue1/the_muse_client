<template>
  <svg-layout>
    <line x1="0" y1="16" x2="64" y2="16"/>
    <line x1="0" y1="32" x2="64" y2="32"/>
    <line x1="0" y1="48" x2="64" y2="48"/>
  </svg-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import SvgLayout from './SvgLayout.vue';

const Hamburger = Vue.extend({
  components: {
    SvgLayout,
  },
});

export default Hamburger;
</script>
