<template>
  <div>
    <Item v-for="item in listdata " :key="item.id" :item="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
// import { IItme, IStatus } from "@/store/Todo/type"
import Item from "./Item/Item.vue";
import { useStore } from 'vuex';

export default defineComponent({
  components: {
    Item
  },
  setup(){
    const store = useStore();
    
    const listdata = computed(()=>store.state.ToDoList.list)
    return {
      listdata
    }
  }
});
</script>

<style>
</style>