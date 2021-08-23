<template>
  <div class="wheel-tabs">
    <div class="wheel-tabs-nav" ref="container">
      <div
        class="wheel-tabs-nav-item"
        :class="{ selected: t === selected }"
        @click="select(t)"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            if (t === selected) selectedItem = el;
          }
        "
        :key="index"
      >
        {{ t }}
      </div>
      <div class="wheel-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="wheel-tabs-content">
      <component
        class="wheel-tabs-content-item"
        :is="current"
        :key="selected"
      ></component>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, onUpdated } from "vue";
import Tab from "../lib/Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tag) => {
      if (tag.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (newTitle: String) => {
      context.emit("update:selected", newTitle);
    };
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const { width } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + "px";
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = selectedItem.value.getBoundingClientRect();
      indicator.value.style.left = left2 - left1 + "px";
    };
    onMounted(x); // 只在第一次渲染执行
    onUpdated(x);
    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.wheel-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      width: 50px;
      height: 2px;
      background: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>
