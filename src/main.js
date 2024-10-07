import { createApp } from 'vue';
import App from './App.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue'; // if you want to register BaseButton as well

const app = createApp(App);

// Register BaseCard globally
app.component('base-card', BaseCard);

// Optionally register BaseButton globally
app.component('base-button', BaseButton);

app.mount('#app');
