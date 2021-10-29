import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApolloClient from './apollo/index'
import { createApolloProvider } from '@vue/apollo-option'
import ElementUI from 'element-ui'

const apolloProvider = createApolloProvider({
  defaultClient: ApolloClient
})

createApp(App).use(ElementUI).use(store).use(router).use(apolloProvider).mount('#app')
