<demo>password 密码框</demo>

<template>
  <Input v-model:value="value" placeholder="please input password" type="password" />
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
