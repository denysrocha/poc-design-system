<template>
  <button type="button" :class="classes" @click="onClick" :style="style" :disabled="disabled">{{ label }}</button>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'poc-button',

  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      validator: function (value) {
        return ['primary', 'secondary', 'tertiary', 'danger'].indexOf(value) !== -1;
      },
    },
    size: {
      type: String,
      validator: function (value) {
        return ['small', 'medium', 'large'].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'poc-button': true,
        [`poc-button--${props.type || 'primary'}`]: true,
        [`poc-button--${props.size || 'medium'}`]: true,
        'poc-button--disabled': props.disabled,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit('click');
      },
    };
  },
};
</script>
<style>
@import './button.css';
</style>
