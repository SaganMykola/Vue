import {createStore} from "vuex"

const store = createStore({
    state(){
        return{
            listData: [
                {
                    id: 1,
                    number: 3,
                    number_of_newspapers: 3,
                    name: "1, 2, 3, 4"
                },
                {
                    id: 2,
                    number: 2,
                    number_of_newspapers: 2,
                    name: "1, 2, 3, 4"
                },
            ]
        }
    },

    getters: {
        SeasonTicketsList: (state) => state.listData,

        getSeasonTicketById: (state) => (id) => id ? state.listData.find((item) => item.id == id) : {}
    },

    mutations: {
        deleteItem(state, itemIdForDelete) {
            state.listData = state.listData.filter(
              (item) => item.id !== itemIdForDelete
            )
          },
    },
    
  
    actions: {
      deleteItemAction({ commit }, id) {
        commit('deleteItem', id)
      },
    },
})



export default store