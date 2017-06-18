/**
 * Created by WT on 2017/6/15.
 */
const _rooms = {
    "total": 50,
    "using":46,
    "empty":4,
    "per_page": 15,
    "current_page": 1,
    "last_page": 4,
    "next_page_url": "http://laravel.app?page=2",
    "prev_page_url": null,
    "from": 1,
    "to": 15,
    "data":[
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 0, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红2-1-102', status: 0, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '7-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '9-1-101', status: 0, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '11-1-101', status: 1, type:{name: '单身职工房间',id:2}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-201', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 0, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '单身职工房间',id:2}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '租赁房间',id:4}, personNumber: 1},
        {title: '高3-804', status: 1, type:{name: '租赁房间',id:4}, personNumber: 1},
        {title: '高3-904', status: 1, type:{name: '租赁房间',id:4}, personNumber: 1},
        {title: '12-1-101', status: 1, type:{name: '租赁房间',id:4}, personNumber: 1},
        {title: '12-1-102', status: 1, type:{name: '租赁房间',id:4}, personNumber: 1},
        {title: '14-1-201', status: 1, type:{name: '租赁房间',id:4}, personNumber: 1},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '派遣工房间',id:3}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '大学生房间',id:1}, personNumber: 4},
        {title: '红3-1-101', status: 1, type:{name: '派遣工房间',id:3}, personNumber: 4}
    ]
};




const _roomTypes = [
    {id:1, name:'大学生房间'},
    {id:2, name:'单身职工房间'},
    {id:3, name:'派遣工房间'},
    {id:4, name:'租赁房间'}
];


export default {
    getRooms(callback){
        callback(_rooms)
        //setTimeout(()=>callback(_rooms), 100)
    },
    getRoomTypes(callback){
        callback(_roomTypes)
    },
    roomsSearch(callback){
        callback(_rooms)
    }
}