<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang='ts'>
import { ref } from 'vue';
export default {
    props:{
        content:{
            type:String,
            require:true
        },
    },
};
</script>

<style lang="scss" scoped>
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  padding: 45px;
}

@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}
</style>