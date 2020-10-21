<template>
    <Main>
        <Table />
    </Main>
</template>

<script>
import Main from '@/components/layout/Main';
import Table from '@/components/Table';

export default {
    components: {
        Main,
        Table
    },

    methods: {
        logout () {
            this.$store.dispatch('auth/logout');
        }
    }
};
</script>
