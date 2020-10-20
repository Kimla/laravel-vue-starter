<template>
    <button
        :class="[
            bg,
            {
                'py-3 px-3 text-sm': size === 'lg',
                'py-2 px-5 text-xs': size === 'sm'
            }
        ]"
        class="bg-indigo-600 rounded-md w-full text-white text-medium hover:bg-indigo-500 tracking-wider font-medium uppercase transition leading-snug"
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
