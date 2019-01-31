<template>
    <div class="fillcontain">
        <div class='add-btn'>
             <el-button type="primary" @click='add_vip'>添加贵宾车辆</el-button>
        </div>
        <div class="table_container">
            <el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="number"
		        label="车牌号"
		        >
		      </el-table-column>
		      <el-table-column
		        prop="pic"
		        label="车牌照片"
                class='center'
		        >
                <template slot-scope='scope'>
                    <img :src="scope.row.pic" alt="" class='pic'>
                </template>
		      </el-table-column>
              <el-table-column
                prop="phone"
                label="联系人电话"
                >
              </el-table-column>
		      <el-table-column
		        prop="name"
		        label="联系人姓名">
		      </el-table-column>
              <el-table-column
                prop="create_time"
                label="添加时间">
              </el-table-column>
              <el-table-column
                prop="free"
                label="免费范围">
              </el-table-column>
              <el-table-column label="操作" width="160">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      @click="details(scope.row)">详情</el-button>
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
                    url: '/vip/list',
                    data:'',
                    success(res){
                        self.tableData=res.data
                        self.count=self.tableData.length
                    }
                })
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getList()
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
                        url: '/vip/list',
                        data:'',
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
            add_vip(){
                this.$router.push({name:'addVip'})
            },
            details(row){
                this.$router.push({name:'addVip',query:{id:row.id}})
            }
        },
    }
</script>

<style lang="less">
    .table_container{
        padding: 20px;
    }
    .pic{
        width: 40px;height: 40px;display:block;
        margin: 10px 0px
    }
    .add-btn{
        padding: 20px;
        padding-bottom: 0px;
    }
    .center{
        text-align:center
    }
</style>


