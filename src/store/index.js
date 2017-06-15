/**
 * Created by WT on 2017/6/15.
 */

import Vue from 'Vue'
import Vuex from 'Vuex'
import actions from './actions'
import mutations from './mutations'
import rooms from './modules/rooms'

Vue.use(Vuex)


export default new Vuex.Store({
    actions,
    mutations,
    modules: {
        rooms
    }
})