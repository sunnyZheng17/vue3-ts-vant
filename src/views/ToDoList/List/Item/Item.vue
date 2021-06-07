<template>
  <div class="item-row">
    <van-checkbox></van-checkbox>
    <span>{{item.text}}</span>
    <button v-if="item.status !== IStatus.FINISH" @click="deleteItem(item.id)">delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IItme, IStatus } from "@/store/Todo/type"
import { useStore } from 'vuex';
import { DEL_ITEM } from '@/store/actionType';
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<IItme>,
      required: true
    }
  },

  setup() {
    const store = useStore();
    const deleteItem = (id:number):void=>{
      store.dispatch(DEL_ITEM,id)
      // store.commit(DEL_ITEM,id)
    }
    return {
      IStatus,
      deleteItem
    }
  }
});
</script>

<style>
.item-row{
  display: flex;
  justify-content: center;
  align-items:center
}
</style>