<script>
const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
}

export default {
    data() {
        return {
            userTheme: THEMES.LIGHT,
        }
    },
    mounted() {
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
            this.setTheme(activeTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
        },
        getMediaPreference() {
            const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
            return hasDarkPreference ? THEMES.DARK : THEMES.LIGHT
        },
    },
}
</script>

<template>
    <b-field>
        <b-switch :model-value="userTheme === 'light'" passive-type="is-dark" type="is-warning" @change="toggleTheme">
            {{ userTheme === 'light' ? '☀️' : '🌙' }}
        </b-switch>
    </b-field>
</template>
