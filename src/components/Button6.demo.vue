<demo>支持 loading</demo>

<template>
  <Button loading>加载中</Button>
  <Button theme="link" loading>加载中</Button>
  <Button theme="text" loading>加载中</Button>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
