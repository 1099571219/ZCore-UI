<template>
  <div
    v-show="visible"
    :class="classes"
    :style="{ top: `${top}px` }"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
  >
    <span>{{ text }}</span>
    <Icon
      v-if="showClose"
      class="coast-toast-close"
      name="clear"
      @click="handleClose"
    />
  </div>
</template>

<script lang="ts">
import type { VNode } from "vue";
import type { PropType } from "vue";
import { computed, defineComponent, onMounted, ref } from "vue";
import Icon from './Icon.vue';
import type { ToastType, ToastProps } from './toast.d';

export default defineComponent({
  name: "CoastToast",
  components: { Icon },
  props: {
    text: {
      type: String,
      required: false,
      default: "",
    },
    type: {
      type: String as PropType<ToastType>,
      required: false,
      default: "normal",
      validator: (val: string) =>
        ["normal", "secondary", "success", "warning", "error"].includes(val),
    },
    delay: {
      type: Number,
      required: false,
      default: 3,
    },
    center: {
      type: Boolean,
      required: false,
      default: false,
    },
    showClose: {
      type: Boolean,
      required: false,
      default: false,
    },
    id: {
      type: String,
      required: false,
      default: "",
    },
    top: {
      type: Number,
      default: 10,
      required: false,
    },
  },
  emits: ["destroy"],
  setup(props: ToastProps, { emit }) {
    const visible = ref(false);
    const timer = ref(null);

    const classes = computed(() => [
      "coast-toast",
      {
        "coast-toast-center": props.center,
        [`coast-toast-${props.type}`]: props.type,
      },
    ]);

    onMounted(() => {
      visible.value = true;
      startTimer();
    });

    const handleClose = () => {
      visible.value = false;
      emit("destroy");
    };
    const startTimer = () => {
      if (props.delay > 0) {
        timer.value = setTimeout(() => {
          handleClose();
        }, props.delay * 1000);
      }
    };

    const clearTimer = () => {
      clearTimeout(timer.value);
      timer.value = null;
    };

    return { visible, classes, handleClose, startTimer, clearTimer };
  },
});
</script>
<style lang="scss">
@import '../assets/common.scss';

.coast-toast {
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%);
  min-width: 380px;
  border-radius: 5px;
  background: #fff;
  color: $colorBlack;
  z-index: $popoverIndex;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  padding: 15px;
  transition: top 0.3s;

  > .coast-toast-close {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 15px;
    cursor: pointer;
    color: #c0c4cc;
    font-size: 20px;

    &:hover {
      color: #909399;
    }
  }

  &-center {
    text-align: center;
  }

  &-secondary {
    background-color: $secondary;
    color: #fff;
  }

  &-success {
    background-color: $success;
    color: #fff;
  }

  &-warning {
    background-color: $warning;
    color: #fff;
  }

  &-error {
    background-color: $error;
    color: #fff;
  }
}

</style>
