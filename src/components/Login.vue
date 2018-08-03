<template>
  <div class="login">
      <h2>Sign in bro</h2>
      <button @click="login()">SIGN IN WITH GOOGLE</button>
  </div>
</template>

<script>

import firebase from 'firebase'
    
export default {
  name: 'login',
  data: function() {
    return {
    }
  },
    methods: {
        login: function(){
              // Sign in Firebase using popup auth and Google as the identity provider.
              var provider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(provider).then(
                    (user) => {
                        this.$router.replace('/')
                  }
              );
        }
    }
    
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
