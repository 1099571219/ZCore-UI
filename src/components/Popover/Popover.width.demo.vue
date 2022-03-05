<demo>
  支持 width
  width 类型可为 number 或 string。传入数字，宽度单位为 px
</demo>

<template>
  <Popover position="top" trigger="hover" width="30%">
    <template #content> 这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。 </template>
    <Button>width: 30%</Button>
  </Popover>
  <Popover position="right" trigger="hover" :width="150">
    <template #content> 这是一段文字，很高兴你看见了它。这是一段文字，很高兴你看见了它。 </template>
    <Button>width: 150px</Button>
  </Popover>
</template>

<script lang="ts">
import Button from '../../lib/Button.vue';
import Popover from '../../lib/Popover.vue';

export default {
  components: { Button, Popover },
};
</script>

<style lang="scss" scoped>
.coast-button {
  margin-right: 20px;
}
</style>
