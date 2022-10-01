import { initializeMessage } from '~/composables/useMessage';

describe('composables/useMessage', () => {
  describe('initializeMessage', () => {
    test('message実行時に指定した値が設定されている', () => {
      const { isShow, messageValue, messageOption, message } = initializeMessage();

      expect([isShow.value, messageValue.value, messageOption.value]).toEqual([false, '', { autoHide: true, hideTime: 2000 }]);
      message('test', { autoHide: false, hideTime: 0 });
      expect([isShow.value, messageValue.value, messageOption.value]).toEqual([true, 'test', { autoHide: false, hideTime: 0 }]);
    });

    test('clearMessage実行されるとメッセージが表示されない', () => {
      const { isShow, message, clearMessage } = initializeMessage();

      expect(isShow.value).toEqual(false);
      message('test');
      expect(isShow.value).toEqual(true);
      clearMessage();
      expect(isShow.value).toEqual(false);
    });

    test('autoHide: trueの時、指定秒数経過後メッセージが消える', () => {
      vi.useFakeTimers();
      const { isShow, message } = initializeMessage();

      expect(isShow.value).toEqual(false);
      message('test', { autoHide: true, hideTime: 1000 });
      expect(isShow.value).toEqual(true);

      vi.advanceTimersByTime(1000);
      expect(isShow.value).toEqual(false);

      vi.restoreAllMocks();
    });
  })
});