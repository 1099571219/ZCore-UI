<demo>
  支持 label
</demo>

<template>
  <Input v-model:value="userName" placeholder="EnochQin" label="userName" />
  <br />
  <Input v-model:value="url1" placeholder="https://github" labelRight=".com" />
  <br />
  <Input v-model:value="url2" placeholder="github" label="https://" labelRight=".com" />
</template>

<script lang="ts">
import { ref } from 'vue';
import  Input from '../../lib/Input.vue';

export default {
  components: { Input },
  setup() {
    const userName = ref('');
    const url1 = ref('');
    const url2 = ref('');
    return { userName, url1, url2 };
  },
};
</script>
