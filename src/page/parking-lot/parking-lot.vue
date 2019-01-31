<template>
    <div class="fillcontain">
        <div class='add-btn'>
             <el-button type="primary" @click='add_parking'>添加停车场</el-button>
        </div>
        <div class="table_container">
          <el-table
		        :data="tableData"
		        style="width: 100%">
  		      <el-table-column
  		        prop="user_name"
  		        label="车场名称"
  		        >
  		      </el-table-column>
  		      <el-table-column
  		        prop="address"
  		        label="地址"
  		        >
  		      </el-table-column>
            <el-table-column
              prop="number"
              label="车位数量"
              >
            </el-table-column>
            <el-table-column
              prop="create_time"
              label="创建时间"
              >
            </el-table-column>
            <el-table-column
              prop="state"
              label="是否运营"
              >
            </el-table-column>
            <el-table-column
              prop="passageway"
              label="通道数量"
              >
            </el-table-column>
  		      <el-table-column
  		        prop="rule"
  		        label="计费规则">
  		      </el-table-column>
            <el-table-column
              prop="remarks"
              label="备注"
              >
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
                <el-button
                    size="small"
                    type="success"
                    @click="handleDetails(scope.$index, scope.row)">详情</el-button>
                <el-button
                    size="small"
                    type="info"
                    @click="handleAnalog(scope.$index, scope.row)">模拟计费</el-button>
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
                    url: '/special/list',
                    data:'',
                    success(res){
                        self.tableData=res.data
                        self.count=self.tableData.length
                    }
                })
            },
            add_parking(){
                this.$router.push({name:'addParkingLotIndex'})
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
              this.$router.push({name:'addParkingLotIndex',query:{id:row.id}})
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
                      url: '/special/list',
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
            handleDetails(index,row){
              this.$router.push({name:'addParkingLotIndex',query:{id:row.id,details:true}})
            },
            handleAnalog(index,row){
              this.$alert('该功能待完善', '提示', {
                confirmButtonText: '确定',
                callback: action => {
                  
                }
              });
            }
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


