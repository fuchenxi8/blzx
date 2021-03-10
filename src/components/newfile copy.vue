<template>
  <!-- <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form> -->
  <el-container>
    <el-header>
        <el-form :inline="true" :model="form" class="demo-form-inline">
          <!-- 第一个模块 -->
          <!-- 第一行 -->
          <el-form-item>
            <!-- <el-col :span="24"> -->
              <el-form-item label="冰冻ID">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="HISID">
                <el-input v-model="form.hisId"></el-input>
              </el-form-item>
              <el-form-item label="申请号">
                <el-input v-model="form.applicationId"></el-input>
              </el-form-item>
              <el-form-item label="病人ID">
                <el-input v-model="form.patientId"></el-input>
              </el-form-item>
            <!-- </el-col> -->
          </el-form-item><br>
          <!-- 第二行 -->
           <el-form-item>
              <el-form-item label="病理号">
                <el-input v-model="form.pathId"></el-input>
              </el-form-item>
              <el-form-item label="体检号">
                <el-input v-model="form.medicalId"></el-input>
              </el-form-item>
              <el-form-item label="门诊号">
                <el-input v-model="form.outpatientId"></el-input>
              </el-form-item>
              <el-form-item label="住院号">
                <el-input v-model="form.hospitalId"></el-input>
              </el-form-item>
          </el-form-item><br>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第二个模块 -->
          <!-- 第三行 -->
          <el-form-item>
              <el-form-item label="姓名">
                <el-input v-model="form.pathId"></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-input v-model="form.medicalId"></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input v-model="form.outpatientId"></el-input>
              </el-form-item>
              <el-form-item label="民族">
                <el-input v-model="form.hospitalId"></el-input>
              </el-form-item>
          </el-form-item><br>
          <!-- 第四行 -->
          <el-form-item >
              <el-form-item label="婚否" >
                <el-input v-model="form.maritalStatus"></el-input>
              </el-form-item>
              <el-form-item label="职业">
                <el-input v-model="form.professional"></el-input>
              </el-form-item>
              <el-form-item label="籍贯">
                <el-input v-model="form.nativePlace"></el-input>
              </el-form-item>
              <el-form-item label="身份证号">
                <el-input v-model="form.cardId"></el-input>
              </el-form-item>
          </el-form-item><br>
          <!-- 第五行 -->
          <el-form-item >
            <el-form-item label="联系信息">
              <el-input v-model="form.contactInformation"></el-input>
            </el-form-item>
          </el-form-item><br>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第三个模块 -->
          <!-- 第六行 -->
          <el-form-item >
            <el-form-item label="末次月经">
              <el-input v-model="form.lastMenstruation"></el-input>
            </el-form-item>
            <el-form-item label="绝经">
              <el-input v-model="form.menopause"></el-input>
            </el-form-item>
          </el-form-item><br>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第四个模块 -->
          <!-- 第七行 -->
          <el-form-item >
              <el-form-item label="送检单位" >
                <el-input v-model="form.inspectionUnit"></el-input>
              </el-form-item>
              <el-form-item label="送检科室">
                <el-input v-model="form.inspectionDepart"></el-input>
              </el-form-item>
              <el-form-item label="送检医生">
                <el-input v-model="form.inspectionDoctor"></el-input>
              </el-form-item>
              <el-form-item label="送检日期">
                <el-input v-model="form.inspectionDate"></el-input>
              </el-form-item>
          </el-form-item><br>
          <!-- 第八行 -->
          <el-form-item >
              <el-form-item label="病区" >
                <el-input v-model="form.ward"></el-input>
              </el-form-item>
              <el-form-item label="床号">
                <el-input v-model="form.bedId"></el-input>
              </el-form-item>
              <el-form-item label="标本类型">
                <el-input v-model="form.specimenYype"></el-input>
              </el-form-item>
              <el-form-item label="标本情况">
                <el-input v-model="form.specimenIs"></el-input>
              </el-form-item>
          </el-form-item><br>
          <!-- 第九行 -->
          <el-form-item >
              <el-form-item label="标本名称" >
                <el-input v-model="form.specimenName"></el-input>
              </el-form-item>
              <el-form-item label="不合格原因">
                <el-input v-model="form.unqualifiedWhy"></el-input>
              </el-form-item>
              <el-form-item label="标本接收">
                <el-input v-model="form.specimenReceive"></el-input>
              </el-form-item>
          </el-form-item><br>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第五个模块 -->
          <!-- 第十行 -->
          <el-form-item >
            <el-form-item label="费别" >
              <el-input v-model="form.costCategories"></el-input>
            </el-form-item>
            <el-form-item label="收费">
              <el-input v-model="form.charge"></el-input>
            </el-form-item>
            <el-form-item label="取材医生">
              <el-input v-model="form.basedDoctor"></el-input>
            </el-form-item>
            <el-form-item label="接收日期">
              <el-input v-model="form.receivingDate"></el-input>
            </el-form-item>
          </el-form-item><br>
          <!-- 第十一行 -->
          <el-form-item >
            <el-form-item label="临床诊断" >
              <el-input v-model="form.clinicalDiagnosis"></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="form.phone"></el-input>
            </el-form-item>
          </el-form-item><br>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第五个模块 -->
          <!-- 第十二行 -->
          <el-form-item >
            <el-form-item label="病史摘要" >
              <el-input type="textarea" :rows="4" v-model="form.medicalAbstract"></el-input>
            </el-form-item>
            <el-form-item label="手术所见">
              <el-input type="textarea" :rows="4" v-model="form.surgerySee"></el-input>
            </el-form-item>
          </el-form-item><br>
          <!-- 第十三行 -->
          <el-form-item >
            <el-form-item label="会诊意见" >
              <el-input type="textarea" :rows="4" v-model="form.consultationOpinion"></el-input>
            </el-form-item>
            <el-form-item label="补充报告">
              <el-input type="textarea" :rows="4" v-model="form.supplementaryReport"></el-input>
            </el-form-item>
          </el-form-item><br>
          <!-- 第十四行 -->
          <el-form-item >
            <el-form-item label="冰冻报告" >
              <el-input type="textarea" :rows="4" v-model="form.clinicalDiagnosis"></el-input>
            </el-form-item>
            <el-form-item label="诊断记录">
              <el-input type="textarea" :rows="4" v-model="form.phone"></el-input>
            </el-form-item>
          </el-form-item><br>
        </el-form>
      </el-header>
    </el-container>
     

            
</template>

<script>
export default {
  data(){
    return {
      form: {
          name: '',
          hisId: '',
          applicationId: '',
          patientId: '',
          pathId: '',
          medicalId: '',
          outpatientId: '',
          hospitalId: '',
          gender: '',
          age: '',
          national: '',
          maritalStatus: '',
          professional: '',
          nativePlace: '',
          cardId: '',
          contactInformation: '',
          lastMenstruation: '',
          menopause: '',
          inspectionUnit: '',
          inspectionDepart: '',
          inspectionDoctor: '',
          inspectionDate: '',
          ward: '',
          bedId: '',
          specimenType: '',
          specimenIs: '',
          specimenName: '',
          unqualifiedWhy: '',
          specimenReceive: '',
          costCategories: '',
          charge: '',
          basedDoctor: '',
          receivingDate: '',
          clinicalDiagnosis: '',
          medicalAbstract: '',
          surgerySee: '',
        }
    }
  }
}
</script>

<style scoped>
  .line-left-right {
    padding: 0 0px 0px;
    margin: 20px 0px;
    line-height: 1px;
    border-left: 750px solid rgb(221, 221, 221);
    border-right: 750px solid rgb(221, 221, 221);
    text-align: center;
    height: 2px;
  }

  .singerH /deep/ {
    white-space: pre-wrap;
    text-align: center;
  }

  .el-label2 {
    width: 12.5vh;
  }
</style>