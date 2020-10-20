<template>
    <div class="mb-8 text-center">
        <h1 class="text-4xl mb-2">
            {{ heading }}
        </h1>
        <p class="text-2xl">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            required: true
        },

        text: {
            type: String,
            required: true
        }
    }
};
</script>
