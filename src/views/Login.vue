<template>
    <div class="vue-tempalte">
        <form @submit.prevent="userLogin">
            <h3>Login</h3>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="user.email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="user.password" />
            </div>
            <br>

            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
            <br>
            <p class="forgot-password text-right">
                New Member? Click here
                <router-link to="/signup"> to Create Account</router-link>
            </p>

            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import firebase from "firebase/app";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Login",

  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    userLogin() {
        firebase
        .auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
            this.$router.push('/landing')
        })
        .catch((error) => {
          alert(error.message);
        });
    }
  }
};
</script>
