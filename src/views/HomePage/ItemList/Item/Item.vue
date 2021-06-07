<template>
  <div class="item-row">
    <van-checkbox></van-checkbox>
    <span>{{item.text}}</span>
    <button v-if="item.status !== IStatus.FINISH" @click="deleteItem(item.id)">delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";
import { IItme,IStatus} from "../../hometype";
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<IItme>,
      required: true
    }
  },
  setup(props,{emit}) {
    const deleteItem = (id:number):void=>{
      emit("delItem",id)
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