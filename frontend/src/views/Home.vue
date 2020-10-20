<template>
    <div class="home py-8 px-6">
        <h1 class="text-2xl mb-4">
            Home
        </h1>

        <Button
            label="Log out"
            @click="logout"
        />
    </div>
</template>

<script>
import Button from '@/components/ui/Button';

export default {
    components: {
        Button
    },

    methods: {
        logout () {
            this.$store.dispatch('auth/logout').then(() => {
                this.$router.push('/login');
            });
        }
    }
};
</script>
