/**
 * Created by WT on 2017/6/15.
 */
import RoomApi from '../../api/rooms'
import _ from 'lodash'

const state = {
    rooms:[],
    pageConfig:{},
    roomTypes:[],
}

const getters = {
    counter(state){
        let ret = {using:0, empty:0, total:0}
        _.map(state.rooms, function(room){
            if (room.status == 1) {
                ret.using ++;
            }else {
                ret.empty ++;
            }
            ret.total ++
        });
        return ret;
    }
}

const actions = {
    getAllRooms({commit}){
        RoomApi.getRooms((response)=>{
            commit('setStateRooms', response)
        })

    },
    getRoomTypes ({commit}){
        RoomApi.getRoomTypes((response)=>{
            commit('setStateRoomTypes', response)
        })
    },
    searchRooms ({commit}, {keyWord, roomType}) {
        RoomApi.roomsSearch((response)=>{
            console.log(response.data)

            let ret = [];
            _.map(response.data, function(room){
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
            response.data = ret;
            commit('setStateRooms', response)
        })

    }

}

const mutations = {
    setStateRooms(state, response){
        state.rooms = response.data;
        console.log(state.rooms)
        //_.unset(response, "data")
        state.pageConfig = response
        console.log(state.pageConfig)
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