<template>
  <el-container class="home-container">
    <!-- 头部区域 -->
    <el-scrollbar style="height: 100%">
      <el-header style="text-align: left; font-size: 12px">
        <el-row>
        <!-- 左侧第一行 -->
          <el-col :span="2">
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click" v-if="res.data">
              <div v-for="(newInput,i) in res.data['result']" :key="i">
                <el-col :span="6">
                  <!-- 输入框 -->
                  {{newInput.label}}
                  <el-input v-if="newInput.type==='input'" 
                    :placeholder="newInput.label"
                    v-model="formData[newInput.prop]" size="small" width="100px">
                  </el-input>
                  <!-- 文本框 -->
                  <el-input v-if="newInput.type==='textarea'" 
                    type="textarea"
                    :placeholder="newInput.title"
                    v-model="formData[newInput.prop]" size="small">
                  </el-input>
                </el-col>
              </div>
              <el-button slot="reference" size="small" round >新建</el-button>
            </el-popover>
          </el-col>
          <el-col :span="2">
            <el-button round size="small">保存</el-button>
          </el-col>
          <el-col :span="20">
          <!-- 报告底单 -->
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click" v-if="res.data">
              <div v-for="(newInput,i) in res.data['result']" :key="i">
                <el-col :span="6">
                 <!-- 输入框 -->
                  {{newInput.label}}
                  <el-input v-if="newInput.type==='input'" 
                    :placeholder="newInput.label"
                    v-model="formData[newInput.prop]" size="small" width="100px">
                  </el-input>
                   <!-- 文本框 -->
                  <el-input v-if="newInput.type==='textarea'" 
                    type="textarea"
                    :placeholder="newInput.title"
                    v-model="formData[newInput.prop]" size="small">
                  </el-input>
                </el-col>
              </div>
              <el-button slot="reference" size="small" >报告底单</el-button>
            </el-popover>
            <!-- 取材记录 -->
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click">
                <el-table v-if="based.data" border>
                  <el-table-column v-for="(basedm,b) in based.data['result']" :key="b" 
                      :prop="basedm.prop" :label="basedm.label">
                  </el-table-column>
                </el-table>
              <el-button slot="reference" size="small" >取材记录</el-button>
            </el-popover>
            <!-- 切片信息 -->
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click">
                <el-table v-if="sliceInformation.data" border>
                  <el-table-column v-for="(slice,sli) in sliceInformation.data['result']" :key="sli" 
                      :prop="slice.prop" :label="slice.label">
                  </el-table-column>
                </el-table>
              <el-button slot="reference" size="small" >切片信息</el-button>
            </el-popover>
            <!-- 技术医嘱 -->
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click">
              <!-- 录入页 -->
              <el-form v-if="technicalAdviceInput.data">
                <el-row v-for="(tai, ai) in technicalAdviceInput.data.result" :key="ai">
                  <!-- 输入框 -->
                  {{tai.label}}<el-input v-if="tai.type==='input'" 
                    :placeholder="tai.label"
                    v-model="formData[tai.prop]" size="small">
                  </el-input>
                  <!-- 下拉框 -->
                  <el-select v-else-if="tai.type==='select'" 
                    :placeholder="tai.label"
                    v-model="formData[tai.prop]" size="small">
                    <el-option v-for="o in tai.options"
                      :key="o.value"
                      :label="o.label"
                      :value="o.name">
                    </el-option>
                  </el-select>
                 </el-row>
                   <el-button type="primary" @click="onSubmit">增加</el-button>
              </el-form>
              <!-- 显示页 -->
              <el-table v-if="technicalAdvice.data" border :data="tableData">
                <el-table-column v-for="(tech,adv) in technicalAdvice.data['result']" :key="adv" 
                  :prop="tech.prop" :label="tech.label">
                  <template slot-scope="scope">
                    <input type="text" v-model="scope.row[tech.prop]" v-show="scope.row.iseditor" />
                    <span v-show="!scope.row.iseditor">{{scope.row[tech.prop]}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="180">
                  <template slot-scope="scope">
                    <el-button type="warning" @click="edit(scope.row, scope)">编辑</el-button>
                    <el-button type="danger" @click="save(scope.row)">保存</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button slot="reference" size="small" >技术医嘱(2)</el-button>
            </el-popover>

             <!-- 特检医嘱 -->
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click">
              <!-- 录入页 -->
              <el-form v-if="specialSurveyInput.data">
                <el-row v-for="(specialInput, speci) in specialSurveyInput.data.result" :key="speci">
                  <!-- 输入框 -->
                  {{specialInput.label}}<el-input v-if="specialInput.type==='input'" 
                    :placeholder="specialInput.label"
                    v-model="formData[specialInput.prop]" size="small">
                  </el-input>
                  <!-- 下拉框 -->
                  <el-select v-else-if="specialInput.type==='select'" 
                    :placeholder="specialInput.label"
                    v-model="formData[specialInput.prop]" size="small">
                    <el-option v-for="o in specialInput.options"
                      :key="o.value"
                      :label="o.label"
                      :value="o.name">
                    </el-option>
                  </el-select>
                 </el-row>
                 <el-button type="primary" @click="addSubmit">添加</el-button>
              </el-form>
               <!-- 显示页 -->
                <el-table v-if="specialSurvey.data" border :data="specialSurveyjson">
                  <el-table-column v-for="(special,sli) in specialSurvey.data['result']" :key="sli" 
                    :prop="special.prop" :label="special.label">
                      <template slot-scope="scope">
                      <input type="text" v-model="scope.row[special.prop]" v-show="scope.row.iseditor" />
                      <span v-show="!scope.row.iseditor">{{scope.row[special.prop]}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="180">
                    <template slot-scope="scope">
                      <el-button type="warning" @click="editSpecial(scope.row, scope)">编辑</el-button>
                      <el-button type="danger" @click="saveSpecial(scope.row)">保存</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              <el-button slot="reference" size="small" >特检医嘱(10)</el-button>
            </el-popover>

             <!-- 延期原因 -->
            <el-popover
              placement="bottom-start"
              width="1000"
              trigger="click">
              <!-- <el-form-item label="延期原因"> -->
                延期原因<el-input type="textarea" v-model="desc"></el-input>
                <el-button type="primary">确定</el-button>
                <el-button>取消</el-button>
              <!-- </el-form-item> -->
              <el-button slot="reference" size="small">延期原因</el-button>
            </el-popover>
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
      iconFormVisible: false,
      dialogTitle: '增加',
      tableData: [
        {
          doctorAdvice: "yz0001",
          type: "常规",
          waxblockId: "条目一",
          number: "1",
          applyDoctor: "张三",
          applyDate: "2020-01-19",
          state: "审批中",
          doctorInstructions: "优秀",
          executor: "李四",
          iseditor: false
        }
      ],
      specialSurveyjson: [
        {
          type: "常规",
          waxblock: "条目一",
          markers: "结核",
          number: "4",
          analysis: "没什么，回去该吃多吃点",
          applyDoctor: "阳仔",
          applyDate: "2021-01-21",
          state: "已审核",
          charge: "正常",
          iseditor: false
        }
      ],
      addForm: {
      },
      userInfo:{},
      speci:{},
      specialInput:{},
      specialSurveyInput:{},
      special:{},
      specialSurvey:{},
      tai:{},
      ai:{},
      technicalAdviceInput:{},
      technicalAdvice:{},
      tech:"",
      adv:"",
      desc:"",
      slice:{},
      formData:{},
      resm:{},
      based:{},
      newInput:{},
      index:"",
      labelPosition: '1',
      tabPosition: '1',
      tabPositionm: '0',
      activeName: '1',
      frozenId:'',
      data:{

      },
      sliceInformation:{

      },
      res:{

      },
      b:{},
    }
  },
  mounted(){
    this.getinput(),
    this.getbased(),
    this.getsliceInformation(),
    this.gettechnicalAdvice(),
    this.gettechnicalAdviceInput(),
    this.getspecialSurvey(),
    this.getspecialSurveyInput()
  },
  methods:{
    // 获取输入页表单数据信息
    getinput () {
      this.$axios.get('http://localhost:8080/static/input.json')
      .then((res) => {
        //用axios的方法引入地址
        this.res=res
        //赋值
      //  console.log(res)
      })
    },
    // 获取取材信息表头数据信息
    getbased () {
      this.$axios.get('http://localhost:8080/static/based.json')
      .then((based) => {
        //用axios的方法引入地址
        this.based=based
        //赋值
      //  console.log(based)
      })
    },
    // 获取切片信息表头数据信息
    getsliceInformation () {
      this.$axios.get('http://localhost:8080/static/sliceInformation.json')
      .then((sliceInformation) => {
        //用axios的方法引入地址
        this.sliceInformation=sliceInformation
        //赋值
      //  console.log(sliceInformation)
      })
    },
    // 获取技术医嘱表头数据信息
    gettechnicalAdvice () {
      this.$axios.get('http://localhost:8080/static/technicalAdvice.json')
      .then((technicalAdvice) => {
        //用axios的方法引入地址
        this.technicalAdvice=technicalAdvice
        //赋值
      //  console.log(technicalAdvice)
      })
    },
    // 获取技术医嘱录入数据信息
    gettechnicalAdviceInput () {
      this.$axios.get('http://localhost:8080/static/technicalAdviceInput.json')
      .then((technicalAdviceInput) => {
        //用axios的方法引入地址
        this.technicalAdviceInput=technicalAdviceInput
        //赋值
      //  console.log(technicalAdviceInput)
      })
    },
    // 获取特检医嘱表头数据信息
    getspecialSurvey () {
      this.$axios.get('http://localhost:8080/static/specialSurvey.json')
      .then((specialSurvey) => {
        //用axios的方法引入地址
        this.specialSurvey=specialSurvey
        //赋值
      //  console.log(specialSurvey)
      })
    },
     // 获取特检医嘱录入页数据信息
    getspecialSurveyInput () {
      this.$axios.get('http://localhost:8080/static/specialSurveyInput.json')
      .then((specialSurveyInput) => {
        //用axios的方法引入地址
        this.specialSurveyInput=specialSurveyInput
        //赋值
      //  console.log(specialSurveyInput)
      })
    },
    // 技术医嘱增加功能
    onSubmit() {
      // console.log(this.formData);
      // 插入表格
      this.tableData.splice(0, 0, this.formData);
    },
    // 技术医嘱按钮功能
    edit(row) {
      row.iseditor = true;
    },
    save(row) {
      row.iseditor = false;
    },
    // 特检医嘱添加功能
    addSubmit() {
      // 插入表格
      this.specialSurveyjson.splice(0, 0, this.formData);
    },
    // 特检医嘱按钮功能
    editSpecial(row) {
      row.iseditor = true;
    },
    saveSpecial(row) {
      row.iseditor = false;
    }
  }
}
</script>

<style scoped>
  .el-popover{
    height: 200px; 
    overflow: auto;
  }
</style>