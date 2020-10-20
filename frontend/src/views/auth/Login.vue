<template>
    <AuthWrapper>
        <AuthTop
            heading="Welcome"
            text="Please login to continue"
        />

        <form
            class="mb-6"
            @submit.prevent="login"
        >
            <AuthField
                v-model="email"
                label="Email"
                name="email"
                type="email"
                autocomplete="username"
            />

            <AuthField
                v-model="password"
                label="Password"
                name="password"
                type="password"
                class="mb-8"
                autocomplete="current-password"
            />

            <Button
                :loading="loading"
                label="Sign in"
                type="submit"
            />
        </form>

        <div class="flex justify-between">
            <AuthLink
                title="Forgot your password?"
                url="/reset-password"
            />

            <AuthLink
                title="Register"
                url="/register"
            />
        </div>
    </AuthWrapper>
</template>

<script>
import AuthWrapper from '@/components/auth/AuthWrapper';
import AuthTop from '@/components/auth/AuthTop';
import AuthField from '@/components/auth/AuthField';
import AuthLink from '@/components/auth/AuthLink';
import Button from '@/components/ui/Button';
import { mapGetters } from 'vuex';

export default {
    components: {
        AuthWrapper,
        AuthTop,
        AuthField,
        Button,
        AuthLink
    },

    data: () => ({
        email: null,
        password: null
    }),

    computed: {
        ...mapGetters('auth', ['authUser', 'error', 'loading'])
    },

    methods: {
        async login () {
            await this.$store.dispatch('auth/login', this.$data);

            if (this.authUser) {
                this.$router.push(this.$route.query.redirect || '/');
            }
        }
    }
};
</script>
