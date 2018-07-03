<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">学生信息发布系统</div>
            <div class="layout-nav">
                <Button @click="jumpout">登出</Button>
                <!--<MenuItem name="1"  @on-select="jumpout">-->
                    <!--<Icon type="ios-navigate"></Icon>-->
                        <!--登出-->
                <!--</MenuItem>-->
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {
        name: "Top",
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
                        }else{
                            self.$Message.error(response.data.message);
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(JSON.stringify(error));
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
