<template>
    <div>
        <h1>counterStatus comp 1. - {{countStatus}}</h1>     
        <h1>counterGetters 1- {{counter3}}</h1>     
          <button @click="counterBy4(4)">povecaj za 4 mutation</button>
          <button @click="counterBy5(5)">povecaj za 5 mutation</button>
         <button @click="akcija100(100)">povecaj za 100 akcija</button>
       
    </div>
   
</template>

<script>
 import {mapGetters} from 'vuex';
 import {mapMutations} from 'vuex';
 import {mapActions} from 'vuex';
export default {

    computed:{
        // ...mapGetters(['counter3']),
        countStatus(){
            return this.$store.state.counter
        },
      
    },
  methods:{
        ...mapMutations(['counterBy4','counterBy5']),

        ...mapActions(['akcija100'])

  }
}
</script>

<style>

</style>
