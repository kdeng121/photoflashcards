<template>
  <div class="hello">
          <div>
              <label>Name: </label>
                <input type="text" v-model="name"/>
              <button @click="writeUserData()">Add</button>
        </div>
      
      <div>
          
          <ul>
              <li v-for="personName in flashcards" >{{ personName.name }}</li>
              <b>Logged in as {{ username }} </b>
        </ul>
    
    </div>
      <button @click="logout()"> LOG OUT</button>
  </div>
</template>


<script>
    
//import { namesRef } from '../firebase'
//  import { messagesRef } from '../firebase'
import firebase from 'firebase'
    
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: '',
      username: firebase.auth().currentUser.displayName
    }
  },
    methods: {
        submitName(){
            messagesRef.push({ name: this.name, text: this.name })
        },
        writeUserData(){
            firebase.database().ref('users/' + firebase.auth().currentUser.uid).push({
                name: this.name, text: "yolo"
            });
        },
        logout: function(){
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        }
    },
//    firebase: {
//        users: firebase.database().ref('users/' + firebase.auth().currentUser.uid)
//    }
    firebase(){
        const userId = firebase.auth().currentUser.uid
        return{
            flashcards: firebase.database().ref('users').child(userId)
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
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
