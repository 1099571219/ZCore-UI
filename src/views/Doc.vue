<template>
  <div class="layout">
    <Topnav :toggleMenuButtonVisible="true" class="nav" />
    <div class="content">
      <aside v-if="menuVisible">
        <h3>入门</h3>
        <ol>
          <li>
            <router-link  to="/Doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link  to="/Doc/install">安装</router-link>
          </li>
          <li>
            <router-link  to="/Doc/get-started">开始</router-link>
          </li>
        </ol>
        <h3>组件</h3>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
          <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { Ref, inject } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const menuVisible = inject<Ref<boolean>>("menuVisible");
    return{menuVisible}
  },
};
</script>
<style lang="scss" scoped>
.router-link-active{
  color: #3eaf7c;
  font-weight: 700;
}
.layout{
    display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: white;
  }
}
aside {
  background: #ffffff;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 100px;
  height: 100%;
  z-index: 9;
  border-right: 1px solid #e0e0e0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  main{
      overflow: auto;
  }
}
</style>
