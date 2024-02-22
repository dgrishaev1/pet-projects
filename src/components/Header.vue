<script>
import { ROUTES } from '../pages/router.js'

export default {
    computed: {
        isCreateButton() {
            return this.$route?.path === ROUTES.MAIN
        },
    },
}
</script>

<template>
    <header class="card p-4 has-background-white">
        <div class="is-flex is-justify-content-space-between is-align-items-center">
            <h1 class="gradient-title is-size-2">Vue викторина</h1>
            <div>
                <router-link v-if="isCreateButton" to="/create">
                    <b-button type="is-info">Создать квиз</b-button>
                </router-link>
            </div>
        </div>
    </header>
</template>

<style scoped>
.gradient-title {
    background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
}
</style>
