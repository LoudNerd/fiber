import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'


Vue.config.productionTip = false;


// const firebaseConfig = {
//   apiKey: "AIzaSyC9HrAb3JjGe5XdbYo79Mx_hNSDUSWngiU",
//   authDomain: "dashboard-7ce85.firebaseapp.com",
//   projectId: "dashboard-7ce85",
//   storageBucket: "dashboard-7ce85.appspot.com",
//   messagingSenderId: "581619969569",
//   appId: "1:581619969569:web:ace3c8fa983fa0b1227d60",
//   measurementId: "G-LYFSPBDM4C"
// }

// firebase.initializeApp(firebaseConfig)


new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
