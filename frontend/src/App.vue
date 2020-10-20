<template>
    <div
        id="app"
        class="w-full flex relative"
    >
        <div class="relative w-full overflow-hidden">
            <div class="inner relative h-full">
                <transition
                    name="fade"
                    mode="out-in"
                >
                    <router-view />
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    computed: {
        ...mapGetters('auth', ['loggedIn'])
    },

    created () {
        axios.defaults.withCredentials = true;
        axios.get('/api/sanctum/csrf-cookie');
    }
};
</script>

<style>
html,
body {
    height: 100%;
    font-size: 14px;
}

@media (min-width: 1200px) {
    html,
    body {
        font-size: 16px;
    }
}

#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #161e2e;
    background-color: #fff;
    font-size: 16px;
    font-weight: 400;
    min-height: 100%;
}

.form-input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #e2e8f0;
    border-width: 1px;
    border-radius: .25rem;
    font-size: 1rem;
    line-height: 1.5;
    padding: .5rem .75rem;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}
</style>
