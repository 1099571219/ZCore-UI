<demo>
支持加载状态
</demo>
<template>
    <div>
      <Button loading>加载中</Button>
      <Button>加载完毕</Button>
    </div>
</template>
<script lang='ts'>
import Button from '../../lib/Button.vue'
export default {
    components:{Button}
}
</script>