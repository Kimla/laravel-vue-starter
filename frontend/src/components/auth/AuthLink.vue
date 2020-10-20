<template>
    <div class="text-center">
        <router-link
            :to="url"
            class="text-indigo-600 font-medium tracking-wide text-xl hover:text-indigo-500"
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
