<template>
  <div class="about">
    <album :info="album"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import Album from '../components/Album.vue';
import { album } from './About.dummy';

@Component({
  components: {
    Album,
  },
})
class About extends Vue {
  private readonly album = album;
}

export default About;
</script>
