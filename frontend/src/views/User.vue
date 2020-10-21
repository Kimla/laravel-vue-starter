<template>
    <Main>
        <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
                <div class="mb-10">
                    <h2 class="text-3xl font-semibold leading-tight">
                        Edit User
                    </h2>
                </div>

                <form
                    v-if="user"
                    class="py-10 px-12 w-full bg-white shadow-md rounded-md m-auto"
                    @submit.prevent="update"
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

                    <div class="mb-10">
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

                    <div class="flex justify-end">
                        <Button
                            label="Update"
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
        user: null
    }),

    mounted () {
        this.getUser();
    },

    methods: {
        async getUser () {
            const res = await UserService.get(this.$route.params.id);

            this.user = res.data;
        },

        async update () {
            const res = await UserService.update(this.$route.params.id, this.user);

            console.log(res);
        }
    }
};
</script>
