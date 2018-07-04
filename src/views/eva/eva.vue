<template>
    <div>
        <Row>
            <Col span="8">
            <Form :label-width="80">
                <FormItem label="学号">
                    <Input  placeholder="请输入学号..." v-model="evaQuery.evaId"></Input>
                </FormItem>
            </Form>
            </Col>
            <Col span="8" offset="1">
            <Button type="primary" icon="social-twitter" @click="queryList">查询</Button>
            </Col>
        </Row>
        <Row>
            <Col>
            <Table border :columns="evaTitle" :data="evaList"></Table>
            </Col>
        </Row>
        <Row :style="{marginTop: '10px'}">
            <Col span="8" >
                <Button type="primary" shape="circle" icon="edit" @click="evaModal = true">写入评价</Button>
            </Col>
            <Col span="4" :style="{float: 'right'}">
            <Page :current="2" :total="50" simple></Page>
            </Col>
        </Row>
        <Modal
            v-model="evaModal"
            title="添加学生"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addEva">
            <Row>
                <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="学号">
                            <Input  placeholder="请输入学号..." v-model="evaInfo.studentId"></Input>
                        </FormItem>
                        <FormItem label="月评价内容">
                            <Input  placeholder="请输入月评价..." v-model="evaInfo.teacherEvaluate"></Input>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Modal>
<!--        <Modal
            v-model="leaveModal"
            title="教师回复"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="teacherRevert">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="教师回复">
                        <Input  placeholder="请输入留言..." v-model="revertModle.teacherRevert"></Input>
                    </FormItem>
                </Form>
                </Col>
            </Row>
        </Modal>
        <Modal
            v-model="leaveModal"
            title="新增留言"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="teacherRevert">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="教师回复">
                        <Input  placeholder="请输入学号..." v-model="revertModle.teacherRevert"></Input>
                    </FormItem>
                </Form>
                </Col>
            </Row>
        </Modal>-->
    </div>
</template>
<script>
    export default {
        data(){
            return {
                evaModal:false,
                evaInfo : {
                    "studentId": "",
                    "teacherEvaluate": ""
                },
                evaQuery: {
                    studentId:''
                },
                evaList: [
                    {
                        "id": 1,
                        "studentEvaluate": "222",
                        "studentId": "150702140208",
                        "teacherEvaluate": "111",
                        "teacherId": "06519"
                    }
                ],
                evaTitle:[
                    {
                        title:'学号',
                        key:'studentId'
                    },
                    {
                        title:'教师',
                        key:'teacherId'
                    },
                    {
                        title:'班主任对该学生的评价',
                        key:'teacherEvaluate'
                    },
                    {
                        title:'家长回复',
                        key:'"studentEvaluate'
                    },
                    {
                        title:'操作',
                        key:'action',
                        render:(h,params) => {
                        return h('div',[
                            h('Button',{
                                props :{
                                    type:'primary',
                                    size:'small'
                                },
                                style:{
                                    marginRight: '5px'
                                },
                                on:{
                                    click: () => {
                                         this.$Message.info('回复')
                                        }
                                    }
                                },'家长回复'),
                                h('Button',{
                                    props:{
                                        type:'warning',
                                        size:'small'
                                    },
                                    on:{
                                        click:() => {
                                              this.$Message.info('回复')
                                          }
                                  }
                             },'教师回复')]);
                            }
                        }
                     ]
            }
        },
        created(){
            this.queryList();
        },
        methods: {
            queryList() {
                var self = this;
                this.axios.post('evaluate/list',{})
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList;
                            self.evaList = datalist;
                            this.$Message.error("进入了query");
                            this.$Message.error(JSON.stringify(datalist));
                        }else{
                            self.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(JSON.stringify(error))
                    })
            },
            addEva() {
                var self = this;
                self.axios.post('evaluate/add',self.evaInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }else{
                            this.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(JSON.stringify(error))
                    })
            },
            remove (index) {
                this.studentList.splice(index, 1);
            }
        }
    }
</script>

<style scoped>
    .row{
        border: 1px solid red;
        text-align: center;
    }
    .col{
        border:1px solid green;
        text-align: center;
    }
</style>
