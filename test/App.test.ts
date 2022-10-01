import App from '~/App.vue';
import { mount } from '@vue/test-utils';
import FlashMessage from '~/components/FlashMessage.vue';
import { messagePlugin } from '~/messagePlugin';

describe('~/App.vue', () => {
  test('App', () => {
    expect(App).toBeTruthy();
  });

  beforeEach(() => {
    const el = document.createElement('div');
    el.id = 'flash-message';
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.outerHTML = ''
  });

  test('messagePluginが使われる時、FlashMessageがレンダリングされている', () => {
    const wrapper = mount(App, { global: {
      plugins: [messagePlugin]
    } });

    expect(wrapper.findComponent(FlashMessage).exists()).toBe(true);
  })
});