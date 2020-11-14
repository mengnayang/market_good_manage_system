<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/image/login_icon.png" alt="">
            </div>
            <!-- 表单区域 -->
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login_form" label-width="60px">
                <!-- 用户名 -->
                <el-form-item prop="staffPhone">
                    <el-input v-model="loginForm.staffPhone" prefix-icon="el-icon-user" placeholder="请输入手机号"  autocomplete="off"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="staffPassword">
                    <!-- <el-tooptip content="Top center" placement="top"> -->
                        <el-input v-model="loginForm.staffPassword" type="password" prefix-icon="el-icon-lock" placeholder="请输入密码" autocomplete="off"></el-input>
                    <!-- </el-tooptip> -->
                </el-form-item>
                <!-- 忘记密码 -->
                <el-form-item class="forget_pwd">
                    <span>忘记密码
                        <i class="el-icon-question"></i>
                    </span>
                </el-form-item>
                <!-- 操作按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="register()">注册</el-button>
                    <el-button type="primary" @click="login()">登陆</el-button>
                    <el-button type="info" @click="resetLoginForm()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Login',
        mounted(){
            this.$http.get('user/userInfo')
            .then((res)=>{
                console.log(res)
            })
            .catch((err)=>{
                console.log(err)
            })
        },
        data(){
            return{
                //登陆表单的信息
                loginForm:{
                    staffPhone:'',
                    staffPassword:''
                },
                //验证规则
                loginFormRules:{
                    //验证手机号是否合法
                    staffPhone:[
                        {required:true, message:"请输入手机号", trigger:"blur"},
                        {pattern: /^1[3|4|5|7|8]\d{9}$/, message:"手机号不合法", trigger:"blur"}
                    ],
                    //验证密码是否合法
                    staffPassword:[
                        {required:true, message:"请输入密码", trigger:"blur"},
                        {min:8, max:16, message:"密码长度在8~16之间", trigger:"blur"},
                    ]
                }
            }
        },
        methods:{
            //重置登录信息 
            resetLoginForm(){
                // console.log(this)
                this.$refs.loginFormRef.resetFields();
            },
            //登陆检验
            login(){
                this.$refs.loginFormRef.validate(async (valid) => {
                    //console.log(valid)
                    if (!valid) return;
                    let data = {
                        staffPhone:this.loginForm.staffPhone,
                        staffPassword:this.loginForm.staffPassword
                    }
                    this.$http.post("login",this.$qs.stringify(data))
                    .then((res) => {
                        console.log(res.data);
                        let success = res.data.success
                        let msg = res.data.errMsg
                        if (success === false) {
                            this.$message.error(msg)
                        } else {
                            window.sessionStorage.setItem('token',res.data.staff.token)
                            //this.$store.state = res.data.staff.token
                            this.$message.success("登陆成功")
                            this.$router.push("/home")
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                        this.$message.error("登陆失败")
                    })
                })
            },
            //新用户注册
            register(){
                this.$router.push("/register")
            }
        }
    }
</script>

<style lang="less" scoped>
.login_container{
    background:url("../assets/image/bg.jpg") no-repeat;
    background-size: 100% 100%;
    height: 100%;
}
.login_box{
    width: 450px;
    height: 300px;
    background-color: #ffffff;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 0 0 5px #ffffff;
    .avatar_box{
        height: 110px;
        width: 110px;
        border: 1px solid #2b4b6b;
        border-radius: 50%;
        padding: 5px;
        box-shadow: 0px 0px 10px #dddddd;
        position: absolute;
        left: 50%;
        background-color: #ffffff;
        transform: translate(-50%,-50%);
        img{
            height: 100%;
            width: 100%;
            border-radius: 50%;
            background-color: #ffffff;
        }
    }
    .login_form{
        width: 90%;
        margin-top: 65px;
        .forget_pwd{
            display: flex;
            justify-content: flex-end;
        }
        .forget_pwd:hover{
            cursor: pointer;
            color: #ff0000;
        }
        .el-icon-user{
            font-size: 25px;
        }
        .el-icon-lock{
            font-size: 25px;
        }
        .btns{
            display: flex;
            justify-content: flex-end;
        }
    }
}
</style>