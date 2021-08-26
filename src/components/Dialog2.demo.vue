<demo>一键打开</demo>

<template>
  <Button @click="showDialog">打开对话框</Button>
</template>

<script lang="ts">
import { h } from "vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: { Button },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h("strong", {}, "标题"),
        content: "你好",
        ok: () => {
          return false;
        },
      });
    };
    return { showDialog };
  },
};
</script>
