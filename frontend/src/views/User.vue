<template>
    <Main>
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div class="mb-10">
                    <h2 class="text-3xl font-semibold leading-tight">
                        {{ userId ? 'Edit User' : 'Create User' }}
                    </h2>
                </div>

                <form
                    v-if="user"
                    class="py-10 px-12 w-full bg-white shadow-md rounded-md m-auto"
                    @submit.prevent="handleSubmit"
                >
                    <div class="mb-5">
                        <label
                            for="name"
                            class="text-2xl inline-block mb-2"
                        >
                            Name
                        </label>

                        <input
                            id="name"
                            v-model="user.name"
                            name="name"
                            type="text"
                            class="form-input block w-full rounded-md focus:border-primary-600 transition"
                            required
                        >
                    </div>

                    <div class="mb-5">
                        <label
                            for="email"
                            class="text-2xl inline-block mb-2"
                        >
                            Email
                        </label>

                        <input
                            id="email"
                            v-model="user.email"
                            name="email"
                            type="email"
                            class="form-input block w-full rounded-md focus:border-primary-600 transition"
                            required
                        >
                    </div>

                    <div
                        v-if="!userId"
                        class="mb-5"
                    >
                        <label
                            for="email"
                            class="text-2xl inline-block mb-2"
                        >
                            Password
                        </label>

                        <input
                            id="password"
                            v-model="user.password"
                            name="password"
                            type="password"
                            class="form-input block w-full rounded-md focus:border-primary-600 transition"
                            required
                        >
                    </div>

                    <div class="flex justify-end mt-10">
                        <Button
                            :loading="loading"
                            :label="userId ? 'Update' : 'Create'"
                            type="submit"
                            class="max-w-xs"
                        />
                    </div>
                </form>
            </div>
        </div>
    </Main>
</template>

<script>
import Main from '@/components/layout/Main';
import Button from '@/components/ui/Button';
import UserService from '@/services/UserService';

export default {
    components: {
        Main,
        Button
    },

    data: () => ({
        loading: false,
        user: null
    }),

    computed: {
        userId () {
            return this.$route.params.id;
        }
    },

    async mounted () {
        this.user = await this.getUser();
    },

    methods: {
        async getUser () {
            if (!this.userId) {
                return {
                    name: null,
                    email: null,
                    password: null
                };
            }

            const res = await UserService.get(this.$route.params.id);

            return res.data;
        },

        async handleSubmit () {
            this.loading = true;

            if (this.userId) {
                await this.update();
            } else {
                await this.create();
            }

            this.loading = false;
        },

        async create () {
            const res = await UserService.create(this.user);

            console.log(res);
        },

        async update () {
            const res = await UserService.update(this.userId, this.user);

            console.log(res);
        }
    }
};
</script>
