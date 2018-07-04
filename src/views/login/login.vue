<template>
    <div class="container-fluid my-container">
        <header class="header"><!--<img src="img/banner.jpg"/>--></header>
        <section class="sign-in">
            <form >
                <div class="form-group">
                    <input class="form-control" placeholder="邮箱/手机号" type="email" v-model="user.userName" />
                    <span class="error-text show-error" v-if="emailValidate">
                        <span class="glyphicon glyphicon-exclamation-sign my-icon-size error-position" aria-hidden="true"></span>
                        <span>不能为空！</span>
                    </span>
                </div>
                <div class="form-group">
                    <input class="form-control" placeholder="密码" type="password" v-model="user.userPassword"/>
                    <span class="error-text show-error" v-if="passwordValidate">
                        <span class="glyphicon glyphicon-exclamation-sign my-icon-size error-position" aria-hidden="true"></span>
                        <span>不能为空！</span>
                    </span>
                </div>
                <div class="form-group">
                    <button type="button" class="btn-block sign-in-button" @click="login">
                        <span>登录</span>
                        <img src="../../img/loading.gif" class="form-loading"/>
                    </button>
                </div>
                <hr />
                <div class="form-group">
                    <button type="button" class=" btn-block sign-up-button">
                        <span>没有账号？免费注册</span>
                        <span class="glyphicon glyphicon-circle-arrow-right my-icon " aria-hidden="true"></span>
                    </button>
                </div>
                <div class="form-group" data-permission="user:resetpassword">
                    <button type="button" class=" btn-block review-button">
                        <span>忘记密码？重置</span>
                        <span class="glyphicon glyphicon-circle-arrow-right my-icon" aria-hidden="true"></span>
                    </button>
                </div>
            </form>
        </section>
        <footer class="footer">
            <span>Copyright© 2018-4-16-2018-*-* Powered by S&H </span>
        </footer>
    </div>
</template>
<script>
    export default{
        name: 'login',
        data() {
//            {
//                "userName":"shp",
//                "userPassword":"123456"
//            }
            return {
                user: {
                    userName: '',
                    userPassword: ''
                },
                emailValidate: false,
                passwordValidate: false
            }
        },
        methods: {
            login() {
                if (this.user.userName == '') {
                    this.emailValidate = true;
                }else {
                    this.emailValidate = false;
                }
                if (this.user.userPassword == '') {
                    this.passwordValidate = true;
                }else {
                    this.passwordValidate = false;
                }
                if(this.emailValidate === false && this.passwordValidate === false) {
                    var self = this;
                    this.axios.post('login/login',self.user)
                        .then(function(response){
                            var result = response.data;
                            if(result.success === true){
                                self.$Message.success("欢迎你，小可爱");
                                setTimeout(function(){
                                    self.$router.replace({path:'/'});
                                }, 1000);
                            }
                        })
                }
            }
        },
        created(){
            var self = this;
            self.axios.post('user/userinfo',null)
                .then(function(response){
                    var result = response.data;
                    if(result == 'notlogin'){
                        //没有登录（正常情况应该输密码登录）
                    } else {
                        self.$router.replace({path:'/'})
                    }
                })
        }
    }
</script>
<style scoped>
    @import url(https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css);
    @import '../../styles/my-global.css';
    @import '../../styles/shp.css';
</style>
