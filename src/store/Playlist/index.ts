import { MutationTree, ActionTree, GetterTree } from 'vuex';
import { Howl } from 'howler';

import { TrackModel } from '@/Models';
import { Writable } from '@/types/Writable';

export const namespaced = true;

export const state = {
  tracks: [] as TrackModel[],
  index: 0 as number,
  state: 'Stop' as PlaylistState,
  currentAudio: null as null | Howl,
} as const;

type PlaylistState = 'Stop' | 'Pause' | 'Playing';

export type State = typeof state;

export const getters: GetterTree<State, {}> = {
  trackSet(state) {
    return new Set(state.tracks.map(track => track.id));
  },
  currentTrack(state) {
    return state.tracks[state.index];
  },
  isPlaying(state) {
    return state.state === 'Playing';
  },
};

export enum MutationKind {
  Set = 'Set',
  Add = 'Add',
  Remove = 'Remove',

  Play = 'Play',
  Pause = 'Pause',
  Next = 'Next',
}

export const mutations: MutationTree<Writable<State>> = {
  [MutationKind.Set](state, tracks: TrackModel[]) {
    state.tracks = tracks;
    state.state = 'Playing';

    if (state.currentAudio) {
      state.currentAudio.unload();
    }
    const currentTrack = state.tracks[state.index];
    state.currentAudio = new Howl({ src: currentTrack.audioLink! });
    state.currentAudio.play();
  },

  [MutationKind.Add](state, tracks: TrackModel[]) {
    state.tracks.push(...tracks);
  },

  [MutationKind.Play](state) {
    state.state = 'Playing';
    if (state.currentAudio) {
      state.currentAudio.play();
    }
  },

  [MutationKind.Pause](state) {
    state.state = 'Pause';
    if (state.currentAudio) {
      state.currentAudio.pause();
    }
  },

  [MutationKind.Next](state) {
    state.index = state.index === state.tracks.length - 1 ? 0 : state.index + 1;

    if (state.currentAudio) {
      state.currentAudio.stop();
    }
    const currentTrack = state.tracks[state.index];
    state.currentAudio = new Howl({ src: currentTrack.audioLink! });
    state.currentAudio.play();
  },
};

export enum ActionKind {
  Add = 'Add',
  Set = 'Set',
}

export const actions: ActionTree<State, {}> = {
  [ActionKind.Add]({ commit, getters }, tracks: TrackModel[]) {
    const addableTracks = tracks.filter(({ id }) => !getters.trackSet.has(id));
    commit(MutationKind.Add, addableTracks);
  },

  [ActionKind.Set]({ commit, state }, tracks: TrackModel[]) {
    const playAudio = () => {
      if (state.state === 'Playing') {
        commit(MutationKind.Next);

        state.currentAudio!.once('end', () => {
          playAudio();
        });
      }
    };

    commit(MutationKind.Set, tracks);
    state.currentAudio!.once('end', playAudio);
  },
};
