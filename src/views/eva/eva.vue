<template>
    <div><Row>
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
                <Button type="primary" shape="circle" icon="edit" @click="modal4 = true">写入评价</Button>
            </Col>
            <Col span="4" :style="{float: 'right'}">
            <Page :current="2" :total="50" simple></Page>
            </Col>
        </Row>
        <Modal
            v-model="modal4"
            title="添加学生"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addEva">
            <Row>
                <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="学号">
                            <Input  placeholder="请输入学号..." v-model="evaInfo.id"></Input>
                        </FormItem>
                        <FormItem label="月评价内容">
                            <Input  placeholder="请输入月评价..." v-model="evaInfo.teacherEvaluate"></Input>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </Modal>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                modal4:false,
                evaInfo : {
                    "studentId": "",
                    "teacherEvaluate": ""
                },
                evaQuery: {
                    studentId:''
                },
                evaTitle:[
                    {
                        title:'学号',
                        key:'studentId'
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
                                style: {
                                    marginRight: '5px'
                                },
                                on:{
                                    click: () => {
                                         this.$Message.info('查看')
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
                                        this.remove(params.index)
                                          }
                                  }
                             },'删除')]);
                            }
                        }
                     ],
                studentList: [
                ]
            }
        },
        created(){
            this.queryList();
        },
        methods: {
            queryList() {
                var self = this;
                this.axios.post('',self.studentQuery)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList
                            self.studentList = datalist;
                        }else{
                            self.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(error.message)
                    })
            },
            addStudent() {
                this.$Message.info(JSON.stringify(this.studentInfo));
                var self = this;
                self.axios.post('http://123.206.28.158:8888/school-system/student/add',self.studentInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }else{
                            this.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(error.message)
                    })
            },
            remove (index) {
                this.studentList.splice(index, 1);
            },
            change(index){

            },
            addStudentEvaluate(){

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
