<demo>
  支持 status
  共支持 normal，secondary，success，warning，error 五种 status，默认的 status 是 normal
</demo>

<template>
  <Input v-model:value="value1" placeholder="normal" status="normal" />
  <br />
  <Input v-model:value="value2" placeholder="secondary" status="secondary" />
  <br />
  <Input v-model:value="value3" placeholder="success" status="success" />
  <br />
  <Input v-model:value="value4" placeholder="warning" status="warning" />
  <br />
  <Input v-model:value="value5" placeholder="error" status="error" />
  <br />
</template>

<script lang="ts">
import { ref } from 'vue';
import  Input from '../../lib/Input.vue';

export default {
  components: { Input },
  setup() {
    const value1 = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');
    const value5 = ref('');
    return { value1, value2, value3, value4, value5 };
  },
};
</script>
