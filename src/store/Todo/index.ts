import { IList, ICxt, IItme } from './type';
import { SET_LIST, DEL_ITEM } from '../actionType';
import { ActionContext } from 'vuex';


export default {
  state: <IList>{
    list: []
  },

  actions: {
    // 第一个参数为context
    [SET_LIST](context: ActionContext<any, any>, item: IItme): void {
      console.log(context);
      
      context.commit(SET_LIST, item)
    },
    [DEL_ITEM]({ commit }: ICxt, id: number): void {
      commit(DEL_ITEM, id)
    }
  },
  getters:{
    // 第一个参数是state  第二个可以是getter
    getCount(state:IList){
      console.log(state);
      return state.list.length
    },
    overThree(state:IList,getters:any){
      return getters.getCount > 3
    },
    doubleCount:(state:IList,getters:any)=>(num:number)=>{
      return getters.getCount * num
    }
  },
  mutations: {
    [SET_LIST](state: IList, val: IItme): void {
      state.list.push(val)
    },
    [DEL_ITEM](state: IList, id: number): void {
      state.list = state.list.filter((val: IItme) => val.id !== id)
    }
  },
}