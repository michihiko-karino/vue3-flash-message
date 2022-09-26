import { initializeMessage, messageKey } from '~/composables/useMessage';
import { Plugin } from 'vue';
import FlashMessage from '~/components/FlashMessage.vue';

export const messagePlugin: Plugin = {
  install(app) {
    app.provide(messageKey, initializeMessage());
    app.component('FlashMessage', FlashMessage);
  },
};
