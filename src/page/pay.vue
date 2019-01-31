<template>
    <div>
        <head-top></head-top>
        <div class="table_container">
            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    prop="create_time"
                    label="充值时间"
                >
                </el-table-column>
                <el-table-column
                    prop="mony"
                    label="充值金额"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="车主"
                  >
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
	import headTop from '../components/headTop'
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
    	components: {
    		headTop
    	},
    	mounted(){
    		
    	},
        created(){
            this.getList()
        },
    	methods: {
    		getList(){
                var self=this
                this.ajax({
                    mode: 'get',
                    url: '/recharge/list',
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
    	}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.table_container{
        padding: 20px;
    }
    .add-btn{
        padding: 20px;
        padding-bottom: 0px;
    }
</style>


