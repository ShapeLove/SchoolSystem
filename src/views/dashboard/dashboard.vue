<template>
    <Carousel v-model="value1" loop>
        <CarouselItem>
            <div class="demo-carousel">1</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
            <div class="demo-carousel">4</div>
        </CarouselItem>
    </Carousel>
</template>
<script>
    export default {
        data () {
            return {
                value1: 0
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
    .demo-carousel {
        height: 200px;
        line-height: 200px;
        text-align: center;
        color: #fff;
        font-size: 20px;
        background: #506b9e;
    }
</style>
