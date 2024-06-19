import './assets/main.css'

import { createApp } from 'vue'
import FoodItem from './components/FoodItem.vue'

import App from './App.vue'

const app = createApp(App)
app.component('food-item', FoodItem)
app.mount('#app')
