import Vue from 'vue'
import App from './App.vue'
import Amplify from 'aws-amplify'
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.VUE_APP_REGION,
    userPoolId: process.env.VUE_APP_USER_POOL_ID,
    identityPoolId: process.env.VUE_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.VUE_APP_APP_CLIENT_ID
  },
  API: {
    endpoints: [
      {
        name: 'perfume',
        endpoint: process.env.VUE_APP_API_URL,
        region: process.env.VUE_APP_API_REGION
      }
    ]
  }
});

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
