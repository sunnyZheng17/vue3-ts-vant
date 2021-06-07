<template>
  <div>
    <Item v-for="item in listdata " :key="item.id" :item="item" @delItem="delItem" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IItme, IStatus } from "../hometype";
import Item from "./Item/Item.vue";

export default defineComponent({
  components: {
    Item
  },
  props: {
    listdata: {
      type: Array as PropType<IItme[]>,
      required: true
    }
  },
  setup(props, { emit }) {

    const delItem = (id: number) => {
      emit("outdel", id);
    };

    return {
      delItem
    };
  }
});
</script>

<style>
</style>