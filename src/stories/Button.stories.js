import { fn } from '@storybook/test';
import PocButton from '@/components/Button.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/PocButton',
  component: PocButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    type: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary', 'danger'] },
    backgroundColor: { control: 'color' },
    disabled: { control: { type: 'boolean' }}
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    type: 'secondary',
    label: 'Button',
  },
};

export const Tertiary = {
  args: {
    type: 'tertiary',
    label: 'Button',
  },
};

export const Danger = {
  args: {
    type: 'danger',
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
