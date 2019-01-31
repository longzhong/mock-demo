<template>
    <div class="fillcontain table_container">
    <div>
      <el-button @click='$router.go(-1)' class='marginB20'>返回</el-button>
    </div>
      <el-form ref="form" label-width="80px" class='parking-flex'>
        <el-form-item label="车牌号" label-width='100px'>
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>

        <el-form-item label="车牌照片" label-width='100px'>
          <el-upload v-if='!id'
            class="avatar-uploader"
            action="图片上传地址"
            :show-file-list="false"
            :on-success="handleAvatarSuccess">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <img :src="imageUrl" alt="" class="avatar" v-else>
        </el-form-item>

        <el-form-item label="联系人电话" label-width='100px'>
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>

        <el-form-item label="联系人姓名" label-width='100px'>
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>

        <el-form-item label="免费范围" label-width='100px'>
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>

        <el-form-item v-if='!id'>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
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
                imageUrl:'',
            }
        },
        created(){
            console.log(this.$route)
            this.id=this.$route.query.id || false
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


