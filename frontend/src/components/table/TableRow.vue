<template>
    <router-link
        tag="tr"
        class="tableRow cursor-pointer"
        :to="to"
    >
        <slot />
    </router-link>
</template>

<script>
export default {
    props: {
        to: {
            required: true,
            type: String
        }
    }
};
</script>

<style lang="postcss" scoped>
.tableRow:hover >>> td {
    @apply bg-gray-100
}
</style>
