<script>
export default {
  data() {
    return {
      posts: new Array(3).fill({
        title: "Публикация",
        content: "Содержимое публикации",
      }),
    };
  },
};
</script>

<template>
  <header class="card p-4 has-background-white">
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <h1 class="is-size-2">Vue blog</h1>
      <div><b-button type="is-info">Создать публикацию</b-button></div>
    </div>
  </header>
  <main>
    <div v-for="post in posts" class="card pt-3 pl-4 pb-4 mt-2">
      <h1 class="is-size-3 pb-1">Наименование карточки</h1>
      <div>Содержимое карточки</div>
    </div>
  </main>
</template>
