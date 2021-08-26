<demo>支持 disabled</demo>

<template>
  <Button disabled>禁用按钮</Button>
  <Button theme="link" disabled>链接禁用按钮</Button>
  <Button theme="text" disabled>文字禁用按钮</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
