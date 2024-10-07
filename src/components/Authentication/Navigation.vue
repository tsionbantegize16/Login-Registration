<template>
  <base-card>
    <base-button>Login</base-button>
    <base-button>Register</base-button>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';

export default {
  name: 'AuthNavigation', // Rename to a multi-word component name
  components: { BaseButton }
};
</script>

<style scoped>

</style>
