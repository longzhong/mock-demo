<template>
    <div class="fillcontain table_container">
    <div>
      <el-button @click='$router.go(-1)' class='marginB20'>返回</el-button>
    </div>
      <el-form ref="form" label-width="80px" class='parking-flex'>
            <el-form-item label="车场名称"  prop="name">
              <el-input v-model="user_name" :disabled="details"></el-input>
            </el-form-item>

            <el-form-item label="车场坐标">
              <el-input v-model="address" :disabled="details"></el-input>
            </el-form-item>

            <el-form-item label="车位数量">
              <el-input v-model="number" :disabled="details"></el-input>
            </el-form-item>

            <el-form-item label="创建时间">
              <el-input v-model="create_time" :disabled="details"></el-input>
            </el-form-item>

            <el-form-item label="是否运营">
              <el-radio-group v-model="state" :disabled="details">
                <el-radio label="开始运营" value='1'></el-radio>
                <el-radio label="停止运营" value='0'></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="计费规则">
              <el-input v-model="rule" :disabled="details"></el-input>
            </el-form-item>
            <el-form-item label="备注">
              <el-input v-model="remarks" :disabled="details"></el-input>
            </el-form-item>

            <div class="passageway">
              <el-button type="warning" @click="add_passageway" :disabled="details">新增通道</el-button>
            </div>
            
            <el-form-item
              v-for="(domain, index) in passagewayArr"
              :label="'通道' + (index+1)"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
            >
              <div class='flex dynamic'>
                <div>
                  <el-row class='flex'>
                    <el-form-item label="名称">
                      <el-input v-model="domain.passageway_name" :disabled="details"></el-input>
                    </el-form-item>
                    <el-form-item label="摄像头编号" label-width='100px'>
                      <el-input v-model="domain.camera" :disabled="details"></el-input>
                    </el-form-item>
                    <el-form-item label="扫码机编号" label-width='100px'>
                      <el-input v-model="domain.sweep_code" :disabled="details"></el-input>
                    </el-form-item>
                    <el-form-item label="道闸编号">
                      <el-input v-model="domain.road_gate" :disabled="details"></el-input>
                    </el-form-item>
                  </el-row>
                  <el-row class='flex'>
                    <el-form-item label="状态">
                      <el-radio-group v-model="domain.passageway_state" :disabled="details">
                        <el-radio label="开启" value='1'></el-radio>
                        <el-radio label="维修" value='0'></el-radio>
                      </el-radio-group>
                    </el-form-item>
                    <el-form-item label="类型">
                      <el-radio-group v-model="domain.passageway_type" :disabled="details">
                        <el-radio label="入口" value='1'></el-radio>
                        <el-radio label="出口" value='2'></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-row>
                </div>
                <el-button v-if='index!=0' @click.prevent="removePassageway(domain)" type="danger" :disabled="details">删除</el-button>
              </div>
              
            </el-form-item>
        <el-form-item v-if='!details'>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                user_name:null,
                address:null,
                rule:null,
                state:null,
                number:null,
                create_time:null,
                remarks:null,
                
                passagewayArr:[{
                  passageway_name:null,
                  camera:null,
                  sweep_code:null,
                  road_gate:null,
                  passageway_state:null,
                  passageway_type:null,
                }],
                details:false, //详情  不可编辑
                id:'',
            }
        },
        created(){
            console.log(this.$route)
            this.id=this.$route.query.id || ''
            this.details=this.$route.query.details
        },
        methods: {
            onSubmit(){

            },
            add_passageway(){
              this.passagewayArr.push({
                passageway_name:null,
                camera:null,
                sweep_code:null,
                road_gate:null,
                passageway_state:null,
                passageway_type:null,
                key: Date.now()
              });
            },
            removePassageway(item){
              var index = this.passagewayArr.indexOf(item)
              if (index !== -1) {
                this.passagewayArr.splice(index, 1)
              }
            }
        },
    }
</script>

<style lang="less">
    .table_container{
        padding: 20px;
        box-sizing: border-box
    }
    .add-btn{
        padding: 20px;
        padding-bottom: 0px;
    }
    .passageway{
      margin-bottom: 10px;
    }
    .flex{
      display: flex
    }
    .dynamic{
      align-items: center;
      justify-content: space-between;
    }
    .marginB20{
      margin-bottom:20px;
    }
</style>


