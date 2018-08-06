<template>
    <div>   
        <label>Term: </label>
        <input type="text" v-model='term'/>
        <label>Definition: </label>
        <input type="text" v-model='definition'/>
    </div>
</template>

<script>
    export default {
        name: 'card-field',
        props: ['term', 'definition'],
        data () {
            return {
                //term: '',
                //definition: ''
            }
        }
    }
</script>

<style>
    
</style>