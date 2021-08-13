<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";

export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth; // 获取屏幕宽度
    const asideVisible = ref(width <= 500 ? false : true);
    provide("asideVisible", asideVisible);
  },
};
</script>
