<template>
  <div class="topnav">
    <div class="logo"><router-link to="/">ZCore UI</router-link></div>
    <ul class="menu">
      <li><router-link to="Doc">文档</router-link></li>
      <li>GitHub</li>
    </ul>
    <span
      v-if="toggleMenuButtonVisible"
      class="toggleAside"
      @click="toggleMenu"
    >
      <svg class="icon">
        <use xlink:href="#icon-xuan"></use>
      </svg>
    </span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topnav {
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  background: white;
  align-items: center;
  box-shadow: 0 0px 5px 0 rgba($color: #333, $alpha: 0.4);
  > .logo {
    font-weight: 700;
    font-size: 24px;
    color: #2c3e50;
    max-width: 6em;
    margin-right: auto;
    margin-left: 20px;
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
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      > .icon {
        width: 12px;
        height: 12px;
      }
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>