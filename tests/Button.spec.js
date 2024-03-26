import { shallowMount } from '@vue/test-utils';
import PocButton from '@/components/Button.vue';

describe('PocButton.vue', () => {
  it('renders button with correct HTML', () => {
    const wrapper = shallowMount(PocButton, {
      props: { label: 'Click me', type: 'primary', size: 'medium' },
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
  
  it('renders button with provided label', () => {
    const label = 'Click me';
    const wrapper = shallowMount(PocButton, {
      props: { label },
    });
    expect(wrapper.text()).toContain(label);
  });

  it('renders button with correct type class', () => {
    const type = 'secondary';
    const label = 'Click me';
    const wrapper = shallowMount(PocButton, {
      props: { type, label },
    });
    expect(wrapper.classes(`poc-button--${type}`)).toBe(true);
  });

  it('renders button with correct size class', () => {
    const size = 'large';
    const label = 'Click me';
    const wrapper = shallowMount(PocButton, {
      props: { size, label },
    });
    expect(wrapper.classes(`poc-button--${size}`)).toBe(true);
  });

  it('renders button as disabled when disabled prop is true', () => {
    const label = 'Click me';
    const wrapper = shallowMount(PocButton, {
      props: { disabled: true, label },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });
  

  it('emits click event when button is clicked', async () => {
    const label = 'Click me';
    const wrapper = shallowMount(PocButton, {
        props: { label },
      });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
