<template>
  <svg-layout>
    <circle cx="24" cy="24" r="24"/>
    <line x1="44" y1="44" x2="64" y2="64"/>
  </svg-layout>
</template>

<script lang="ts">
import Vue from 'vue';

import SvgLayout from './SvgLayout';

const Search = Vue.extend({
  components: {
    SvgLayout,
  },
});

export default Search;
</script>
