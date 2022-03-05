<demo>
  支持 position
  包含四种不同的出现位置：top, left, right, bottom
</demo>

<template>
  <Popover position="top" trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <Button>上方弹出</Button>
  </Popover>
  <Popover position="bottom" trigger="hover">
    <template #content>
      这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。
    </template>
    <Button>下方弹出</Button>
  </Popover>
  <Popover position="left" trigger="hover" :width="150">
    <template #content> 这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。 </template>
    <Button>左边弹出</Button>
  </Popover>
  <Popover position="right" trigger="hover" :width="150">
    <template #content> 这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。 </template>
    <Button>右边弹出</Button>
  </Popover>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Popover  from '../../lib/Button.vue';

export default {
  components: { Button, Popover },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>
