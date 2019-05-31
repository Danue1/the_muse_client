<template>
  <svg-layout>
    <circle cx="24" cy="24" r="22"/>
    <line x1="44" y1="44" x2="64" y2="64"/>
  </svg-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import SvgLayout from './SvgLayout.vue';

const Search = Vue.extend({
  components: {
    SvgLayout,
  },
});

export default Search;
</script>
