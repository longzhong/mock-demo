<template>
    <div class="fillcontain">
        <div class='add-btn'>
             <el-button type="primary" @click='add_vip'>添加会员</el-button>
        </div>
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="name" label="姓名" >
                </el-table-column>
                <el-table-column
                    prop="phone"
                    label="手机"
                    >
                </el-table-column>
                <el-table-column
                  prop="email"
                  label="邮箱"
                  >
                </el-table-column>
                <el-table-column
                  prop="create_time"
                  label="注册时间"
                  >
                </el-table-column>
                <el-table-column
                  prop="warning"
                  label="钱包"
                  >
                  <template slot-scope='scope'>
                      钱包
                  </template>
                </el-table-column>
                <el-table-column
                  prop="account_number"
                  label="登录账号"
                  >
                </el-table-column>
                  <el-table-column
                    prop="cars"
                    label="拥有车辆">
                    <template slot-scope="scope">
                      <p v-for='(val,index) in scope.row.cars'>{{val}}</p>
                    </template>
                  </el-table-column>
                <el-table-column
                label="开关">
                <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.switch"
                      active-color="#13ce66"
                      inactive-color="#ccc"
                      on-text='开启'
                      off-text='关闭'
                      @change='switchClick($event,scope.row)'>
                    </el-switch>
                </template>
              </el-table-column>
                <el-table-column label="操作" width="160">
                    <template slot-scope="scope">
                      <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button
                        size="small"
                        type="success"
                        @click="handleDetails(scope.$index, scope.row)">详情</el-button>
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
                    url: '/memberInfo/list',
                    data:'',
                    success(res){
                        self.tableData=res.data
                        self.count=self.tableData.length
                    }
                })
            },
            add_vip(){
                this.$router.push({name:'addManage'})
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                // this.getAdmin()
            },
            handleEdit(index,row){
              console.log(index,row)
              this.$router.push({name:'addManage',query:{id:row.id}})
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
              this.$router.push({name:'addManage',query:{id:row.id,details:true}})
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


