<template>
  <div class="home">
    <van-cell-group>
      <van-field v-model="value" label placeholder="请输入事项" />
    </van-cell-group>
    <van-button @click="addItme">添加</van-button>
    <van-checkbox v-model="checked">复选框</van-checkbox>
    <item-list :listdata="list" @outdel="del"></item-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ItemList from "./ItemList/ItemList.vue";
import { IItme, IStatus} from "./hometype";

export default defineComponent({
  name: "Home",
  components: {
    ItemList
  },

  setup() {
    const value = ref<string>("");

    const list = ref<IItme[]>([]);
    const checked = ref<boolean>(true);

    const addItme = ():void => {
      if (value.value) {
        list.value.push({
          text: value.value,
          id: Math.random(),
          status: IStatus.WILLDO
        });
        value.value = "";
      }
    };

    const del = (id:number):void=>{
      list.value = list.value.filter((val:IItme)=>val.id !== id)
    }
    return {
      value,
      list,
      addItme,
      del,
      checked
    };
  }
});
</script>
