<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-scrollbar style="height: 100%">
      <el-header style="text-align: left; font-size: 12px">
        <el-form>
          <!-- 左侧第一行 -->
          <el-form-item>
            <el-col :span="2">
              <el-button round size="small">新建
                <!-- <router-view name="newfile"></router-view> -->
              </el-button>
            </el-col>
            <el-col :span="2">
              <el-button round size="small">保存</el-button>
            </el-col>
            <el-col :span="24">
              <!-- <el-main> -->
                <el-tabs :tab-position="tabPosition" style="height: 100%;" type="card" v-model="activeName">
                  <el-tab-pane label="报告底单" name="1">
                    <router-view name="newfile"></router-view>
                    <!-- <router-link to='/newfile'></router-link>
                      <router-view></router-view> -->
                  </el-tab-pane>
                  <el-tab-pane label="取材记录" name="2">取材记录
                    <router-view></router-view>
                  </el-tab-pane>
                  <el-tab-pane label="切片信息" name="3">切片信息</el-tab-pane>
                  <el-tab-pane label="技术医嘱" name="4">技术医嘱</el-tab-pane>
                  <el-tab-pane label="特检医嘱" name="5">特检医嘱</el-tab-pane>
                  <el-tab-pane label="延期原因" name="6">延期原因</el-tab-pane>
                </el-tabs>
              <!-- </el-main> -->
            </el-col>
            <!-- <el-col :span="20" align="right">
              <el-radio-group v-model="labelPosition" size="small">
                <el-radio-button label="1">报告底单
                  <router-link to='/newfile'></router-link>
                  <router-view name="newfile"></router-view>
                </el-radio-button>
                
              
                <el-radio-button label="2">取材记录</el-radio-button>
                <el-radio-button label="3">切片信息</el-radio-button>
                <el-radio-button label="4">技术医嘱(2)</el-radio-button>
                <el-radio-button label="5">特检医嘱(2)</el-radio-button>
                <el-radio-button label="6">延期原因</el-radio-button>
              </el-radio-group>
            </el-col> -->

          </el-form-item>
        </el-form>
      </el-header>
    </el-scrollbar>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      labelPosition: '1',
      tabPosition: '1',
      tabPositionm: '0',
      activeName: '1',
    }
  }
}
</script>