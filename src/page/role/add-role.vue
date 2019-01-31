<template>
    <div class="fillcontain table_container">
    <div>
      <el-button @click='$router.go(-1)' class='marginB20'>返回</el-button>
    </div>
      <el-form ref="form" label-width="80px" class='parking-flex'>
        <el-form-item label="角色名称" label-width='100px'>
          <el-input v-model="name" autocomplete="off" name='name'></el-input>
        </el-form-item>
        <el-form-item label="权限" label-width='100px'>
          <el-transfer v-model="value" :data="arr" class='marginB20'></el-transfer>
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
                id:'',
                name:'',
                value:[],
                arr:[],
            }
        },
        created(){
            this.id=this.$route.query.id || ''
            // this.id ? this.details() : this.getList()
            this.getList()
        },
        methods: {
            onSubmit(){

            },
            getList(){
              var self=this
              this.ajax({
                  mode: 'get',
                  url: '/resource/list',
                  data:{id:this.id},
                  success(res){
                    // if(self.id){
                    //   self.arr = self.res.data.concat(self.value).filter(v => self.res.data.includes(v) && !self.value.includes(v))
                    // }else{
                    //   self.arr=res.data
                    // }
                    self.arr=res.data
                  }
              })
            },
            handleAvatarSuccess(res, file) {
              this.imageUrl = URL.createObjectURL(file.raw);
            },
            details(){
              var self=this
              this.ajax({
                  mode: 'get',
                  url: '/role/list',
                  data:{id:this.id},
                  success(res){
                    console.log(res)
                     self.name=res.data.name
                     self.value=res.data.resource
                     self.getList()
                  }
              })
            }
        },
    }
</script>

<style lang="less">
    .table_container{
        padding: 20px;
        box-sizing: border-box
    }
</style>


