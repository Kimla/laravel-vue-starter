<template>
    <div class="mb-5">
        <label
            :for="name"
            class="text-2xl inline-block mb-2"
        >
            {{ label }}
        </label>

        <input
            :id="name"
            :name="name"
            :type="type"
            :autocomplete="autocomplete"
            class="form-input block w-full rounded-md focus:border-primary-600 transition"
            required
            @input="$emit('input', $event.target.value)"
        >
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: String,
            required: true
        },

        name: {
            type: String,
            required: true
        },

        type: {
            type: String,
            default: 'text'
        },

        autocomplete: {
            type: String,
            default: null
        }
    }
};
</script>
