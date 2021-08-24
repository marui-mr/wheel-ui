<template>
  <article class="markdown-body" v-html="md"></article>
</template>

<script>
import md from "../lib/markdown/intro.md";
export default {
  data() {
    return { md };
  },
};
</script>

