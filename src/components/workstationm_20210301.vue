<!--病理工作站-->
<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-header style="text-align: left; font-size: 12px">
      <i class="el-icon-s-unfold" style="margin-right: 15px"></i>
      <el-radio-group v-model="tabPositionm" style="margin-bottom: 30px;">
        <el-radio-button label="1">病理工作站</el-radio-button>
        <el-radio-button label="2">档案管理</el-radio-button>
        <el-radio-button label="3">统计</el-radio-button>
        <el-radio-button label="4">归档管理</el-radio-button>
        <el-radio-button label="5">分片</el-radio-button>
        <el-radio-button label="6">医嘱</el-radio-button>
      </el-radio-group>
      <el-badge :value="12" class="item">
        <el-button size="small">通知</el-button>
      </el-badge>
       <el-badge  class="item">
        <el-button size="small">Dean</el-button>
      </el-badge>
    </el-header>
    <!-- 页面主体 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="380px">
        <!-- 侧边栏菜单 -->
        <el-form>
          <!-- 左侧第一行 -->
          <el-form-item>
            <el-col :span="8">
              <el-select v-model="value" filterable  placeholder="常规">
                <el-option  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8">
              <el-input
                placeholder="HISID"
                v-model="input"
                clearable width="50%">
              </el-input>
            </el-col>
          </el-form-item>
          <!-- 左侧第二行 -->
          <el-form-item>
            <el-col :span="12">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value1"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="block">
                <span class="demonstration"></span>
                <el-date-picker
                  v-model="value2"
                  align="right"
                  type="date"
                  placeholder="选择日期"
                  :picker-options="pickerOptions">
                </el-date-picker>
              </div>
            </el-col>
          </el-form-item>
          <!-- 左侧第三行 -->
          <el-form-item>
            <el-col :span="6">
              <el-select v-model="allvalue" filterable  placeholder="全部">
                <el-option  v-for="item in allms"
                  :key="item.allvalue"
                  :label="item.label"
                  :value="item.allvalue">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="6">
               <el-select v-model="myvalue" filterable  placeholder="我的">
                <el-option  v-for="item in options"
                  :key="item.myvalue"
                  :label="item.label"
                  :value="item.myvalue">
                </el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <!-- 左侧第四行 -->
          <el-form-item style="width: 100%">
            <el-col :span="24">
              <el-radio-group v-model="labelPosition" size="medium">
                <el-radio-button label="1">登入</el-radio-button>
                <el-radio-button label="2">取材</el-radio-button>
                <el-radio-button label="3">延期</el-radio-button>
                <el-radio-button label="4">诊断</el-radio-button>
                <el-radio-button label="5">审核</el-radio-button>
              </el-radio-group>
              <!-- <el-tabs v-model="labelPosition" >
                <el-tab-pane label="登入" name="登入"></el-tab-pane>
                <el-tab-pane label="取材" name="取材"></el-tab-pane>
                <el-tab-pane label="延期" name="延期"></el-tab-pane>
                <el-tab-pane label="诊断" name="诊断"></el-tab-pane>
                <el-tab-pane label="审核" name="审核"></el-tab-pane>
              </el-tabs> -->
            </el-col>
          </el-form-item>
          <!-- 左侧第五行 -->
          <el-table
            :data="tableData"
            border
            class='el-table__header'
            style="width: 100%">
            <el-table-column
              prop="pathId"
              label="病理号"
              width="76px">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="76px">
            </el-table-column>
            <el-table-column
              prop="gender"
              label="性别"
              width="76px">
            </el-table-column>
            <el-table-column
              prop="age"
              label="年龄"
              width="76px">
            </el-table-column>
            <el-table-column
              prop="hospitalId"
              label="住院号"
              width="76px">
            </el-table-column>
          </el-table>
        </el-form>

      </el-aside>
      <!-- 右边主体 -->
      <el-main>
        <el-tabs :tab-position="tabPosition" style="height: 100px;" type="card" v-model="activeName">
          <el-tab-pane label="病例信息" name="1">
            <router-view name="caseinformation"></router-view>
            <!-- <router-link to='/newfile'></router-link>
              <router-view></router-view> -->
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
      tabPosition: 'top',
      tabPositionm: '0',
      labelPosition: '1',
      activeName: '1',
      tableData: [{
          pathId: 'bl0001',
          name: '张宇',
          gender: '男',
          age: '28',
          hospitalId: 'zy0001'
        },{
          pathId: 'bl0002',
          name: '刘瑜',
          gender: '女',
          age: '23',
          hospitalId: 'zy0002'
        },{
          pathId: 'bl0003',
          name: '刘玉',
          gender: '女',
          age: '23',
          hospitalId: 'zy0003'
        }],
      options: [{
          value: '常规',
          label: '常规'
        }, {
          value: '冰冻',
          label: '冰冻'
        }, {
          value: '细胞',
          label: '细胞'
        }, {
          value: '特检',
          label: '特检'
        }],
        allms: [{
          value: '全部',
          label: '全部'
        }],
        myms: [{
          value: '我的',
          label: '我的'
        }],
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
    line-height: 20px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 20px;
  }

  .tableBox {
    th{
      padding: 0 !important;
      height: 30px;
      line-height: 30px;
    }
    td{
      padding: 0 !important;
      height: 30px;
      line-height: 30px;
    }
  }

  .el-table__header tr,
    .el-table__header th {
      padding: 0;
      height: 20px;
  }

  .el-table__body tr,
  .el-table__body td {
    padding: 0;
    height: 40px;
  }

  .item {
    margin-top: 10px;
    margin-right: 40px;
  }

  
</style>