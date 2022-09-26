<script lang="ts">
import { defineComponent } from 'vue';
import { useMessage } from '~/composables/useMessage';

export default defineComponent({
  setup() {
    const { message, clearMessage } = useMessage();
    const onClickOne = () => {
      message('button');
    };
    const onClickTwo = () => {
      clearMessage();
    };
    const onClickThree = () => {
      message('autoHide: false', { autoHide: false });
    };
    const onClickFour = () => {
      message('autoHide: true, hideTime: 5000', { autoHide: true, hideTime: 5000 });
    };

    return { onClickOne, onClickTwo, onClickThree, onClickFour };
  },
});
</script>

<template>
  <div>
    <button data-testid="defalut" @click="onClickOne">default</button>
    <button @click="onClickThree">autoHide: false</button>
    <button @click="onClickFour">autoHide: true: hideTime: 5000</button>
    <button data-testid="clear" @click="onClickTwo">clear</button>
  </div>
</template>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  main {
    max-width: 760px;
  }
}
</style>
