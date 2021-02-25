<!--病理工作站-->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header>
      <el-button type="primary" icon="el-icon-s-unfold" class="home-dh"></el-button>
      <!-- <img src="../assets/hospital.png" alt=""> -->
      <el-button type="primary" >病理工作站</el-button>
      <el-button type="success" >档案管理</el-button>
      <el-button type="primary" >统计</el-button>
      <el-button type="success" >归档管理</el-button>
      <el-button type="primary" >分片</el-button>
      <el-button type="success" >医嘱</el-button>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">Aside

        
      </el-aside>
      <!-- 右边主体 -->
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

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