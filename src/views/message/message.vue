<template>
   <div>
       <div class="center">
           <Card :bordered="false">
               <h4 slot="title"><Icon type="speakerphone"></Icon> 通知栏</h4>
               <p><Icon type="earth"></Icon>小学信息教务处 开发团队:Shape</p>
               <Table :columns="messageTitle" :data="messageList" style="text-align: center"></Table>
                <br/>
               <Button type="primary" shape="circle" icon="speakerphone" @click="messageModal = true" style="position: relative;left: 500px;">
                   发布通知
               </Button>
           </Card>
           <Modal
               v-model="messageModal"
               title="发布通知"
               ok-text="OK"
               cancel-text="Cancel"
               @on-ok="addMessage">
               <Row>
                   <Col span="20">
                   <Form :label-width="80">
                       <FormItem label="通知时间">
                           <Input  placeholder="请输入通知时间..." v-model="messageInfo.adviceDate"></Input>
                       </FormItem>
                       <FormItem label="通知内容">
                           <Input  placeholder="请输入通知内容..." v-model="messageInfo.content"></Input>
                       </FormItem>
                   </Form>
                   </Col>
               </Row>
           </Modal>
       </div>
   </div>
</template>

<script>
    export default {
        name: "message",
        data(){
            return {
                messageModal:false,
                messageInfo:{
                    "adviceDate": null,
                    "content": ""
                },
                messageTitle:[
                    {
                        title:'通知时间',
                        key:'adviceDate'
                    },
                    {
                        title:'通知内容',
                        key:'content'
                    },
                    {
                        title:'通知号',
                        key:'id'
                    }
                ],
                messageList: [
                ]
            }
        },
        created(){
            this.queryList();
        },
        methods: {
            queryList() {
                var self = this;
                this.axios.post('advice/list',null)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data;
                            self.messageList = datalist;
                        }
                    })
            },
            addMessage() {
                var self = this;
                self.axios.post('advice/add',self.messageInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                    })
            }
        }
    }
</script>

<style scoped>
    .height{
        left:400px;
        width:500px;
        height:200px;
    }
    .center{
        font-size: 1.2em;
        text-align: center;
        background:#eee;
        padding: 20px;
    }
</style>
