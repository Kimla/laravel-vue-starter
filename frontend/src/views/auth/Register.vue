<template>
    <AuthWrapper>
        <AuthTop
            heading="Welcome"
            text="Please register to continue"
        />

        <form
            class="mb-5"
            @submit.prevent="register"
        >
            <AuthField
                v-model="name"
                label="Name"
                name="registration_name"
                autocomplete="name"
            />

            <AuthField
                v-model="email"
                label="Email"
                name="registration_email"
                type="email"
                autocomplete="username"
            />

            <AuthField
                v-model="password"
                label="Password"
                name="registration_password"
                type="password"
                class="mb-6"
                autocomplete="new-password"
            />

            <Button
                label="Register"
                type="submit"
            />
        </form>

        <AuthLink
            title="Already have an account?"
            url="/login"
        />
    </AuthWrapper>
</template>

<script>
import AuthWrapper from '@/components/auth/AuthWrapper';
import AuthTop from '@/components/auth/AuthTop';
import AuthField from '@/components/auth/AuthField';
import AuthLink from '@/components/auth/AuthLink';
import Button from '@/components/ui/Button';

export default {
    components: {
        AuthWrapper,
        AuthTop,
        AuthField,
        AuthLink,
        Button
    },

    data: () => ({
        name: null,
        email: null,
        password: null
    }),

    methods: {
        register () {
            this.$store.dispatch('auth/register', this.$data).then(() => {
                this.$router.push('/');
            });
        }
    }
};
</script>
