<template>
  <div class="topnavAndBanner">
    <Topnav />
    <div class="banner">
      <div class="banner-title-wrapper">
        <svg class="icon">
          <use xlink:href="#icon-ui"></use>
        </svg>
        <div class="banner-title">
          <h1>Wheel UI</h1>
          <h2>一个厉害的 UI 框架</h2>
        </div>
      </div>
      <div class="actions">
        <a href="https://github.com">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </div>
    </div>
  </div>
  <div class="features">
    <svg class="icon">
      <use xlink:href="#icon-vue"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-ts"></use>
    </svg>
    <svg class="icon">
      <use xlink:href="#icon-light"></use>
    </svg>
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
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  > svg {
    width: 64px;
    height: 64px;
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &-title {
    color: #0a8b9f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      > svg {
        width: 72px;
        height: 72px;
        margin-right: 8px;
      }
    }
  }
  > .actions {
    padding: 16px 0;
    a {
      margin: 0 48px;
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
