import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ApolloClient from './apollo/index'
import { createApolloProvider } from '@vue/apollo-option'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const apolloProvider = createApolloProvider({
    defaultClient: ApolloClient,
})

createApp(App).use(router).use(apolloProvider).mount('#app')