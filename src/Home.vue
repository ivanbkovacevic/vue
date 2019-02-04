<template>
<div>
        <p>nesto{{status}}</p>
    <button @click='changeStatus'>menjaj</button>
</div>

</template>
<script>
export default {
 data:function(){
   return {
     status:'statufffffffffffffffs'
   }
 },
 methods:{
     changeStatus(){
         this.$store.state.counter++
     }
 }
}
</script>
