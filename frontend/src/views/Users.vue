<template>
    <Main>
        <h2 class="text-2xl font-semibold leading-tight">
            Users
        </h2>

        <BaseTable>
            <TableHeader>
                <TableHeaderCell>
                    User
                </TableHeaderCell>

                <TableHeaderCell>
                    Role
                </TableHeaderCell>

                <TableHeaderCell>
                    Created at
                </TableHeaderCell>

                <TableHeaderCell>
                    Status
                </TableHeaderCell>
            </TableHeader>

            <TableBody>
                <TableRow
                    v-for="user in users"
                    :key="user.id"
                    :to="`/users/${user.id}`"
                >
                    <TableCell>
                        <div class="flex items-center">
                            <Avatar class="mr-3" />

                            <p class="text-gray-900 whitespace-no-wrap">
                                {{ user.name }}
                            </p>
                        </div>
                    </TableCell>

                    <TableCell>
                        <p class="text-gray-900 whitespace-no-wrap capitalize">
                            {{ user.roles.map(role => role.name).join(', ') }}
                        </p>
                    </TableCell>

                    <TableCell>
                        <p class="text-gray-900 whitespace-no-wrap">
                            {{ user.created_at }}
                        </p>
                    </TableCell>

                    <TableCell>
                        <Badge />
                    </TableCell>
                </TableRow>
            </TableBody>
        </BaseTable>
    </Main>
</template>

<script>
import Main from '@/components/layout/Main';
import BaseTable from '@/components/table/BaseTable';
import TableHeader from '@/components/table/TableHeader';
import TableHeaderCell from '@/components/table/TableHeaderCell';
import TableBody from '@/components/table/TableBody';
import TableRow from '@/components/table/TableRow';
import TableCell from '@/components/table/TableCell';
import Avatar from '@/components/ui/Avatar';
import Badge from '@/components/ui/Badge';
import UserService from '@/services/UserService';

export default {
    components: {
        Main,
        BaseTable,
        TableHeader,
        TableHeaderCell,
        TableBody,
        TableRow,
        TableCell,
        Avatar,
        Badge
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
