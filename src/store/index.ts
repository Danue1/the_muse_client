import Vue from 'vue';
import Vuex from 'vuex';

import * as Playlist from './Playlist';
import * as SelectedTracks from './SelectedTracks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Playlist,
    SelectedTracks,
  },
});
