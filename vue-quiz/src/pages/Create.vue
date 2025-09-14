<script>
export default {
    data() {
        return {
            title: '',
            content: '',
        }
    },
}
</script>

<template>
    <div class="card mt-2 pt-3 pb-4 px-4">
        <div>
            <h1 class="is-size-3">Создать квиз</h1>
        </div>
        <form class="mt-2">
            <b-field label="Заголовок">
                <b-input v-model="title" placeholder="Введите" />
            </b-field>
            <b-field label="Содержимое">
                <b-input v-model="content" placeholder="Введите" type="textarea" maxlength="200" />
            </b-field>
            <b-button type="is-success" :disabled="!title || !content">Создать квиз</b-button>
        </form>
    </div>
</template>
