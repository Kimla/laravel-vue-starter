<template>
    <div class="mb-8">
        <h1 class="text-2xl mb-1">
            {{ heading }}
        </h1>
        <p>
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
