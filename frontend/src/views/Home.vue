<template>
    <Main>
        <Table />
    </Main>
</template>

<script>
import Main from '@/components/layout/Main';
import Table from '@/components/Table';
import * as API from '@/services/API.js';

export default {
    components: {
        Main,
        Table
    },

    mounted () {
        this.users();
    },

    methods: {
        async users () {
            const res = await API.apiClient.get('/admin/users');

            console.log(res);
        }
    }
};
</script>
