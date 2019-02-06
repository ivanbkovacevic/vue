<template>
    <div>
        <h1>counter 1 - {{countStatus}}</h1>     
        <h1>counterMilion 1- {{countMilion1}}</h1>     
         <button @click="povecaj11(111)">povecaj za 11</button>
    </div>
   
</template>

<script>
export default {
    computed:{
        countStatus(){
            return this.$store.state.counter
        },
        countMilion1(){
            return this.$store.getters.counterMilion;
        }
    },
  methods:{
      povecaj11:function(payload){
          this.$store.commit('counterBy11',payload);
      }
  }
}
</script>

<style>

</style>
