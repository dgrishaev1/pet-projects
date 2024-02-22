<script>
export default {
  data() {
    return {
      posts: new Array(3).fill("").map((_, index) => {
        return {
          id: index + 1,
          title: `Публикация №${index + 1}`,
          content: "Содержимое публикации",
          isHover: false,
        };
      }),
    };
  },
  methods: {
    toggleHoverCard(postId) {
      this.posts = this.posts.map((post) => {
        return post?.id === postId ? { ...post, isHover: !post.isHover } : post;
      });
    },
    onClickDelete(index) {
      this.$buefy.dialog.confirm({
        message: `Удалить публикацию №${index}?`,
        cancelText: "Отмена",
        confirmText: "Подтвердить",
        onConfirm: () => {
          this.$buefy.toast.open("Публикация удалена");
        },
      });
    },
  },
};
</script>

<template>
  <div
    v-for="post in posts"
    class="card mt-2 pt-3 pb-4 px-4"
    @mouseenter="toggleHoverCard(post.id)"
    @mouseleave="toggleHoverCard(post.id)"
  >
    <div
      class="is-flex is-justify-content-space-between is-align-items-center pb-1"
    >
      <h1 class="is-size-3">{{ post.title }}</h1>
      <b-button
        v-if="post.isHover"
        type="is-danger"
        @click="onClickDelete(post.id)"
        >Удалить</b-button
      >
    </div>
    <div>{{ post.content }}</div>
  </div>
</template>
