<template>
  <div class="home">
    <van-cell-group>
      <van-field v-model="value" label placeholder="请输入事项" />
    </van-cell-group>
    <van-button @click="addItme">添加</van-button>
    <item-list></item-list>
    <!-- <div>{{count}}</div> -->
    <!-- <div>超过三个待办？   {{overThree ? "是" : "否"}} </div> -->
    <!-- <div>{{getCount()}}</div>
    <div>超过三个待办？   {{overThree() ? "是" : "否"}} </div>-->

    <!-- <div>{{count()}}</div>
    <div>超过三个待办？   {{overThree() ? "是" : "否"}} </div>-->

    <div>{{doubleCount}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import ItemList from "./List/ItemList.vue";
import { IStatus } from "@/store/Todo/type";
import { useStore, mapGetters } from "vuex";
import { SET_LIST } from "@/store/actionType";
import Axios from "axios";
import {versionApi} from "@/utils/ApiGroup"
import {ApiAxios} from "@/utils/ApiAxios"
import "./todolist.less"

export default defineComponent({
  name: "Home",
  components: {
    ItemList
  },

  setup() {
    const value = ref<string>("");
    const store = useStore();

    const addItme = (): void => {
      if (value.value) {
        store.dispatch(SET_LIST, {
          text: value.value,
          id: Math.random(),
          status: IStatus.WILLDO
        });
        value.value = "";
      }
    };
    ApiAxios.post(versionApi.getLatestVersion, {
      platform: 2,
      projectCode: "EEP-SSP-APP",
      userType: 2,
      // version: "1.0.0",
      versionNumber: 1,
      versionType: 0
    }).then((res:any)=>{
      console.log(res);
      
    })

    return {
      value,
      addItme,

      // count: computed(() => store.getters.getCount),
      // overThree: computed(() => store.getters.overThree)

      // mapGetters映射出来的是方法.computed
      // ...mapGetters(["getCount","overThree"])
      // ...mapGetters({
      //   count:"getCount",
      //   overThree:"overThree"
      // })
      // getters 传参数
      doubleCount: computed(() => store.getters.doubleCount(2))
    };
  }
});
</script>
