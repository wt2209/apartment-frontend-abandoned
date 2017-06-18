<template>
  <div class="hello">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        所有房间
        <small>&nbsp;&nbsp;&nbsp;<a class="pull-right glyphicon glyphicon-refresh" href="#rooms"></a></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> 主页</a></li>
        <li class="active">所有房间 </li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-xs-12">
          <div class="box">
            <div class="box-header">
              <!--<h3 class="box-title"></h3>-->
              <!--<div class="input-group input-group-sm" style="width: 200px;"></div>-->
                <div class="form-inline col-md-4" >
                  <div class="form-group">
                    <input class="form-control" v-model="keyWord" placeholder="搜索，按下回车后开始搜索">
                  </div>
                  <select class="form-control" v-model="roomType">
                    <option value=0>类型</option>
                    <option v-for="roomType in this.$store.state.room.roomTypes" :value="roomType.id" >{{roomType.name}}</option>
                  </select>
                </div>
              <!--<div class="box-tools"></div>-->
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              {{this.$store.state.rooms}}
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>房间号</th>
                    <th>房间类型</th>
                    <th>状态</th>
                    <th>标准定员</th>
                    <th>操作</th>
                  </tr>
                </thead>

                <tbody>
                  <tr v-for="room in this.$store.state.room.rooms">

                    <td>{{ room.title }}</td>
                    <td>{{ room.type.name }}</td>
                    <td>{{ room.status ? '正在使用' : '空房' }}</td>
                    <td>{{ room.personNumber }}</td>
                    <td><span class="label label-success">Approved</span></td>
                  </tr>
                </tbody>

              </table>
            </div>
            <!-- /.box-body -->
          </div>
          <!-- /.box -->
        </div>
      </div>

    </section>
    <div class="h90"></div>
    <div class=" bottom-message">
      <div class="panel-body">

          房间总数：<b>{{this.$store.getters.counter.total}}</b> 套<br>
          正在使用：<b>{{this.$store.getters.counter.using}}</b> 套<br>
          空房间数：<b>{{this.$store.getters.counter.empty}}</b> 套

      </div>
    </div>

    <!-- /.content -->
  </div>

</template>

<script>
  import { mapGetters, mapState } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'rooms',
    data(){
      return {
        keyWord:'',
        roomType:0
      }
    },
    watch: {
      keyWord(){
        this.searchRooms();
      },
      roomType(){
        this.searchRooms();
      }
    },
    created(){
      this.fetchData()
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getAllRooms')
        this.$store.dispatch('getRoomTypes')
      },
      searchRooms(){
        const keyWord = this.keyWord;
        const roomType = this.roomType;
        this.$store.dispatch('searchRooms',{keyWord, roomType})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
