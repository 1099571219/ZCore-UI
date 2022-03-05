<demo>
  常规用法
  支持不同的激活方式，包含 hover, click, focus
</demo>

<template>
  <Popover trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <Button>hover 激活</Button>
  </Popover>
  <Popover trigger="click">
    <Button>click 激活</Button>
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
  </Popover>
  <Popover trigger="focus">
    <Button>focus 激活</Button>
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
  </Popover>
</template>

<script lang="ts">
import  Button  from '../../lib/Button.vue';
import  Popover  from '../../lib/Popover.vue';

export default {
  components: { Button, Popover },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>