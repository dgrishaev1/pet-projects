<script>
import HeaderComponent from './components/Header.vue'

export default {
    components: { HeaderComponent },
}
</script>

<template>
    <header-component />
    <main>
        <router-view />
    </main>
</template>
