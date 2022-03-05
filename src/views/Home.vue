<template>
  <div>
    <Topnav />
    <div class="banner">
      <img class="logo" src="\src\assets\img\LOGO.png" />
      <h1 class="title">一个简单好用的 UI 组件库</h1>
      <p class="actions">
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
    <p class="copyright">MIT Licensed | Copyright © 2021-present Zheng</p>
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
  text-align: center;
  width: 100%;
  box-shadow: inset 0 5px 5px 0 rgba($color: #666, $alpha: 0.1);

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    > li {
      width: 6rem;
      margin: 1rem 0.625rem;
      display: grid;
      justify-content: center;
      grid-template-areas:
        "icon title"
        "icon text";
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
  margin: 2rem;
  width: 7rem;
}
.banner {
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .title {
    color: #6a8bad;
    margin-bottom: 20px;
  }
  > .actions {
    padding: 8px 0;
    margin-top: 10px;
    a {
      margin: 0 8px;
      background: $green;
      font-size: 0.5rem;
      color: white;
      display: inline-block;
      padding: 0.25rem 1rem;
      border-radius: $border-radius;
      transition: background 250ms;
      &:hover {
        background: #4abf8a;
      }
    }
  }
}
</style>