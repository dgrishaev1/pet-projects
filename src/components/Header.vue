<script>
import { ROUTES } from '../pages/router.js'

// todo: перенести логику с темой в отдельное место (с заведением констант)

export default {
    data() {
        return {
            userTheme: 'light',
        }
    },
    computed: {
        isCreateButton() {
            return this.$route?.path === ROUTES.MAIN
        },
    },
    mounted() {
        console.log()
        const initUserTheme = this.getTheme() || this.getMediaPreference()
        this.setTheme(initUserTheme)
    },
    methods: {
        getTheme() {
            return localStorage.getItem('user-theme')
        },
        setTheme(theme) {
            localStorage.setItem('user-theme', theme)
            this.userTheme = theme
            document.documentElement.className = `theme-${theme}`
        },
        toggleTheme() {
            const activeTheme = localStorage.getItem('user-theme')
            this.setTheme(activeTheme === 'light' ? 'dark' : 'light')
        },
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
            return hasDarkPreference ? 'dark' : 'light'
        },
    },
}
</script>

<template>
    <header class="card p-4">
        <div class="is-flex is-justify-content-space-between is-align-items-center">
            <h1 class="gradient-title is-size-2">Vue квиз</h1>

            <div class="columns is-align-items-center is-1">
                <div class="column">
                    <router-link v-if="isCreateButton" to="/create">
                        <b-button type="is-info">Создать квиз</b-button>
                    </router-link>
                </div>
                <div class="column">
                    <b-field>
                        <b-switch
                            :model-value="userTheme === 'light'"
                            passive-type="is-dark"
                            type="is-warning"
                            @change="toggleTheme"
                        >
                            {{ userTheme === 'light' ? '☀️' : '🌙' }}
                        </b-switch>
                    </b-field>
                </div>
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
