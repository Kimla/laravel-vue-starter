<template>
    <button
        class="py-4 px-6 bg-indigo-600 rounded-md w-full text-white text-xl hover:bg-indigo-500 tracking-wider font-medium uppercase transition leading-snug"
        :type="type"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },

        type: {
            type: String,
            default: 'button'
        },

        bg: {
            type: String,
            default: 'bg-indigo-500'
        },

        size: {
            type: String,
            default: 'lg'
        }
    }
};
</script>

<style>
</style>
