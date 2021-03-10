<!--病理工作站-->
<template>
  <el-container class="home-container">
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="380px">
        <el-form v-if="resm.data">
          <el-row v-for="(item, index) in resm.data.query1" :key="index">
            <el-col v-for="(items, cindex) in item" :key="cindex" :span="12"> 
              <!-- 输入框 -->
              <el-input v-if="items.type==='input'" 
                :placeholder="items.title"
                v-model="formData[items.name]" size="small">
              </el-input>
              <!-- 下拉框 -->
              <el-select v-else-if="items.type==='select'" 
                :placeholder="items.title"
                v-model="formData[items.name]" size="small">
                <el-option v-for="o in items.options"
                  :key="o.value"
                  :label="o.label"
                  :value="o.value">
                </el-option>
              </el-select>
              <!-- 时间选件框 -->
              <div class="block" v-else-if="items.type==='date'">
                <span class="demonstration"></span>
                <el-date-picker
                  :placeholder="items.title"
                  v-model="formData[items.title]"
                  type="date"
                  size="small">
                </el-date-picker>
              </div>
            </el-col>
          </el-row>
        </el-form>
        <el-row>
          <el-col :span="24">
            <el-radio-group v-model="labelPosition" size="medium">
              <el-radio-button label="1">登入</el-radio-button>
              <el-radio-button label="2">取材</el-radio-button>
              <el-radio-button label="3">延期</el-radio-button>
              <el-radio-button label="4">诊断</el-radio-button>
              <el-radio-button label="5">审核</el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
        <!-- 信息表格 -->
        <el-row v-if="res.data">
           <el-table :data="res.data.result" v-if="resq.data" >
             <el-table-column v-for="(resqm,usm) in resq.data.result" :key="usm" 
                :prop="resqm.prop" :label="resqm.title">
             </el-table-column>
           </el-table>
        </el-row>
      </el-aside>
      <!-- 右边主体 -->
      <el-main>
        <el-tabs :tab-position="tabPosition" style="height: 100px;" type="card" v-model="activeName">
          <el-tab-pane label="病例信息" name="1">
            <router-view name="caseinformation"></router-view>
          </el-tab-pane>
          <el-tab-pane label="取材信息" name="2">取材信息
            <router-view></router-view>
          </el-tab-pane>
          <el-tab-pane label="待包埋列表" name="3">待包埋列表</el-tab-pane>
          <el-tab-pane label="待切片列表" name="4">待切片列表</el-tab-pane>
          <el-tab-pane label="已制片列表" name="5">已制片列表</el-tab-pane>
          <el-tab-pane label="病理诊断" name="6">病理诊断</el-tab-pane>
          <el-tab-pane label="细胞学诊断" name="7">细胞学诊断</el-tab-pane>
          <el-tab-pane label="病理图像" name="8">病理图像</el-tab-pane>
          <el-tab-pane label="技术医嘱(10)" name="9">技术医嘱</el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return{
      formData:{
      },
      testCols: ["pathId","name","gender","age","hospitalId"],
      item:"",
      index:"",
      res:"",
      resm:"",
      query1:{},
      resq:{},
      result:{},
      select:"",
      tabPosition: 'top',
      tabPositionm: '0',
      labelPosition: '1',
      activeName: '1',
      value: '',
      input: '',
      allvalue: '',
      myvalue: '',
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick(picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick(picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
      value1: '',
      value2: '',
    }
  },
 
  mounted(){
    this.getGoodsList(),
    this.setDefaultValue(),
    this.getblbtList(),
    this.getProcess()
  },
  methods: {
    // 获取表格表单数据信息
    getGoodsList () {
      this.$axios.get('http://localhost:8080/static/demo1.json')
      .then((res) => {
        //用axios的方法引入地址
        this.res=res
        //赋值
       console.log(res)
      })
    },
    // 获取表格表头信息
    getblbtList(){
      this.$axios.get('http://localhost:8080/static/demo0.json')
      .then((resq) => {
        //用axios的方法引入地址
        this.resq=resq
        //赋值
       console.log(resq)
      })
    },
    // 获取流程步骤表头信息
    getProcess () {
      this.$axios.get('http://localhost:8080/static/process.json')
      .then((process) => {
        //用axios的方法引入地址
        this.process=process
        //赋值
       console.log(process)
      })
    },
    setDefaultValue() {
      // const formData = { ...this.value }
      this.$axios.get('http://localhost:8080/static/demo2.json')
      .then((resm) => {
        //用axios的方法引入地址
        this.resm=resm
        //赋值
        console.log(resm)
  
      })
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
    line-height: 20px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 20px;
  }
  
</style>