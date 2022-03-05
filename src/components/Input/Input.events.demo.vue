<demo>
  Input events
  事件包含: input, change, focus, blur, keydown
</demo>

<template>
  <Input
    v-model:value="value"
    placeholder="please input content"
    @input="handleInput"
    @change="handleChange"
    @focus="handleFocus"
    @blur="handleBlur"
    @keydown="handleKeydown"
  />
</template>

<script lang="ts">
import { ref } from 'vue';
import  Input  from '../../lib/Input.vue';
type InputElementEvent = Event & { target: HTMLInputElement };

export default {
  components: { Input },
  setup() {
    const value = ref('');
    const handleInput = (value: string) => {
      console.log('input event', value);
    };
    const handleChange = (value: string) => {
      console.log('change event', value);
    };
    const handleBlur = (event: InputElementEvent) => {
      console.log('blur event', event);
    };
    const handleFocus = (event: InputElementEvent) => {
      console.log('focus event', event);
    };
    const handleKeydown = (event: KeyboardEvent) => {
      console.log('keydown event', event);
    };
    return {
      value,
      handleInput,
      handleChange,
      handleBlur,
      handleFocus,
      handleKeydown,
    };
  },
};
</script>
