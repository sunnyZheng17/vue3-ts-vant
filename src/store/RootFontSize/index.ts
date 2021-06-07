import { SET_ROOTFONTSIZE } from '../actionType';
import { ActionContext } from 'vuex';

interface IState {
  rootFontSize: number
}

export default {
  state: <IState>{
    rootFontSize: 100
  },
  actions: {
    [SET_ROOTFONTSIZE](context: ActionContext<IState, any>) {
      const UIWidth = 375
      const { clientWidth } = document.documentElement;
      const rootFontSize = clientWidth / UIWidth * 100;
      document.documentElement.style.fontSize = rootFontSize + "px"
      // console.log(rootFontSize);
      context.commit(SET_ROOTFONTSIZE, rootFontSize)
    }
  },
  mutations: {
    [SET_ROOTFONTSIZE](state: IState, fontsize: number) {
      state.rootFontSize = fontsize
    }
  }
}