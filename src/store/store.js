import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store= new Vuex.Store({
    state:{
        counter:5
    },
    getters:{
        counter3:state=>{
            let Sale=state.counter+=3;
            return Sale;
        }
    },
    mutations:{
       counterBy4:(state,payload)=>{
           state.counter+=payload;
       },
       counterBy5:(state,payload)=>{
        state.counter+=payload;
    },
       counterBy100:(state,payload)=>{
        state.counter+=payload;
    }

    },
    actions:{
        akcija100:(context,payload)=>{
            setTimeout(() => {
                context.commit('counterBy100',payload)
            },2000);
        }
    }
})