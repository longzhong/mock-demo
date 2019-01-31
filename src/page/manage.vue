<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" theme="dark" router>
					<el-menu-item index="manage"><i class="el-icon-menu"></i>平台总览</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>停车场管理</template>
						<el-menu-item index="/charging">计费规则</el-menu-item>
						<el-menu-item index="/record">停车记录</el-menu-item>
						<el-menu-item index="/parkingLot">停车场</el-menu-item>
						<el-menu-item index="/vip">贵宾车辆</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-edit"></i>会员管理</template>
						<el-menu-item index="/memberInfo">会员信息</el-menu-item>
						<el-menu-item index="/recharge">充值记录</el-menu-item>
						<el-menu-item index="/pay">缴费记录</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-setting"></i>报表管理</template>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-warning"></i>系统管理</template>
						<el-menu-item index="/user">系统用户</el-menu-item>
						<el-menu-item index="/role">系统角色</el-menu-item>
						<el-menu-item index="/app">APP升级管理</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return '/'+this.$route.path.split('/')[1];
			}
		}
    }
</script>


<style lang="less" scoped>
	@import '../style/mixin';
	.manage_page{
		
	}
</style>
