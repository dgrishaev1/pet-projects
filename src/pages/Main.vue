<script>
export default {
    data() {
        return {
            posts: new Array(3).fill('').map((_, index) => {
                return {
                    id: index + 1,
                    title: `Квиз №${index + 1}`,
                    content: 'Краткое содержание квиза',
                    isHover: false,
                }
            }),
        }
    },
    methods: {
        toggleHoverCard(postId) {
            this.posts = this.posts.map((post) => {
                return post?.id === postId ? { ...post, isHover: !post.isHover } : post
            })
        },
        onClickDelete(index) {
            this.$buefy.dialog.confirm({
                message: `Удалить квиз №${index}?`,
                cancelText: 'Отмена',
                confirmText: 'Подтвердить',
                onConfirm: () => {
                    this.$buefy.toast.open('Квиз удалён')
                },
            })
        },
    },
}
</script>

<template>
    <div
        v-for="post in posts"
        :key="post.id"
        class="card mt-2 pt-3 pb-4 px-4"
        @mouseenter="toggleHoverCard(post.id)"
        @mouseleave="toggleHoverCard(post.id)"
    >
        <div class="is-flex is-justify-content-space-between is-align-items-center pb-1">
            <h1 class="is-size-3">{{ post.title }}</h1>
            <b-button v-if="post.isHover" type="is-danger" @click="onClickDelete(post.id)">Удалить</b-button>
        </div>
        <div>{{ post.content }}</div>
    </div>
</template>
