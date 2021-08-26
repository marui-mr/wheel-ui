<demo>常规用法</demo>

<template>
  <Button @click="toggle">打开对话框</Button>
  <Dialog v-model:visible="bool" :closeOnClickOverlay="false" :ok="ok">
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
    <template v-slot:content>
      <strong>你好</strong>
      <div>Hi</div>
    </template>
  </Dialog>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";

export default {
  components: { Dialog, Button },
  setup() {
    const bool = ref(false);
    const toggle = () => {
      bool.value = !bool.value;
    };
    const ok = () => {
      return false;
    };
    return { bool, toggle, ok };
  },
};
</script>
