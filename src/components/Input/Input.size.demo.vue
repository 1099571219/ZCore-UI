<demo>
  支持 size
  共支持 mini，small，medium，large 四种 size，默认的 size 是 medium
</demo>

<template>
  <div><Input v-model:value="value" placeholder="mini input" size="mini" /></div>
  <div><Input v-model:value="value" placeholder="small input" size="small" /></div>
  <div><Input v-model:value="value" placeholder="medium input" size="medium" /></div>
  <div><Input v-model:value="value" placeholder="large input" size="large" /></div>
</template>

<script lang="ts">
import { ref } from 'vue';
import  Input from '../../lib/Input.vue';

export default {
  components: { Input },
  setup() {
    const value = ref('');
    return { value };
  },
};
</script>
