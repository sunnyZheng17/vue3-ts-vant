<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { SET_ROOTFONTSIZE } from "@/store/actionType";

export default defineComponent({
  name: "app",
  components: {},
  setup() {
    onMounted(() => {
      const store = useStore();
      store.dispatch(SET_ROOTFONTSIZE);
    });
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
</style>
