import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store= new Vuex.Store({
    state:{
        counter:5
    },
    getters:{
        counterMilion:state=>{
            let Sale=state.counter+=1000000;
            return Sale;
        }
    },
    mutations:{
       counterBy11:(state,payload)=>{
           state.counter+=payload;
       },
       counterBy51:(state,payload)=>{
        state.counter+=payload;
    }

    },
    actions:{
        akcija100:(context,payload)=>{
            setTimeout(() => {
                context.commit('counterBy51',payload)
            },2000);
        }
    }
})