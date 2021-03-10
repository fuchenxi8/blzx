<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_hospital">
        <!-- <img src="../assets/hospital.png" alt=""> -->
      </div>
        <!-- 登录表单区域 -->
        <el-form label-width="0px">
          <el-form-item>
            <el-select v-model="ruleForm.region" placeholder="用户名">
              <el-option label="用户名1" value="name1"></el-option>
              <el-option label="用户名2" value="name2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-input placeholder="密码"  v-model="ruleForm.name" show-password></el-input>
          </el-form-item>
          <!-- 按钮 -->
          <el-form-item>
            <el-button type="primary" @click="onSubmit">管理登录</el-button>
            <el-button type="primary" @click="onSubmit1">登录</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
   data() {
      return {
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
   },
    methods: {
      onSubmit() {
        console.log('管理登录');
         //跳转页面
         this.$router.push("/workstation");
      },
      onSubmit1() {
        console.log('登录');
         //跳转页面
         this.$router.push("/workstation");
      },
    }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.login_hospital {
  width: 130px;
  height: 130px;
}

</style>