<template>
  <Teleport to="body" v-if="visible">
    <div :class="classes" :style="popoverStyle" v-if="$slots.content" ref="popoverElement">
      <slot name="content" :close="handleClose" />
    </div>
  </Teleport>
  <span ref="popoverTrigger" class="coast-popover-slot">
    <slot />
  </span>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  PropType,
  ref,
} from 'vue';
type TriggerType = 'click' | 'hover' | 'focus';
type PositionType = 'top' | 'left' | 'right' | 'bottom';

interface PopoverProps {
  trigger?: TriggerType;
  position?: PositionType;
  width?: number | string;
}

export default defineComponent({
  name: 'CoastPopover',
  props: {
    trigger: {
      type: String as PropType<TriggerType>,
      required: false,
      default: 'click',
      validator: (val: string) => ['click', 'hover', 'focus'].includes(val),
    },
    position: {
      type: String as PropType<PositionType>,
      required: false,
      default: 'top',
      validator: (val: string) => ['top', 'left', 'right', 'bottom'].includes(val),
    },
    width: {
      type: [String, Number],
      required: false,
      default: '',
    },
  },
  setup(props: PopoverProps, { slots }) {
    const visible = ref(false);
    const popoverElement = ref<HTMLDivElement>(null);
    const popoverTrigger = ref<HTMLSpanElement>(null);
    const popoverStyle = ref({} as CSSStyleDeclaration);
    const timer = ref(0);

    const classes = computed(() => ({
      'coast-popover': true,
      [`coast-popover-${props.position}`]: props.position,
    }));

    const setPopoverWidth = () => {
      const { width } = props;
      popoverStyle.value.width = typeof width === 'number' ? `${width}px` : width;
    };

    const setPopoverPosition = () => {
      const { left, top, height, width } = popoverTrigger.value.getBoundingClientRect();
      const { height: popoverHeight } = popoverElement.value.getBoundingClientRect();
      const positionMap = {
        top: {
          left: left + window.scrollX,
          top: top + window.scrollY,
        },
        bottom: {
          left: left + window.scrollX,
          top: top + height + window.scrollY,
        },
        left: {
          left: left + window.scrollX,
          top: top + (height - popoverHeight) / 2 + window.scrollY,
        },
        right: {
          left: left + width + window.scrollX,
          top: top + (height - popoverHeight) / 2 + window.scrollY,
        },
      };
      popoverStyle.value.left = `${positionMap[props.position].left}px`;
      popoverStyle.value.top = `${positionMap[props.position].top}px`;
    };

    const setPopoverStyle = () => {
      props.width && setPopoverWidth();
      nextTick(() => {
        setPopoverPosition();
      });
    };

    const handleDocumentClick = (event: Event) => {
      const target = event.target as HTMLElement;
      /**
       * The click is not the popover itself or the element in the popover,
       * and the click is not the element in the trigger
       * (which will cause the popover to be closed immediately after opening),
       * to execute the handleClose event
       */
      if (
        target !== popoverElement.value &&
        !popoverElement.value?.contains(target) &&
        !popoverTrigger.value?.contains(target)
      ) {
        handleClose();
      }
    };

    const handleOpen = () => {
      visible.value = true;
      if (props.trigger === 'hover') {
        clearTimeout(timer.value);
      }
      nextTick(() => {
        if (props.trigger === 'hover') {
          popoverElement.value.addEventListener('mouseenter', () => {
            clearTimeout(timer.value);
          });
          popoverElement.value.addEventListener('mouseleave', () => {
            handleClose();
          });
        }
        setPopoverStyle();
        document.addEventListener('click', handleDocumentClick);
      });
    };

    const closePopoverAndRemoveEvent = () => {
      visible.value = false;
      document.removeEventListener('click', handleDocumentClick);
    };

    const handleClose = () => {
      if (props.trigger === 'hover') {
        timer.value = window.setTimeout(() => {
          closePopoverAndRemoveEvent();
        }, 200);
      } else {
        closePopoverAndRemoveEvent();
      }
    };

    const handleClick = () => {
      if (slots.content) {
        visible.value ? handleClose() : handleOpen();
      }
    };

    const eventMap = {
      click: [{ name: 'click', handle: handleClick }],
      hover: [
        { name: 'mouseenter', handle: handleOpen },
        { name: 'mouseleave', handle: handleClose },
      ],
      focus: [
        { name: 'focusin', handle: handleOpen },
        { name: 'focusout', handle: handleClose },
      ],
    };

    const currentEventList = eventMap[props.trigger];

    onMounted(() => {
      currentEventList.forEach(event => {
        popoverTrigger.value.addEventListener(event.name, event.handle);
      });
    });

    onBeforeUnmount(() => {
      currentEventList.forEach(event => {
        //   BUG
        // popoverTrigger.value.removeEventListener(event.name, event.handle);
      });
    });

    return {
      classes,
      visible,
      popoverStyle,
      popoverTrigger,
      popoverElement,
      handleClose,
    };
  },
});
</script>

<style lang="scss">
@import '../assets/common.scss';

.coast-popover {
  position: absolute;
  z-index: $popoverIndex;
  top: 0;
  left: 0;
  min-width: 10px;
  max-width: 20em;
  border-radius: $radius;
  border: 1px solid $borderColorGray;
  padding: 12px;
  color: $colorBlack;
  line-height: 1.4;
  text-align: justify;
  filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.12));
  background: #fff;
  word-break: break-all;

  &-slot {
    display: inline-block;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    border: 10px solid;
    border-color: transparent;
    position: absolute;
    width: 0;
    height: 0;
  }

  &-top {
    margin-top: -10px;
    transform: translateY(-100%);
    &::after,
    &::before {
      border-bottom: none;
    }
    &::after {
      left: 10px;
      top: calc(100% - 1px);
      border-top-color: #fff;
    }
    &::before {
      left: 10px;
      top: 100%;
      border-top-color: $borderColorGray;
    }
  }

  &-bottom {
    margin-top: 10px;
    &::after,
    &::before {
      border-top: none;
    }
    &::after {
      left: 10px;
      bottom: calc(100% - 1px);
      border-bottom-color: #fff;
    }
    &::before {
      left: 10px;
      bottom: 100%;
      border-bottom-color: $borderColorGray;
    }
  }

  &-left,
  &-right {
    &::after,
    &::before {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  &-left {
    margin-left: -10px;
    transform: translateX(-100%);
    &::after,
    &::before {
      border-right: none;
    }
    &::after {
      left: calc(100% - 1px);
      border-left-color: #fff;
    }
    &::before {
      left: 100%;
      border-left-color: $borderColorGray;
    }
  }

  &-right {
    margin-left: -10px;
    &::after,
    &::before {
      border-left: none;
    }
    &::after {
      right: calc(100% - 1px);
      border-right-color: #fff;
    }
    &::before {
      right: 100%;
      border-right-color: $borderColorGray;
    }
  }
}

</style>