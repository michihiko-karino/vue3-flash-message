import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import FlashMessage from '~/components/FlashMessage.vue';
import { messageKey, initializeMessage } from '~/composables/useMessage';

describe('components/FlashMessage.vue', () => {
  beforeEach(() => {
    const el = document.createElement('div');
    el.id = 'flash-message';
    document.body.appendChild(el);
  });

  afterEach(() => {
    document.body.outerHTML = ''
  });

  test('メッセージが表示される', async () => {
    const provided = initializeMessage();
    mount(FlashMessage, { global: {
      provide: { [messageKey]: provided }
    } });

    expect(document.getElementById('flash-message')?.innerHTML).not.toContain('test');
    const { message, clearMessage } = provided;

    message('test');
    await nextTick();
    expect(document.getElementById('flash-message')?.innerHTML).toContain('test');

    clearMessage();
    await nextTick();
    expect(document.getElementById('flash-message')?.innerHTML).not.toContain('test');
  })
});