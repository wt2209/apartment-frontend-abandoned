/**
 * Created by WT on 2017/6/15.
 */
import RoomApi from '../../api/rooms'

const state = {
    rooms:[]
}

const getters = {
    rooms:state=>state.rooms
}

const actions = {
    getRooms({commit}){
        RoomApi.getRooms((rooms)=>{
            commit('getRooms', {rooms})
        })

    }

}

const mutations = {
    getRooms(state, {rooms}){
        state.rooms = []
        state.rooms = rooms
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}