<demo>
示例1
</demo>
<template>
  <Tabs v-model:selected="x">
    <Tab title="导航1">1</Tab>
    <Tab title="导航2222222">2</Tab>
  </Tabs>
</template>
<script lang='ts'>
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
import {ref} from 'vue'
export default {
  components: { Tab, Tabs },
  setup() {
    const x = ref("导航1");
    return { x };
  },
};
</script>