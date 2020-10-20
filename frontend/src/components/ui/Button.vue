<template>
    <button
        :class="[
            loading ? 'bg-primary-500 text-primary-500 cursor-default' : 'bg-primary-600 hover:bg-primary-500 text-white '
        ]"
        :type="type"
        :disabled="loading"
        class="py-4 px-6 relative rounded-md w-full text-xl tracking-wider font-medium uppercase transition leading-snug"
        @click="$emit('click')"
    >
        {{ label }}

        <svg
            v-if="loading"
            class="animate-spin text-white h-8 w-8 -ml-4 -mt-4 absolute inset-1/2"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
            />
            <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
        </svg>
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

        loading: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style>
</style>
