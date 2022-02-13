<template>
  <div>
      <Topnav />
      <div class="banner">
        <img class="logo" src="\src\assets\img\LOGO.png" />
        <h1>ZCore UI 官网</h1>
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
  width: 100%;
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
    > li {
      width: 5rem;
      margin: 1rem 0.625rem;
      display: grid;
      justify-content: start;
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
  width: 9rem;
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
      font-size: .5rem;
      color: white;
      display: inline-block;
      padding: .25rem 1rem;
      border-radius: $border-radius;
      transition: background 250ms;
      &:hover {
        background: #4abf8a;
      }
    }
  }
}
</style>