<template>
    <div>
        <!-- 面包屑导航 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item to="/welcome">首页</el-breadcrumb-item>
            <el-breadcrumb-item>库存管理</el-breadcrumb-item>
            <el-breadcrumb-item>查库存</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 卡片 -->
        <el-card>
            <!-- 搜索区域 -->
            <el-row :gutter="20">
                <el-col :span="8">
                    <el-input placeholder="请输入内容">
                        <el-button slot="append" icon="el-icon-search"></el-button>
                    </el-input>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary">添加用户</el-button>
                </el-col>
            </el-row>

            <!-- 列表区 -->
            <el-table :data="goodLists" :stripe="true">
                <el-table-column type="index"></el-table-column>
                <el-table-column label="商品图片" prop="goodImg"></el-table-column>
                <el-table-column label="商品编号" prop="goodId"></el-table-column>
                <el-table-column label="商品名称" prop="goodName"></el-table-column>
                <el-table-column label="商品类别" prop="goodItem"></el-table-column>
                <el-table-column label="品牌名称"></el-table-column>
                <el-table-column label="库存量"></el-table-column>
                <el-table-column label="保质期/天"></el-table-column>
                <el-table-column label="售价/元"></el-table-column>
                <el-table-column label="生产日期"></el-table-column>
                <el-table-column label="单位"></el-table-column>
                <el-table-column label="规格"></el-table-column>
                <el-table-column label="操作">
                    <!-- 定义作用于插槽 -->
                    <template slot-scope="scope">
                        <el-button type="primary" icon="el-icon-edit">修改</el-button>
                        <el-button type="primaty" icon="el-icon-delete">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>

<script>
    export default{
        name: 'User',
        data(){
            return{
                queryInfo:{
                    query:'',
                    pagenum:1,
                    pagesize:2
                },
                goodLists:[],
                total:0
            }
        },
        // created(){
        //     this.getList()
        // },
        methods:{
            async getGoodLists(){
                const {data: res} =  await this.$http.get('goodLists',{
                    params:this.queryInfo
                })
                if (res.meta.status !== 200) {
                    return this.$message.error('获取信息失败')
                }
                this.goodLists = res.data.goodLists
                this.total = res.data.total
            }
        }
    }

</script>

<style lang="less" scoped>

</style>