import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ApolloClient from './apollo/index'
import { createApolloProvider } from '@vue/apollo-option'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



const apolloProvider = createApolloProvider({
    defaultClient: ApolloClient,
})

createApp(App).use(store).use(router).use(apolloProvider).use(ElementPlus).mount('#app')
