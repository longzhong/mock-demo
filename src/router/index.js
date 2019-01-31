import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
// 停车场管理
const chargingIndex = r => require.ensure([], () => r(require('@/page/chargingIndex')), 'chargingIndex');

const charging = r => require.ensure([], () => r(require('@/page/charging')), 'charging');
const record = r => require.ensure([], () => r(require('@/page/record')), 'record');
const parkingLotIndex = r => require.ensure([], () => r(require('@/page/parking-lot/index')), 'parkingLotIndex');
const parkingLot = r => require.ensure([], () => r(require('@/page/parking-lot/parking-lot')), 'parkingLot');
const addParkingLotIndex = r => require.ensure([], () => r(require('@/page/parking-lot/add-parking-lot')), 'addParkingLotIndex');

const vipIndex = r => require.ensure([], () => r(require('@/page/vip/index')), 'vipIndex');
const vip = r => require.ensure([], () => r(require('@/page/vip/vip')), 'vip');
const addVip = r => require.ensure([], () => r(require('@/page/vip/add-vip')), 'addVip');

// 创建计费规则
const billingMode = r => require.ensure([], () => r(require('@/page/billing-mode')), 'billingMode');

// 会员管理
const memberInfoIndex = r => require.ensure([], () => r(require('@/page/memberInfo/index')), 'memberInfoIndex');
const memberInfo = r => require.ensure([], () => r(require('@/page/memberInfo/memberInfo')), 'memberInfo');
const addManage = r => require.ensure([], () => r(require('@/page/memberInfo/addManage')), 'addManage');
const wallet = r => require.ensure([], () => r(require('@/page/memberInfo/wallet')), 'wallet');




const recharge = r => require.ensure([], () => r(require('@/page/recharge')), 'recharge');
const pay = r => require.ensure([], () => r(require('@/page/pay')), 'pay');

// 系统管理
const userIndex = r => require.ensure([], () => r(require('@/page/user/index')), 'userIndex');
const user = r => require.ensure([], () => r(require('@/page/user/user')), 'user');
const addUser = r => require.ensure([], () => r(require('@/page/user/add-user')), 'addUser');

const roleIndex = r => require.ensure([], () => r(require('@/page/role/index')), 'roleIndex');
const role = r => require.ensure([], () => r(require('@/page/role/role')), 'role');
const addRole = r => require.ensure([], () => r(require('@/page/role/add-role')), 'addRole');

const app = r => require.ensure([], () => r(require('@/page/app')), 'app');




const routes = [
	{
		path: '/',
		component: manage,
		redirect:'/manage'
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/charging',
			component: chargingIndex,
			meta: ['停车场管理', '计费规则'],
			children:[{
				path: '',
				component: charging,
				meta: ['停车场管理', '计费规则'],
			},{
				path: 'billingMode',
				component: billingMode,
				name:'billingMode',
				meta: ['停车场管理', '计费规则','增加'],
			}]
		},{
			path: '/record',
			component: record,
			meta: ['停车场管理', '停车记录'],
		},{
			path: '/parkingLot',
			component: parkingLotIndex,
			meta: ['停车场管理', '停车场'],
			children:[{
				path: '',
				component: parkingLot,
				meta: ['停车场管理', '停车场'],
			},{
				path: 'addParkingLotIndex',
				component: addParkingLotIndex,
				name:'addParkingLotIndex',
				meta: ['停车场管理', '停车场','增加'],
			}]
		},{
			path: '/vip',
			component: vipIndex,
			meta: ['停车场管理', '贵宾车辆'],
			children:[{
				path: '',
				component: vip,
				meta: ['停车场管理', '贵宾车辆'],
			},{
				path: 'addVip',
				component: addVip,
				name:'addVip',
				meta: ['停车场管理', '贵宾车辆','增加'],
			}]
		},{
			path: '/memberInfo',
			component: memberInfoIndex,
			meta: ['会员管理', '会员信息'],
			children:[{
				path: '',
				component: memberInfo,
				meta: ['会员管理', '会员信息'],
			},{
				path: 'addManage',
				component: addManage,
				name:'addManage',
				meta: ['会员管理', '会员信息','增加'],
			},{
				path: 'wallet',
				component: wallet,
				name:'wallet',
				meta: ['会员管理', '会员信息','钱包'],
			}]
		},{
			path: '/recharge',
			component: recharge,
			meta: ['会员管理', '充值记录'],
		},{
			path: '/pay',
			component: pay,
			meta: ['会员管理', '缴费记录'],
		},{
			path: '/user',
			component: userIndex,
			meta: ['系统管理', '系统用户'],
			children:[{
				path: '',
				component: user,
				meta: ['系统管理', '系统用户'],
			},{
				path: 'addUser',
				component: addUser,
				name:'addUser',
				meta: ['系统管理', '系统用户','增加'],
			}]
		},{
			path: '/role',
			component: roleIndex,
			meta: ['系统管理', '系统角色'],
			children:[{
				path: '',
				component: role,
				meta: ['系统管理', '系统角色'],
			},{
				path: 'addRole',
				component: addRole,
				name:'addRole',
				meta: ['系统管理', '系统角色','增加'],
			}]
		},{
			path: '/app',
			component: app,
			meta: ['系统管理', 'APP升级管理'],
		}]
	}
]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
