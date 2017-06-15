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
              <h3 class="box-title">Responsive Hover Table</h3>

              <div class="box-tools">
                <div class="input-group input-group-sm" style="width: 150px;">
                  <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

                  <div class="input-group-btn">
                    <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
                  </div>
                </div>
              </div>
            </div>
            <!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
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
                  <tr v-for="room in rooms">
                    <td>{{ room.title }}</td>
                    <td>{{ room.type }}</td>
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

    <!-- /.content -->
  </div>

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'rooms',
    computed:{
      rooms(){
        return this.$store.state.rooms.rooms
      }
    },
    created(){
      this.fetchData()
    },
    methods: {
      fetchData(){
        this.$store.dispatch('getRooms')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
