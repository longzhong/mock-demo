<template>
    <div>
        <head-top></head-top>
        <section class="data_section">
            <header class="section_title">数据统计</header>
            <el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4">
                    <div class="data_list today_head"><span class="data_num head">当日数据：</span></div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list"><span class="data_num">{{userCount}}</span> 新增用户</div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list"><span class="data_num">{{orderCount}}</span> 新增订单</div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list"><span class="data_num">{{adminCount}}</span> 新增管理员</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4"><div class="data_list all_head"><span class="data_num head">总数据：</span></div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allUserCount}}</span> 注册用户</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allOrderCount}}</span> 订单</div></el-col>
                <el-col :span="4"><div class="data_list"><span class="data_num">{{allAdminCount}}</span> 管理员</div></el-col>
            </el-row>
        </section>
        <tendency :sevenDate='sevenDate' :sevenDay='sevenDay'></tendency>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import tendency from '../components/tendency' 
    import { mapActions } from 'vuex'
    export default {
        data(){
            return {
                userCount: 0,
                orderCount: 0,
                adminCount: 0,
                allUserCount: 0,
                allOrderCount: 0,
                allAdminCount: 0,
                sevenDay: null,
                sevenDate: null,
            }
        },
        components: {
            headTop,
            tendency,
        },
        mounted(){
            this.inData();
            this.getSevenData();
        },
        computed: {

        },
        methods: {
            ...mapActions(['GET_HOME_SEVE','GET_HOME_INDATE']),
            getSevenData(){
                var self=this
                this.GET_HOME_SEVE()
                .then((res)=>{
                    self.sevenDay=['2017.01.01','2017.01.02','2017.01.03','2017.01.04','2017.01.05']
                    self.sevenDate=res.data
                })
            },
            inData(){
                var self=this
                this.GET_HOME_INDATE()
                .then(res=>{
                    self.userCount=res.data.userCount
                    self.orderCount=res.data.orderCount
                    self.adminCount=res.data.adminCount
                    self.allUserCount=res.data.allUserCount
                    self.allOrderCount=res.data.allOrderCount
                    self.allAdminCount=res.data.allAdminCount
                })
            }
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .data_section{
        padding: 20px;
        margin-bottom: 40px;
        .section_title{
            text-align: center;
            font-size: 30px;
            margin-bottom: 10px;
        }
        .data_list{
            text-align: center;
            font-size: 14px;
            color: #666;
            border-radius: 6px;
            background: #E5E9F2;
            .data_num{
                color: #333;
                font-size: 26px;

            }
            .head{
                border-radius: 6px;
                font-size: 22px;
                padding: 4px 0;
                color: #fff;
                display: inline-block;
            }
        }
        .today_head{
            background: #FF9800;
        }
        .all_head{
            background: #20A0FF;
        }
    }
    .wan{
        .sc(16px, #333)
    }
</style>
