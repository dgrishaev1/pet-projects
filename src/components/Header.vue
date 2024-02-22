<script>
import { ROUTES } from "../pages/router.js";

export default {
  computed: {
    isCreateButton() {
      return this.$route?.path === ROUTES.MAIN;
    },
  },
};
</script>

<template>
  <header class="card p-4 has-background-white">
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <h1 class="is-size-2">Vue blog</h1>
      <div>
        <router-link v-if="isCreateButton" to="/create">
          <b-button type="is-info">Создать публикацию</b-button>
        </router-link>
      </div>
    </div>
  </header>
</template>
