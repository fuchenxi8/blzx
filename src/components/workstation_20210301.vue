<!--病理工作站-->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header style="text-align: right; font-size: 12px">
      <i class="el-icon-s-unfold" style="margin-right: 15px"></i>
      <!-- <img src="../assets/hospital.png" alt=""> -->
      <el-button type="primary" @click="workstationm">病理工作站</el-button>
      <el-button type="primary" >档案管理</el-button>
      <el-button type="primary" >统计</el-button>
      <el-button type="primary" >归档管理</el-button>
      <el-button type="primary" >分片</el-button>
      <el-button type="primary" >医嘱</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!-- 侧边栏菜单 -->
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
          <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span>病理单</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">报告底单</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右边主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return{

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
    line-height: 60px;
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