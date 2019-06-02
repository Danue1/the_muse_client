import { MutationTree, ActionTree } from 'vuex';

import { TrackModel } from '@/Models';

export const namespaced = true;

export const state = {
  selected: [] as TrackModel[],
};

export type State = typeof state;

enum MutationKind {
  Reset = 'Reset',
  Add = 'Add',
  Remove = 'Remove',
}

export const mutations: MutationTree<State> = {
  [MutationKind.Reset](state) {
    state.selected = [];
  },

  [MutationKind.Add](state, track) {
    state.selected.push(track);
  },

  [MutationKind.Remove](state, track) {
    state.selected = state.selected.filter(currentTrack => currentTrack !== track);
  },
};

export enum ActionKind {
  Toggle = 'Toggle',
  Reset = 'Reset',
}

export const actions: ActionTree<State, {}> = {
  [ActionKind.Reset]({ commit }) {
    commit(MutationKind.Reset);
  },

  [ActionKind.Toggle]({ state, commit }, track: TrackModel) {
    if (track.audioLink === null) {
      return;
    }

    if (state.selected.includes(track)) {
      commit(MutationKind.Remove, track);
    } else {
      commit(MutationKind.Add, track);
    }
  },
};
