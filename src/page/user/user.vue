<template>
    <div class="fillcontain">
        <div class='add-btn'>
             <el-button type="primary" @click='add_user'>添加用户</el-button>
        </div>
        <div class="table_container">
          <el-table
		        :data="tableData"
		        style="width: 100%">
	      	<el-table-column
	        	prop="user_name"
	        	label="登录账号"
	        >
	      	</el-table-column>
	      	<el-table-column prop="address" label="登录密码" >
	        	<template slot-scope='scope'>
	        		********
	        	</template>
	      	</el-table-column>
            <el-table-column prop="role" label="角色" >
				<!-- <template slot-scope='scope'>

					<p v-for='(val,index) in scope.row.role' :key='index'>{{val}}</p>
				</template> -->
            </el-table-column>
            
            <el-table-column label="操作" width="360">
                <template slot-scope="scope">
                  <el-button
                    size="small"
                    type='primary'
                    @click="handleEdit(scope.$index,scope.row)">编辑</el-button>
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                 </template>
            </el-table-column>
		   </el-table>
	    <div class="Pagination" style="text-align: left;margin-top: 10px;">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="20"
              layout="total, prev, pager, next"
              :total="count">
            </el-pagination>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData: [],
                currentRow: null,
                offset: 0,
                limit: 20,
                count: 1,
                currentPage: 1,
            }
        },
        created(){
            this.getList()
        },
        methods: {
            getList(){
                var self=this
                this.ajax({
                    mode: 'get',
                    url: '/user/list',
                    data:'',
                    success(res){
                        self.tableData=res.data
                        self.count=self.tableData.length
                    }
                })
            },
            add_user(){
                this.$router.push({name:'addUser'})
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getList()
            },
            handleEdit(index,row){
              console.log(index,row)
              this.$router.push({name:'addUser',query:{id:row.id}})
            },
            handleDelete(index,row){
      				var self=this
      				self.$confirm('此操作将删除该条信息, 是否继续?', '提示', {
      					confirmButtonText: '确定',
      					cancelButtonText: '取消',
      					type: 'warning'
      				}).then(() => {
      					self.ajax({
                      mode: 'delete',
                      url: '/user/list',
                      data:{
                        id:row.id
                      },
                      success(res){
                        self.tableData.splice(index,1)
                      }
                  })
      				}).catch(() => {
      					self.$message({
      						type: 'info',
      						message: '已取消'
      					});          
      				});
      		},
        },
    }
</script>

<style lang="less">
    .table_container{
        padding: 20px;
    }
    .add-btn{
        padding: 20px;
        padding-bottom: 0px;
    }
</style>


