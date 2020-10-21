<template>
    <Main>
        <Table
            :items="users"
            heading="Users"
        />
    </Main>
</template>

<script>
import Main from '@/components/layout/Main';
import Table from '@/components/Table';
import UserService from '@/services/UserService';

export default {
    components: {
        Main,
        Table
    },

    data: () => ({
        users: []
    }),

    mounted () {
        this.getUsers();
    },

    methods: {
        async getUsers () {
            const res = await UserService.all();

            this.users = res.data;
        }
    }
};
</script>
