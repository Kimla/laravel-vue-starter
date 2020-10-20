<template>
    <AuthWrapper>
        <AuthTop
            heading="Forgot password"
            text="Please enter your email to continue"
        />

        <form
            class="mb-6"
            @submit.prevent="submitHandler"
        >
            <AuthField
                v-model="email"
                label="Email"
                name="email"
                type="email"
                autocomplete="username"
                class="mb-8"
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
        email: null
    }),

    computed: {
        ...mapGetters('auth', ['authUser', 'error', 'loading'])
    },

    methods: {
        submitHandler () {
            this.$store.dispatch('auth/forgotPassword', this.$data);
        }
    }
};
</script>
