import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApolloClient from './apollo/index'
import { createApolloProvider } from '@vue/apollo-option'

const apolloProvider = createApolloProvider({
    defaultClient: ApolloClient,
})

createApp(App).use(store).use(router).use(apolloProvider).mount('#app')