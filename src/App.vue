<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '~/components/layout/MainLayout.vue';
import MeesageControlls from './components/MeesageControlls.vue';

export default defineComponent({
  components: { MainLayout, MeesageControlls },
});
</script>

<template>
  <FlashMessage />
  <MainLayout>
    <MeesageControlls />
  </MainLayout>
</template>

<style scoped></style>
