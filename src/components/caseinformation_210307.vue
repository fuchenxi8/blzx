<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-scrollbar style="height: 100%">
      <el-header style="text-align: left; font-size: 12px">
        <el-row>
        <!-- 左侧第一行 -->
          <el-col :span="2">
            <el-button round size="small">新建
            </el-button>
          </el-col>
          <el-col :span="2">
            <el-button round size="small">保存</el-button>
          </el-col>
          <el-col :span="20">
            <el-tabs :tab-position="tabPosition" style="height: 100%;" type="card" v-model="activeName"  v-if="res.data">
              <el-tab-pane label="报告底单" name="1">
                <!-- <el-row v-for="(resm,index) in res.data.result" :key="index"> -->
                <el-col v-for="(resm,index) in res.data.result" :key="index" :span="6">
                  <!-- 输入框 -->
                  {{resm.label}}
                  <el-input v-if="resm.type==='input'" 
                    :placeholder="resm.label"
                    v-model="formData[resm.prop]" size="small">
                  </el-input>
                   <!-- 文本框 -->
                  <el-input v-if="resm.type==='textarea'" 
                    type="textarea"
                    :placeholder="resm.title"
                    v-model="formData[resm.prop]" size="small">
                  </el-input>
                </el-col>
                <!-- </el-row> -->
              </el-tab-pane>
              <el-tab-pane label="取材记录" name="2">取材记录
                <!-- 信息表格 -->
                <el-popover
                  placement="right"
                  width="400"
                  trigger="click">
                  <el-table >
                    <el-table-column width="150" property="date" label="日期"></el-table-column>
                    <el-table-column width="100" property="name" label="姓名"></el-table-column>
                    <el-table-column width="300" property="address" label="地址"></el-table-column>
                  </el-table>
                  <el-button slot="reference">click 激活</el-button>
                </el-popover>
                <!-- <el-row v-if="res.data">
                  <el-table >
                    <el-table-column >
                    </el-table-column>
                  </el-table>
                </el-row> -->
              </el-tab-pane>
              <el-tab-pane label="切片信息" name="3">切片信息</el-tab-pane>
              <el-tab-pane label="技术医嘱" name="4">技术医嘱</el-tab-pane>
              <el-tab-pane label="特检医嘱" name="5">特检医嘱</el-tab-pane>
              <el-tab-pane label="延期原因" name="6">延期原因</el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-header>
    </el-scrollbar>
  </el-container>
</template>

<script>
export default {
  data(){
    return {
      formData:{},
      resm:{},
      index:"",
      labelPosition: '1',
      tabPosition: '1',
      tabPositionm: '0',
      activeName: '1',
      frozenId:'',
      data:{},
      res:{},
    }
  },
  mounted(){
    this.getinput()
  },
  methods:{
    // 获取输入页表单数据信息
    getinput () {
      this.$axios.get('http://localhost:8080/static/input.json')
      .then((res) => {
        //用axios的方法引入地址
        this.res=res
        //赋值
       console.log(res)
      })
    },
  }
}
</script>