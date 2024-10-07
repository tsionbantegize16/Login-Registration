<template>
  <div >
    <TheHeader :title="title" />  <!-- Corrected prop binding -->
    <div class="container">
      <base-card>
    <base-button @click="switchTab('login')" :mode="setLoginActiveTab">Login</base-button>
    <base-button @click="switchTab('register')" :mode="setRegisterActiveTab">Register</base-button>
  </base-card>
  <keep-alive>
     <component :is="selectedTab"></component>
  </keep-alive>
   
  </div>
  </div>
</template>

<script>

import TheHeader from './components/Layouts/TheHeader.vue';
import Login from './components/Authentication/Login.vue';
import Register from './components/Authentication/Register.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
    Login,
    Register,
  },
  data() {
    return {
      title: 'UnConnection',
      selectedTab : 'login',
    };
  },
  methods:{
    switchTab(tab){
      this.selectedTab = tab;
    }
  },
  computed: {
    setLoginActiveTab(){
      return this.selectedTab === 'login' ? '' : 'default';
    },
    setRegisterActiveTab() {
      return this.selectedTab === 'register' ? '' : 'default';
    }
  }
};
</script>

<style>
.container{
  width: 90%;
  margin: 0 auto;

}
</style>
