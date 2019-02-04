<template>
    <div>
      <app-test></app-test>
      <router-view></router-view>
    </div>
</template>

<script>
import Test from './test.vue'
export default {
  components:{
    appTest:Test
  },
 data:function(){
   return {
     status:'statufffffffffffffffs'
   }
 }
}
</script>

<style>

</style>
