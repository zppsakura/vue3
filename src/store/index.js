import { createStore } from "vuex";

export const store = createStore({
    state: {
        count: 2
    },
    mutations: {
        ADD (state) {
            state.count++
        }
    },
    actions: {
        add({ commit }){
            commit('ADD')
        }
    },
    modules: {

    }
})