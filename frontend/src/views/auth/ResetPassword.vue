<template>
    <AuthWrapper>
        <AuthTop
            heading="Reset password"
            text="Please enter your new password to continue"
        />

        <form
            class="mb-6"
            @submit.prevent="submitHandler"
        >
            <AuthField
                v-model="password"
                label="Password"
                name="registration_password"
                type="password"
                class="mb-8"
                autocomplete="new-password"
            />

            <Button
                :loading="loading"
                label="Submit"
                type="submit"
            />
        </form>

        <AuthLink
            title="Back to sign in"
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
        password: null
    }),

    computed: {
        ...mapGetters('auth', ['authUser', 'error', 'loading'])
    },

    methods: {
        submitHandler () {
            this.$store.dispatch('auth/resetPassword', {
                password: this.password,
                password_confirmation: this.password,
                token: this.$route.params.token,
                email: this.$route.query.email
            });
        }
    }
};
</script>
