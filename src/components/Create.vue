<template>
    <div class="create">
        
        <div ref="container">
            <card-field
                v-for="card in cards"
                v-bind:term="card.term"
                v-bind:definition="card.definition"
            ></card-field>
        </div>
        
        <button @click="newCard()">Add new card</button>
        <button @click="createSet()">Create Set</button>

        <button @click="logout()"> LOG OUT</button>
    </div>
</template>


<script>
    
import Vue from 'vue'
import firebase from 'firebase'
import CardField from './card-field'
    
export default {
  name: 'Create',
  data () {
    return {
      term: '',
      definition: '',
      cards: [
          {term: "test", definition: "this is a test"},
          {term: "test #2", definition: "pray 4 me"}
          
      ],
      username: firebase.auth().currentUser.displayName
    }
  },
    methods: {

        logout: function(){
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        },
        
        createSet(){
            const userId = firebase.auth().currentUser.uid;
            var newSetKey = firebase.database().ref().child('users').child(userId).push().key;
            var cardIndex;
            for (cardIndex in this.cards){
                firebase.database().ref('users').child(userId).child('sets').child(newSetKey).push({
                    term: this.cards[cardIndex].term, definition: this.cards[cardIndex].definition
                })
            }            
        },
        
        newCard(){
            //create a new card-field component, add to UI
            var ComponentClass = Vue.extend(CardField)
            var instance = new ComponentClass({
                propsData: {term: 'newCard', definition: 'newCard'}
            })
            //instance.$mount()
            //this.$refs.container.appendChild(instance.$el)
            
            //add to cards[] array
            this.cards.push(instance)

            
        }
    },
    components: {
        CardField
    }

//    firebase(){
//        const userId = firebase.auth().currentUser.uid
//        return{
//            flashcards: firebase.database().ref('users').child(userId)
//        }
//    }
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
