<template>
  <div class="gulu-card" :class="classes" >
    <main class="gulu-card-content">
      <slot />
    </main>
    <footer v-if="$slots.footer" class="gulu-card-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import { computed, defineComponent } from "vue";

type CardTypeType =
  | "secondary"
  | "alert"
  | "success"
  | "purple"
  | "warning"
  | "violet"
  | "error"
  | "cyan"
  | "dark"
  | "lite";

interface CardProps {
  hoverable?: boolean;
  shadow?: boolean;
  type?: CardTypeType;
}

export default defineComponent({
  name: "guluCard",
  props: {
    hoverable: {
      type: Boolean,
      required: false,
    },
    shadow: {
      type: Boolean,
      required: false,
    },
    type: {
      type: String as PropType<CardTypeType>,
      required: false,
      validator: (val: string) => {
        return [
          "secondary",
          "alert",
          "success",
          "purple",
          "warning",
          "violet",
          "error",
          "cyan",
          "dark",
          "lite",
        ].includes(val);
      },
    },
  },
  setup(props: CardProps) {
    const { hoverable, shadow, type } = props;
    const classes = computed(() => ({
      "gulu-card-hoverable": hoverable,
      "gulu-card-shadow": shadow,
      [`gulu-card-${type}`]: type,
    }));
    return { classes };
  },
});
</script>
<style lang="scss">
$border-color: #eaeaea;
$radius: 5px;
$secondary: #5b5b5b;
$alert: #ff0f74;
$success: #0062ec;
$purple: #fc18dc;
$warning: #f69d32;
$violet: #701fbe;
$error: #f01217;
$cyan: #39dfbb;
$theme: #000;
$colorBlack: #000;

.gulu-card {
  border: 1px solid $border-color;
  width: 100%;
  transition: all 0.25s;
  border-radius: $radius;

  &-hoverable:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;
  }

  &-shadow {
    box-shadow: rgba(0, 0, 0, 0.12) 0 5px 10px;

    &.gulu-card-hoverable:hover {
      box-shadow: rgba(0, 0, 0, 0.12) 0 8px 30px;
    }
  }

  &-secondary {
    background: $secondary;
    color: #fff;
  }

  &-alert {
    background: $alert;
    color: #fff;
  }

  &-success {
    background: $success;
    color: #fff;
  }

  &-purple {
    background: $purple;
    color: #fff;
  }

  &-warning {
    background: $warning;
    color: #fff;
  }

  &-violet {
    background: $violet;
    color: #fff;
  }

  &-error {
    background: $error;
    color: #fff;
  }

  &-cyan {
    background: $cyan;
    color: #fff;
  }

  &-dark {
    background: $theme;
    color: #fff;
  }

  &-lite {
    background: #fff;
    color: $colorBlack;
    border-color: #fff;

    .gulu-card-title {
      border-bottom: none;
    }
  }

  &-title {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-content,
  &-footer {
    padding: 16px;
  }

  &-footer {
    border-top: 1px dashed $border-color;
  }
}
</style>