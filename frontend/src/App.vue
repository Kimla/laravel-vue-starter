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
}

html {
    font-size: 10px;
}

@media (min-width: 640px) {
    html {
        font-size: 10.5px;
    }
}

@media (min-width: 768px) {
    html {
        font-size: 11px;
    }
}

@media (min-width: 1024px) {
    html {
        font-size: 11.5px;
    }
}

@media (min-width: 1280px) {
    html {
        font-size: 12px;
    }
}

@media (min-width: 1680px) {
    html {
        font-size: 12.5px;
    }
}

#app {
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #161e2e;
    background-color: #fff;
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
    border-radius: 0.375rem;
    font-size: 1.6rem;
    line-height: 1.5;
    padding: 0.675rem 1rem;
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
