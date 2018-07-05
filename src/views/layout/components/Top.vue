<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">学生信息发布系统</div>
            <div class="layout-nav">
                <Button @click="passwordModal = true">重置密码</Button>
                <Button @click="jumpout">登出</Button>

                <!--<MenuItem name="1"  @on-select="jumpout">-->
                    <!--<Icon type="ios-navigate"></Icon>-->
                        <!--登出-->
                <!--</MenuItem>-->
                <Modal
                    v-model="passwordModal"
                    title="重置密码"
                    ok-text="OK"
                    cancel-text="Cancel"
                    @on-ok="changePassword">
                    <Row>
                        <Col span="20">
                        <Form :label-width="80">
                            <FormItem label="新密码">
                                <Input  placeholder="请输入新密码..." v-model="passwordInfo.userPassword"></Input>
                            </FormItem>
                        </Form>
                        </Col>
                    </Row>
                </Modal>
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {
        name: "Top",
        data(){
            return {
                passwordModal:false,
                passwordInfo:{
                    "userPassword": ""
                }
            }
        },
        methods:{
            jumpout(){
                var self = this;
                this.axios.post('login/loginOut',null)
                    .then(function(response){
                        var result = response.data;
                        if(result.success === true){
                            self.$Message.success("退出系统");
                            setTimeout(function(){
                                self.$router.push({path:'/login'});
                            }, 1000);
                        }
                    })
            },
            changePassword(){
                var self = this;
                this.axios.post('user/resetpwd',this.passwordInfo)
                    .then(function(response){
                        var result = response.data;
                        if(result.success === true){
                            self.$Message.success("重置成功");
                            setTimeout(function(){
                                self.jumpout();
                            }, 1000);
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .layout-logo{
        width: 200px;
        height: 30px;
        float: left;
        position: relative;
        line-height: 30px;
        color: #d5e8fc;
        font-size: 20px;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 120px;
        margin-left: 1200px;
    }
</style>
