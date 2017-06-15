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
    <div class="content">
      <div class="nav-tabs-custom">
        <ul class="nav nav-tabs">
          <li class="active"><a href="#tab_1" data-toggle="tab">Tab 1</a></li>
          <li><a href="#tab_2" data-toggle="tab">Tab 2</a></li>
          <li><a href="#tab_3" data-toggle="tab">Tab 3</a></li>
        </ul>
        <div class="tab-content">


          <div class="tab-pane active" id="tab_2">
            1
          </div>
          <!-- /.tab-pane -->
          <div class="tab-pane" id="tab_1">
            2
          </div>
          <!-- /.tab-pane -->
          <div class="tab-pane" id="tab_3">
            3
          </div>
          <!-- /.tab-pane -->
        </div>
        <!-- /.tab-content -->
      </div>
    </div>

    <!-- /.content -->
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
