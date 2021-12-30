import {INCREMENT1, INCREMENT2} from "@/store/mutation-types";

export default {
  [INCREMENT1](state) {
    state.nodeVoteCount++;
  },
  [INCREMENT2](state) {
    state.vueVoteCount++;
  }
}
