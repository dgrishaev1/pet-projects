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
  <div v-for="post in posts" class="card mt-2 pt-3 pb-4 px-4">
    <h1 class="is-size-3 pb-1">{{ post.title }}</h1>
    <div>{{ post.content }}</div>
  </div>
</template>
