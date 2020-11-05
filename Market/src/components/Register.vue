<template>
    <div class="body">
        <div class="new_staff">
            <el-form label-width="100px" ref="RegisterRef" :model="RegisterForm" :rules="RegisterRules">
                <el-form-item label="用户名" required prop="staffName">
                    <el-input type="text" v-model="RegisterForm.staffName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="联系方式" required prop="staffPhone">
                    <el-input type="text" v-model="RegisterForm.staffPhone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" required prop="staffPassword">
                    <el-input type="password" v-model="RegisterForm.staffPassword" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" required prop="staffPassword1">
                    <el-input type="password" v-model="RegisterForm.staffPassword1" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="btns">
                    <el-button type="primary" @click="submit()">提交</el-button>
                    <el-button type="primary" @click="back()">返回</el-button>
                    <el-button type="info" @click="reset()">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default{
        name:'Register',
        data(){
            var checkPassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error("确认密码不能为空"))
                } else if (value.length < 8 || value.length > 16) {
                    callback(new Error("密码在8~16位之间"))
                } else if (value != this.RegisterForm.staffPassword) {
                    callback(new Error("两次密码不一致"))
                } else {
                    callback()
                }
            }
            return{
                RegisterForm:{
                    staffName:'',
                    staffPassword:'',
                    staffPhone:'',
                    staffPassword1:''
                },
                //新用户注册规则
                RegisterRules:{
                    //验证用户名的合法性
                    staffName:[
                        {required:true, message:"用户名不能为空", trigger:"blur"}
                    ],
                    //验证新密码的合法性
                    staffPassword:[
                        {required:true, message:"新密码不能为空", triiger:"blur"},
                        {min:8, max:16, message:"密码在8~16位之间", trigger:"blur"},
                    ],
                    //验证两次密码是否一致
                    staffPassword1:[
                        {validator: checkPassword, trigger:"blur"}
                    ],
                    //验证手机号的合法性
                    staffPhone:[
                        {required:true, message:"手机号不能为空", trigger:"blur"},
                        {pattern:/^1[3|4|5|7|8]\d{9}$/,message:"手机号不合法", trigger:"blur"}
                    ]
                }
            }
        },
        methods:{
            //回到登陆页面
            back(){
                this.$router.back()
            },
            //注册新用户
            submit(){
                console.log(this.RegisterForm)

                let staff = {
                        staffName:this.RegisterForm.staffName,
                        staffPassword:this.RegisterForm.staffPassword,
                        staffPhone:this.RegisterForm.staffPhone
                }
                let data = {
                    staff:JSON.stringify(staff)
                }

                this.$http.post('insert', this.$qs.stringify(data))
                .then((res) => {
                    console.log(res)
                    let success = res.data.success
                    let msg = res.data.errMsg
                    if (res.status == 200) {
                        if (success == false) {
                            this.$message.error(msg)
                        } else {
                            this.$message.success("注册成功")
                            this.$router.go(-1)
                        }
                    } else {
                        this.$message.error("注册失败")
                    }
                })
                .catch((err) => {
                    this.$message.error("出现异常,注册失败")
                })
            },
            reset(){
                this.$refs.RegisterRef.resetFields()
            }
        }
    }
</script>

<style lang="less" scpoed>
    .body{
        background: url("../assets/image/bg.jpg") no-repeat;
        background-size: 100% 100%;
        height: 100%;
    }
    .new_staff{
        width: 380px;
        height: 380px;
        background-color: #ffffff;
        border-radius: 5px;
        position: absolute;
        left: 50%;
        top: 50%;
        box-shadow: 0 0 10px #737bf3;
        transform: translate(-50%,-50%);
        .el-form{
            margin-top: 10%;
            width: 90%;
            .btns{
                display: flex;
                justify-content: flex-end;
            }
        }
    }
</style>