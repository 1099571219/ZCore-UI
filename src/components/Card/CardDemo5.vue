<demo>
slots
</demo>

<template>
  <div class="wrap">
    <card title="支持 footer" hoverable shadow>
      card content
      <template #footer>card footer</template>
    </card>
    <card title="支持 footer" type="dark">
      card content
      <template #footer>card footer</template>
    </card>
  </div>
</template>

<script lang="ts">
import Card from '../../lib/Card.vue';

export default {
  components: {
    Card,
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;

  .coast-card {
    width: 40%;
    margin-left: 5%;
  }
}
</style>
