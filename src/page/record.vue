<template>
    <div>
     	<head-top></head-top>
		 <el-row class='table_container'>
			 <el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="number"
		        label="订单编号"
		        >
		      </el-table-column>
		      <el-table-column
		        prop="car_owner"
		        label="所属车主"
		        >
		      </el-table-column>
              <el-table-column
                prop="plate_number"
                label="车牌号"
                >
              </el-table-column>
		      <el-table-column
		        prop="entry_mode"
		        label="进场方式">
		      </el-table-column>

		      <el-table-column
		        prop="way_out"
		        label="出场方式"
		        width='250'>
		      </el-table-column>
		      <el-table-column
		        prop="time_out"
		        label="出场时间"
		        width='250'>
		      </el-table-column>
		      <el-table-column
		        prop="parking_lot"
		        label="所属停车场">
		      </el-table-column>
		      <el-table-column
		        prop="state"
		        label="状态">
		      </el-table-column>


			   <el-table-column label="操作" width="200">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      type="success"
                      @click="details(scope.row)">详情</el-button>
                    <el-button
                      size="small"
                      type="warning"
                      @click="pay(scope.row)">支付流水</el-button>
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
		 </el-row>
        
    </div>
</template>

<script>
 	import headTop from '@/components/headTop'
    export default {
    	data(){
    		return {
				tableData:null,
				offset: 0,
                limit: 20,
                count: 1,
                currentPage: 1,
    		}
    	},
    	components: {
    		headTop,
    	},
    	created(){
			this.getList()
    	},
    	computed: {
    		
    	},
    	methods: {
    		getList(){
    			var self=this
                this.ajax({
                    mode: 'get',
                    url: '/record/list',
                    data:'',
                    success(res){
                        self.tableData=res.data
                        self.count=self.tableData.length
                    }
                })
    		},
    		details(row){
				console.log(row)
				this.$alert('该功能待完善', '提示', {
	                confirmButtonText: '确定',
	                callback: action => {
	                  
	                }
	              });
			},
			pay(row){
				console.log(row)
				this.$alert('该功能待完善', '提示', {
	                confirmButtonText: '确定',
	                callback: action => {
	                  
	                }
	              });
			},
			handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                // this.getAdmin()
            },
		}
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.form{
		min-width: 400px;
		margin-bottom: 30px;
		&:hover{
			box-shadow: 0 0 8px 0 rgba(232,237,250,.6), 0 2px 4px 0 rgba(232,237,250,.5);
			border-radius: 6px;
			transition: all 400ms;
		}
	}
	.food_form{
		border: 1px solid #eaeefb;
		padding: 10px 10px 0;
	}
	.form_header{
		text-align: center;
		margin-bottom: 10px;
	}
	.category_select{
		border: 1px solid #eaeefb;
		padding: 10px 30px 10px 10px;
		border-top-right-radius: 6px;
		border-top-left-radius: 6px;
	}
	.add_category_row{
		height: 0;
		overflow: hidden;
		transition: all 400ms;
		background: #f9fafc;
	}
	.showEdit{
		height: 185px;
	}
	.add_category{
		background: #f9fafc;
		padding: 10px 30px 0px 10px;
		border: 1px solid #eaeefb;
		border-top: none;
	}
	.add_category_button{
		text-align: center;
		line-height: 40px;
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
		border: 1px solid #eaeefb;
		border-top: none;
		transition: all 400ms;
		&:hover{
			background: #f9fafc;
			span, .edit_icon{
				color: #20a0ff;
			}
		}
		span{
			.sc(14px, #999);
			transition: all 400ms;
		}
		.edit_icon{
			color: #ccc;
			transition: all 400ms;
		}
	}
	.avatar-uploader .el-upload {
	    border: 1px dashed #d9d9d9;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 120px;
	    height: 120px;
	    line-height: 120px;
	    text-align: center;
	}
	.avatar {
	    width: 120px;
	    height: 120px;
	    display: block;
	}
	.cell{
		text-align: center;
	}
	.table_container{
        padding: 20px;
    }
</style>
