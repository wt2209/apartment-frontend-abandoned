/**
 * Created by WT on 2017/6/15.
 */
const _rooms = [
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 0, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红2-1-102', status: 0, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '7-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '9-1-101', status: 0, type: '大学生用房', personNumber: 4},
    {title: '11-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-201', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 0, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '租赁用房', personNumber: 1},
    {title: '高3-804', status: 1, type: '租赁用房', personNumber: 1},
    {title: '高3-904', status: 1, type: '租赁用房', personNumber: 1},
    {title: '12-1-101', status: 1, type: '租赁用房', personNumber: 1},
    {title: '12-1-102', status: 1, type: '租赁用房', personNumber: 1},
    {title: '14-1-201', status: 1, type: '租赁用房', personNumber: 1},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4},
    {title: '红3-1-101', status: 1, type: '大学生用房', personNumber: 4}
]


export default {
    getRooms(callback){
        callback(_rooms)
        //setTimeout(()=>callback(_rooms), 100)
    }
}