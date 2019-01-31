<template>
    <div>
     	<head-top></head-top>
     	<div class='add-btn'>
     		 <el-button type="primary" @click='add_rule'>添加计费规则</el-button>
     	</div>
		 <el-row class='table_container'>
			 <el-table
		      :data="tableData"
		      style="width: 100%">
		      <el-table-column
		        prop="user_name"
		        label="规则姓名"
		        >
		      </el-table-column>
		      <el-table-column
		        prop="create_time"
		        label="创建日期"
		        >
		      </el-table-column>
              <el-table-column
                prop="state"
                label="状态"
                >
              </el-table-column>
		      <el-table-column
		        prop="mode"
		        label="计费方式">
		      </el-table-column>
		      <el-table-column
		        prop="parameter"
		        label="参数">
		      </el-table-column>
		      <el-table-column
		        prop="describe"
		        label="描述">
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
			   <el-table-column label="操作" width="400">
                  <template slot-scope="scope">
                    <el-button
                      size="small"
                      @click="handleEdit(scope.row)">编辑</el-button>
                    <el-button
                      size="small"
                      type="primary"
                      @click="binding(scope.$index, scope.row)">绑定停车场</el-button>
                    <el-button
                      size="small"
                      type="success"
                      @click="analog(scope.$index, scope.row)">模拟计费</el-button>
                    <el-button
                      size="small"
                      type="warning"
                      @click="details(scope.$index, scope.row)">详情</el-button>
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


		<div class='modal' v-if='show' @click.self='show=false'>
			<div class='modal-content'>
				<div class="binding-header">
					选择需要绑定的停车场
				</div>
				<el-transfer v-model="selectedArr" :data="parkingArr"></el-transfer>
				<el-button class='binding-btn' type="primary" @click='bindingClick'>绑定</el-button>
			</div>
		</div>
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
                count: 2,
                currentPage: 1,
                el_switch:false,
                show:false,
                parkingArr:[],
                selectedArr:[],
    		}
    	},
    	components: {
    		headTop,
    	},
    	created(){
    		this.getList()
    		this.parkingList()
    	},
    	computed: {
    		
    	},
    	methods: {
    		getList(){
    			var self=this
                this.ajax({
                    mode: 'get',
                    url: '/charging/list',
                    data:'',
                    success(res){
                        self.tableData=res.data
                        self.count=self.tableData.length
                    }
                })
    		},
    		//停车场列表
    		parkingList(){
                var self=this
                this.ajax({
                    mode: 'get',
                    url: '/special/list',
                    data:'',
                    success(res){
                    	for(let i=0;i<res.data.length;i++){
                    		res.data[i].key=res.data[i].id
                    		res.data[i].label=res.data[i].user_name
                    	}
                        self.parkingArr=res.data
                    }
                })
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
	                    url: '/charging/list',
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
			add_rule(){
				this.$router.push({name:'billingMode'})
			},
			handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.offset = (val - 1)*this.limit;
                this.getList()
            },
            switchClick(val,row){
            	console.log(val,row.id)
            	this.ajax({
            		 mode: 'get',
	                 url: '/empty',
            	})
            },
            handleEdit(index,row){
            	this.$router.push({name:'billingMode',query:{id:row.id}})
            },
			binding(index,row){
				this.show=true
			},
			analog(index,row){
				this.$alert('该功能待完善', '提示', {
	                confirmButtonText: '确定',
	                callback: action => {
	                  
	                }
	              });
			},
			details(index,row){
				this.$router.push({name:'billingMode',query:{id:row.id,details:true}})
			},
			bindingClick(){
				console.log(this.selectedArr)
				this.show=false
			}
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
	
    .add-btn{
    	padding: 20px;
    	padding-bottom: 0px;
    }
    .binding-btn{
    	margin-top: 20px;
    }
    .binding-header{
    	padding:20px;
    	background:#409EFF;
    	color: #fff;
    	margin:-20px 0px 0px -20px;
    	width: 100%;
    	margin-bottom:20px;
    }
</style>
