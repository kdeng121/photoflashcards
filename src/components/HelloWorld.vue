<template>
  <div class="hello">
      <div>
          <label>Name: </label>
            <input type="text" v-model="name"/>
          <button @click="writeUserData()">Add</button>
    </div>
      
      <div>
          
          <ul>
              <li v-for="personName in users" >{{ personName.name }}</li>
    
        </ul>
    
    </div>
  </div>
</template>


<script>
    
//import { namesRef } from '../firebase'
import { messagesRef } from '../firebase'
import firebase from 'firebase'
    
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: ''
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
        }
    },
    firebase: {
        users: firebase.database().ref('users/')
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
