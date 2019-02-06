<template>
    <div>
      <Counter1 />
      <Counter2 />
     
    </div>
</template>

<script>
import Counter1 from './components/Counter1.vue'
import Counter2 from './components/Counter2.vue'

export default {
  components:{
    Counter1:Counter1,
    Counter2:Counter2
  },
 data:function(){
   return {
     status:'statuffffffffffs'
   }
 }
}
</script>

<style>

</style>
