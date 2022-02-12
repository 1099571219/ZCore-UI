<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <img class="logo" src="\src\assets\img\LOGO.png">
        <h2>ZCore UI 官网</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/Doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <h3>代码易读</h3>
          <p>每个组件的源代码都十分简洁</p>
        </li>
      </ul>
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
$green: #3eaf7c;
$border-radius: 20px;
.features {
  
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: center;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      > h3 {
        grid-area: title;
        font-size: 28px;
      }
      > p {
        grid-area: text;
      }
    }
  }
}
.logo {
  width: 300px;
}
.topnavAndBanner {
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    margin-top: 10px;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      transition: background 250ms;
      &:hover {
        background: #4abf8a;
      }
    }
  }
}
</style>