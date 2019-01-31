<template>
    <div>
        <head-top></head-top>
        <div class='table_container'>
          <div>
            <el-button @click='$router.go(-1)' class='marginB20'>返回</el-button>
          </div>

            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="按次计费" name="first" v-if='!id || activeName=="first"'> </el-tab-pane>
                <el-tab-pane label="按时计费" name="second" v-if='!id || activeName=="second"'></el-tab-pane>
                <el-tab-pane label="分段计费" name="third" v-if='!id || activeName=="third"'></el-tab-pane>
            </el-tabs>
            <el-form ref="form" label-width="80px">
                <el-form-item label="收费金额" v-if='activeName=="first" || activeName=="second"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="起始时间" v-if='activeName=="first" || activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="结束时间" v-if='activeName=="first" || activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="免费时长" v-if='activeName=="first" || activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="起步时长" v-if='activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="起步金额" v-if='activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="计费周期" v-if='activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="周期金额" v-if='activeName=="second" || activeName=="third"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="超时处理" v-if='activeName=="second"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item label="封顶金额" v-if='activeName=="second"'>
                  <el-input v-model="duration" :disabled="details"></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="onSubmit" :disabled="details">立即创建</el-button>
                  <!-- <el-button>取消</el-button> -->
                </el-form-item>
              </el-form>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    export default {
        data(){
            return {
                activeName: 'second',
                duration:'',
                details:false ,//详情  不可编辑
                id:'',
            }
        },
        created(){
            this.id=this.$route.query.id || ''
            this.details=this.$route.query.details
        },
        components: {
            headTop
        },
        mounted(){

        },
        computed: {

        },
        methods: {
           onSubmit(){
            
           },
           handleClick(){

           }
        }
    }
</script>

<style lang="less">
    @import '../style/mixin';
    .marginB20{
      margin-bottom:20px;
    }
</style>
