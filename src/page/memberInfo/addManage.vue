<template>
    <div class="fillcontain table_container">
    <div>
      <el-button @click='$router.go(-1)' class='marginB20'>返回</el-button>
    </div>
      <el-form ref="form" label-width="80px" class='parking-flex'>
        <el-form-item label="姓名" label-width='100px' :rules="{required:true}">
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>
 

        <el-form-item label="手机" label-width='100px' :rules="{required:true}">
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>
		
        <el-form-item label="邮箱" label-width='100px' :rules="{required:true}">
          <el-input v-model="address" :disabled="id"></el-input>
        </el-form-item>
		
		<el-row>
			<el-button type="primary" class='marginB20' @click="add">增加车牌号</el-button>
		</el-row>

        <el-form-item
		    v-for="(domain, index) in cars"
		    :label="'车牌号' + (index+1)"
		    :key="domain.key"
		    :prop="'domains.' + index + '.value'"
		    :rules="{
		      required: true, message: '车牌号不能为空', trigger: 'blur'
		    }"
		  >
		  	<div class='flex'>
		  		<el-input v-model="domain.number" class='marginR20'></el-input>
		    	<el-button @click.prevent="removeNumber(domain)" v-if='index!=0'>删除</el-button>
		  	</div>
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
                cars:[{number:''}]
            }
        },
        created(){
            console.log(this.$route)
            this.id=this.$route.query.id || false
        },
        methods: {
            onSubmit(){

            },
            removeNumber(item) {
		        var index = this.cars.indexOf(item)
		        if (index !== -1) {
		          this.cars.splice(index, 1)
		        }
		    },
		    add(){
		    	this.cars.push({
		          value: '',
		          key: Date.now()
		        });
		    }
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
    .flex{
    	display: flex;
    	align-items: center;
      	justify-content: space-between;
    }
    .marginR20{
    	margin-right: 20px;
    }
</style>


