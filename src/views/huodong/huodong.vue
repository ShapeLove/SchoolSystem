<template>
 <div>
     <Row span="24" class="top">
         <Affix>
             <span class="demo-affix" ><Icon type="ios-basketball"></Icon>   课外活动  <Icon type="ios-basketball" ></Icon></span>
         </Affix>
     </Row>
     <br/>
     <Steps :current="1">
         <Step title="已完成" content="小学校园管理"></Step>
         <Step title="进行中" content="玩的开心"></Step>
         <Step title="待进行" content="锻炼小宝贝们的社会实践能力"></Step>
         <Step title="待进行" content="安全是最重要的！"></Step>
     </Steps>
     <br/>
     <Row>
         <Col span="8" >
            <Button type="primary" shape="circle" icon="edit" @click="huodongModal = true" >添加活动</Button>
         </Col>
     </Row>
     <br/>
     <Row>
         <Col>
            <Table border :columns="huodongTitle" :data="huodongList"></Table>
         </Col>
     </Row>
     <Modal
         v-model="huodongModal"
         title="新增请假信息"
         ok-text="OK"
         cancel-text="Cancel"
         @on-ok="addHuodong">
         <Row>
             <Col span="20">
             <Form :label-width="80">
                 <FormItem label="学号">
                     <Input  placeholder="请输入学号..." v-model="huodongInfo.classId"></Input>
                 </FormItem>
                 <FormItem label="姓名">
                     <Input  placeholder="请输入姓名..." v-model="huodongInfo.attendPerson"></Input>
                 </FormItem>
                 <FormItem label="时间">
                     <Input  placeholder="请输入时间..." v-model="huodongInfo.classId"></Input>
                 </FormItem>
                 <FormItem label="课程">
                     <Input  placeholder="请输入课程..." v-model="huodongInfo.content"></Input>
                 </FormItem>
                 <FormItem label="批准老师">
                     <Input  placeholder="请输入批准老师姓名..." v-model="huodongInfo.organizePerson"></Input>
                 </FormItem>
             </Form>
             </Col>
         </Row>
     </Modal>
 </div>
</template>

<script>
    export default {
        name: "huodong",
        data(){
            return{
                huodongModal:false,
                huodongInfo:{
                    "activityDate": null,
                    "attendPerson": "",
                    "classId": 0,
                    "content": "",
                    "organizePerson": ""
                },
                huodongQuery:{

                },
                huodongTitle:[
                    {
                        title:'活动时间',
                        key:''
                    },
                    {
                        title:'活动地点',
                        key:''
                    },
                    {
                        title:'活动内容',
                        key:''
                    },
                    {
                        title:'活动单位',
                        key:''
                    }
                ],
                huodongList:[

                ]
            }
        },
        created(){
            this.queryList();
        },
        methods:{
            queryList(){
                this.axios.post('',{})
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList;
                            self.leaveList = datalist;
                        }else{
                            this.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(error.message)
                    })

            },
            addHuodong(){
                this.$Message.info(JSON.stringify(this.huodongInfo));
                var self = this;
                self.axios.post('',null)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                        else{
                            this.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        this.$Message.error(error.message);
                    })
            }
        }
    }
</script>

<style scoped>
    .top{
        text-align: center;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
        font-size:1.3em;
        color:#ff9900;
    }
</style>
