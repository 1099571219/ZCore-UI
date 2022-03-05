<demo>
  浮层内关闭
  通过调用 content 插槽中的 close 方法，关闭 popover
</demo>

<template>
  <Popover position="top" trigger="click">
    <template #content="{ close }">
      <p>这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。</p>
      <Button theme="link" @click="close">关闭</Button>
    </template>
    <Button>浮层内关闭</Button>
  </Popover>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import  Popover  from '../../lib/Popover.vue';

export default {
  components: { Button, Popover },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
  &-theme-link {
    float: right;
    margin-right: 0;
  }
}
</style>
