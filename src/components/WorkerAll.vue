<template>
    <div>
        <el-row class="task-content-header">
            <el-col :span="4">答题者</el-col>
            <el-col :span="4">level</el-col>
            <el-col :span="4">任务数量</el-col>
            <el-col :span="4">任务正确率</el-col>
            <el-col :span="5">任务退回率</el-col>
            <el-col :span="3">操作</el-col>
        </el-row>
        <el-collapse style="min-height:250px;border-bottom:none;">
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
         
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
         
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
        
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
           
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
           
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
          
            <el-collapse-item>
                <template slot="title">
                    <el-row style="width:100%;padding-left:30px">
                        <el-col :span="4"><i class="el-icon-circle-plus"></i>worker</el-col>
                        <el-col :span="4">LV.8</el-col>
                        <el-col :span="4">10000</el-col>
                        <el-col :span="4">80%</el-col>
                        <el-col :span="5">2%</el-col>
                        <el-col :span="3">
                            <el-button type="warning" @click="WarnChange" >警告</el-button>
                            <el-button type="danger" @click="CancelChange" >封禁</el-button>
                        </el-col>
                    </el-row>
                </template>
                <div style="padding-left:30px;">
                     <p>工人基本信息</p>
                    <el-row style="margin-top:20px;">
                        <el-col :span="6">工龄：398天</el-col>
                        <el-col :span="6">工作领域：医学、互联网</el-col>
                        <el-col :span="6">联系方式：13235466356</el-col>
                        <el-col :span="6">联系地址：***省***市***</el-col>
                    </el-row>
                </div>
            </el-collapse-item>
        </el-collapse>

        <div class="pages">
            
            <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[10, 20, 40]"
            :page-size="10"
            layout="sizes, prev, pager, next"
            :total="100">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WorkerAllTask',
    data () {
        return {
        }
    },
    methods:{
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        hello(){
            alert("hello");
        },
        WarnChange(){
           
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task-content-header{
    background:#eff0f1;
    height:50px;
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left: 34px;
    font-weight: bold;
    padding-right:20px;
}

.pages{
    margin:50px auto;
    display:flex;
    flex-direction:row;
    justify-content:center;
}
</style>
