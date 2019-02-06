<template>
    <div>
       <h1>counter 2 - {{countStatus}}</h1>
        <h1>counterMilion 2- {{countMilion2}}</h1>     
        <button @click="povecaj50(55)">povecaj za 50</button>
        <button @click="ak100(190)">akcija za 100</button>
    </div>
</template>

<script>
export default {
    computed:{
        countStatus(){
            return this.$store.state.counter
        },
         countMilion2(){
            return this.$store.getters.counterMilion;
        }
    },
  methods:{
      povecaj50:function(payload){
          this.$store.commit('counterBy51',payload);
      },
      ak100:function(payload){
          this.$store.dispatch('akcija100',payload)
      }
  }
}
</script>

<style>

</style>
