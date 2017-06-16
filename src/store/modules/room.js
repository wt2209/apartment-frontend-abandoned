/**
 * Created by WT on 2017/6/15.
 */
import RoomApi from '../../api/rooms'
import _ from 'lodash'

const state = {
    rooms:[],
    roomTypes:[],
    keyWord:''
}

const getters = {
    rooms:state=>state.rooms
}

const actions = {
    getAllRooms({commit}){
        RoomApi.getRooms((rooms)=>{
            commit('setStateRooms', rooms)
        })

    },
    getRoomTypes ({commit}){
        RoomApi.getRoomTypes((roomTypes)=>{
            commit('setStateRoomTypes', roomTypes)
        })
    },
    searchRooms ({commit}, {keyWord, roomType}) {
        RoomApi.roomsSearch((rooms)=>{
            //_.where(rooms, {'title':keyWord})
            let ret = [];
            _.map(rooms, function(room){
                if (keyWord && roomType){
                    if (room.title === keyWord && room.type.id ===roomType) {
                        ret.push(room);
                    }
                }else if(keyWord){
                    if (room.title === keyWord ) {
                        ret.push(room);
                    }
                }else if(roomType){
                    if (room.type.id ===roomType) {
                        ret.push(room);
                    }
                } else {
                    ret.push(room);
                }

            })

            commit('setStateRooms', ret)
        })

    }

}

const mutations = {
    setStateRooms(state, rooms){
        state.rooms = rooms
        console.log(state.rooms)
    },
    setStateRoomTypes(state, roomTypes) {
        state.roomTypes = roomTypes
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}