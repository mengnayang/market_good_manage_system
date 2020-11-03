<template>
    <el-container class="home_container">
        <!-- 头部区域 -->
        <el-header style="height:100px">
            <div class="header_left">
                <img src="../assets/image/login_icon1.png" alt="系统图标">
                <span>超市商品管理系统</span>
            </div>
            <div class="header_right">
                <div>
                    <i class="el-icon-user"></i>
                    <span>张经理</span>
                </div>
                <div @click="logout()">
                    <i class="iconfont icon-logout"></i>
                    <span>退出</span>
                </div>
            </div>
        </el-header>
        <!-- 主体区域 -->
        <el-container>
            <!-- 侧边栏 -->
            <el-aside :width="isCollapse ? '64px':'200px'">
                <!-- 菜单的折叠与展开 -->
                <div class="toggle-button" @click="toggleCollapse">|||</div>
                <!-- 菜单区 -->
                <el-menu :unique-opened="true" :collapse="isCollapse" :collapse-transition="false" background-color="#ffffff" text-color="#000000" 
                        active-text-color="#0F59A4">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>库存管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">查库存</el-menu-item>
                            <el-menu-item index="1-2">订单信息</el-menu-item>
                            <el-menu-item index="1-3">采购入库单</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>销售管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">零售管理</el-menu-item>
                            <el-menu-item index="2-2">批发管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-lock"></i>
                            <span>盘点管理</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="3-1">盘带记录</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>销售统计</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="4-1">收支统计</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-user"></i>
                            <span>发布公告</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="5-1">公告信息</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <!-- 右边主体区域 -->
            <el-main>
                <!-- 路由占位符 -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default{
        name: 'Home',
        // create(){
        //     this.getMenuList()
        // },
        data(){
            return{
                menuList:'',
                isCollapse:false
            }
        },
        methods:{
            logout(){
                window.sessionStorage.clear()
                this.$router.push('/login')
            },
            toggleCollapse(){
                this.isCollapse = !this.isCollapse
            }
            // async getMenuList(){
            //     const {data:res} = await this.$http.get('menus')
            //     if(res.meta.status !== 200) return this.$message.error('res.meta.msg')
            //     this.menuList = res.data
            //     console.log(res)
            // }
        }
    }
</script>

<style lang="less" scoped>
.home_container{
    height: 100%;
}
.el-header{
    background-color: #0F59A4;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: #ffffff;
    .header_left{
        display: flex;
        align-items: center;
        cursor: pointer;
        span{
            margin-left: 15px;
            font-size: 40px;
        }
        img{
            width: 15%;
            height: 100%;
        }
    }
    .header_right{
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        width: 20%;
        height: 50%;
        div{
            cursor: pointer;
            i{
                font-size: 20px;
            }
        }
    }
}
.el-aside{
    background-color: #ffffff;
    .el-menu{
        border-right: none;
    }
}
.el-main{
    background-color:aquamarine;
}
.toggle-button{
    background-color: #0F59A4;
    font-size: 10px;
    line-height: 24px;
    color: #ffffff;
    text-align: center;
    opacity: 0.5;
    letter-spacing: 0.3em;
    cursor: pointer;
}
</style>