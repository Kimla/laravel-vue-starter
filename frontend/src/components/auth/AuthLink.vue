<template>
    <div class="text-center">
        <router-link
            :to="url"
            class="text-primary-600 font-semibold tracking-wide text-xl hover:text-primary-500"
        >
            {{ title }}
        </router-link>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },

        url: {
            type: String,
            required: true
        }
    }
};
</script>
