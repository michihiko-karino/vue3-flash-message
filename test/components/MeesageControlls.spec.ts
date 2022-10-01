import { mount } from '@vue/test-utils';
import { useMessage } from '~/composables/useMessage';
import MeesageControlls from '~/components/MeesageControlls.vue';
import { Mock } from 'vitest';


vi.mock('~/composables/useMessage', () => {
  const message = vi.fn();
  const clearMessage = vi.fn();

  return { useMessage: () => ({ message, clearMessage }) };
});

describe('components/MeesageControlls.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('メッセージ表示ボタンが押された時、メッセージが表示される', () => {
    const wrapper = mount(MeesageControlls);
    const mockedUseMessage = useMessage();

    wrapper.find<HTMLButtonElement>('[data-testid="defalut"]').element.click();
    expect((mockedUseMessage.message as Mock).mock.calls.length).toBe(1);
  })

  test('クリアボタンが押された時、メッセージが消える', () => {
    const wrapper = mount(MeesageControlls);
    const mockedUseMessage = useMessage();

    wrapper.find<HTMLButtonElement>('[data-testid="clear"]').element.click();
    expect((mockedUseMessage.clearMessage as Mock).mock.calls.length).toBe(1);
  })
});