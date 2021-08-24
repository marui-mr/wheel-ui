<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <h1>Wheel UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>

<style lang="scss" scoped>
.topnavAndBanner {
  background: linear-gradient(
    145deg,
    rgba(220, 244, 252, 1) 0%,
    rgba(195, 241, 252, 1) 100%
  );
}
.banner {
  color: #0a8b9f;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: #102e46;
      display: inline-block;
      padding: 8px 24px;
      color: #efffff;
      border-radius: 22px;
      &:first-child {
        background: #c6e2eb;
        color: #0f2e3d;
      }
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
