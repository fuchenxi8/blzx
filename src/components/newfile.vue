<template>
  <!-- <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="活动名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form> -->
  <el-container>
    <el-header style="height: 100%;text-align: right; font-size: 12px">
        <el-form :inline="false" :model="form" class="demo-form-inline">
          <!-- 第一个模块 -->
          <!-- 第一行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="冰冻ID" size="mini">
                  <el-input v-model="form.name" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="HISID" size="mini">
                  <el-input v-model="form.hisId" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="申请号" size="mini">
                  <el-input v-model="form.applicationId" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="病人ID" size="mini">
                  <el-input v-model="form.patientId" style="width: 90px"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 第二行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="病理号" size="mini">
                  <el-input v-model="form.pathId" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="体检号" size="mini">
                  <el-input v-model="form.medicalId" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="门诊号" size="mini">
                  <el-input v-model="form.outpatientId" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="住院号" size="mini">
                  <el-input v-model="form.hospitalId" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
          </el-row>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第二个模块 -->
          <!-- 第三行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="姓名" size="mini">
                  <el-input v-model="form.name" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="性别" size="mini" :label-position="labelPosition">
                  <el-input v-model="form.gender" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="年龄" size="mini" :label-position="labelPosition">
                  <el-input v-model="form.age" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="民族" size="mini" :label-position="labelPosition">
                  <el-input v-model="form.national" style="width: 90px;text-align:center;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 第四行 -->
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="婚否">
                <el-input v-model="form.maritalStatus" size="mini" style="width: 90px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="职业">
                <el-input v-model="form.professional" size="mini" style="width: 90px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="籍貫">
                <el-input v-model="form.nativePlace" size="mini" style="width: 90px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="身份证号">
                <el-input v-model="form.cardId" size="mini" style="width: 70px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第五行 -->
          <!-- <el-form-item > -->
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="联系信息">
                  <el-input v-model="form.contactInformation" size="mini" style="width: 240px;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- </el-form-item><br> -->
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第三个模块 -->
          <!-- 第六行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="末次月经">
                  <el-input v-model="form.lastMenstruation" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="绝经">
                  <el-input v-model="form.menopause" size="mini" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第四个模块 -->
          <!-- 第七行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="送检单位" >
                  <el-input v-model="form.inspectionUnit" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="送检科室">
                  <el-input v-model="form.inspectionDepart" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="送检医生">
                  <el-input v-model="form.inspectionDoctor" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="送检日期">
                  <el-input v-model="form.inspectionDate" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 第八行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="病区" >
                  <el-input v-model="form.ward" size="mini" style="width: 90px;"></el-input>
                </el-form-item> 
              </el-col>
              <el-col :span="6">
                <el-form-item label="床号">
                  <el-input v-model="form.bedId" size="mini" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="标本类型">
                  <el-input v-model="form.specimenYype" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="标本情况">
                  <el-input v-model="form.specimenIs" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 第九行 -->
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="标本名称" >
                  <el-input v-model="form.specimenName" size="mini" style="width: 240px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="不合格原因">
                  <el-input v-model="form.unqualifiedWhy" size="mini" style="width: 60px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="标本接收">
                  <el-input v-model="form.specimenReceive" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第五个模块 -->
          <!-- 第十行 -->
            <el-row :gutter="20">
              <el-col :span="6">
                <el-form-item label="费别" >
                  <el-input v-model="form.costCategories" size="mini" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="收费">
                  <el-input v-model="form.charge" size="mini" style="width: 90px;"></el-input>
                </el-form-item>
              </el-col> 
              <el-col :span="6">
                <el-form-item label="取材医生">
                  <el-input v-model="form.basedDoctor" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="接收日期">
                  <el-input v-model="form.receivingDate" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
            </el-col>
            </el-row>
          <!-- 第十一行 -->
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="临床诊断" >
                  <el-input v-model="form.clinicalDiagnosis" size="mini" style="width: 240px;"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="手机号码">
                  <el-input v-model="form.phone" size="mini" style="width: 70px;"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          <!-- 分割线 -->
          <div class="line-left-right"></div>
          <!-- 第五个模块 -->
          <!-- 第十二行 -->
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="病史摘要" >
                <el-input type="textarea" :rows="4" v-model="form.medicalAbstract" style="width: 240px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="手术所见">
                <el-input type="textarea" :rows="4" v-model="form.surgerySee" style="width: 240px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第十三行 -->
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="会诊意见" >
                <el-input type="textarea" :rows="4" v-model="form.consultationOpinion" style="width: 240px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="补充报告">
                <el-input type="textarea" :rows="4" v-model="form.supplementaryReport" style="width: 240px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <!-- 第十四行 -->
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label="冰冻报告" >
                <el-input type="textarea" :rows="4" v-model="form.clinicalDiagnosis" style="width: 240px;"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="诊断记录">
                <el-input type="textarea" :rows="4" v-model="form.diagnosisRecord" style="width: 240px;"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
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
        },
        labelPosition: 'right',
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