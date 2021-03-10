<!--病理工作站-->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header style="text-align: left; font-size: 18px">
      <i class="el-icon-s-unfold" style="text-align: left;"></i>
      <!-- <img src="../assets/hospital.png" alt=""> -->
       <el-tabs v-model="activeName"> 
          <el-tab-pane label="病理工作站" name="1">
            <router-view name="workstationm"></router-view>
          </el-tab-pane>
          <el-tab-pane label="档案管理" name="2">档案管理
            <router-view></router-view>
          </el-tab-pane>
          <el-tab-pane label="统计" name="3">统计</el-tab-pane>
          <el-tab-pane label="归档管理" name="4">归档管理</el-tab-pane>
          <el-tab-pane label="分片" name="5">分片</el-tab-pane>
          <el-tab-pane label="医嘱" name="6">医嘱</el-tab-pane>
        </el-tabs>
        
    </el-header>
    <!-- 页面主体 -->
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return{
      activeName: '1',
    }
  },
  methods: {
    workstationm() {
      // 跳转
      this.$router.push('/workstationm')
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  height: 100vh;
}

.home-dh{
  text-align: left;
}

.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 0px;
    padding-left: 0;
  }

.el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

   .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>