<template>
  <div class="hello">
      <div>
          <label>Name: </label>
            <input type="text" v-model="name"/>
          <button @click="submitName()">Add</button>
    </div>
  </div>
</template>

<script>
    
import { namesRef } from '../firebase'
    
export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'paul'
    }
  },
    methods: {
        submitName(){
            namesRef.push({ name: this.name, edit: false })
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
