<template>
    <div class="fillcontain table_container">
    <div>
      <el-button @click='$router.go(-1)' class='marginB20'>返回</el-button>
    </div>
      <el-form ref="form" label-width="80px" class='parking-flex'>
        <el-form-item label="账号" label-width='100px'>
          <el-input v-model="name" autocomplete="off" name='name'></el-input>
        </el-form-item>

        <el-form-item label="密码" label-width='100px'>
          <el-input v-model="pas" type='password' name='pas' auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="联系人姓名" label-width='100px'>
          <el-checkbox-group v-model="roles">
            <el-checkbox label="角色A" name="type"></el-checkbox>
            <el-checkbox label="角色B" name="type"></el-checkbox>
            <el-checkbox label="角色C" name="type"></el-checkbox>
            <el-checkbox label="角色D" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>


        <el-form-item>
          <el-button type="primary" @click="onSubmit">{{id ? '保存' : '立即创建'}}</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                address:'',
                id:'',
                name:'',
                pas:'',
                roles:[],
            }
        },
        created(){
            console.log(this.$route)
            this.id=this.$route.query.id || ''
        },
        methods: {
            onSubmit(){

            },
            handleAvatarSuccess(res, file) {
              this.imageUrl = URL.createObjectURL(file.raw);
            },
            
        },
    }
</script>

<style lang="less">
    .table_container{
        padding: 20px;
        box-sizing: border-box
    }
    .marginB20{
      margin-bottom:20px;
    }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
</style>


