<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-ui"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <span v-if="toggleAsideVisible" class="toggleAside" @click="toogleAside">
      <svg class="icon">
        <use xlink:href="#icon-toggle"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleAsideVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toogleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toogleAside };
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  color: #0a8b9f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100%;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    > svg {
      width: 24px;
      height: 24px;
    }
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
      cursor: pointer;
    }
  }
}
</style>
