<template>
    <div>
        <Row>
            <Col span="8">
                <Form :label-width="80">
                    <FormItem label="学号">
                        <Input  placeholder="请输入学号..." v-model="studentQuery.studentId"></Input>
                    </FormItem>
                </Form>
            </Col>
            <Col span="8" offset="1">
                <Button type="primary" icon="social-twitter" @click="queryList">查询</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table border :columns="studentTitle" :data="studentList"></Table>
            </Col>
        </Row>
        <Row :style="{marginTop: '10px'}">
            <Col span="8" >
                <Button type="primary" shape="circle" icon="edit" @click="modal4 = true">录入学生信息</Button>
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
            @on-ok="addStudent">
            <Row>
                <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="学号">
                            <Input  placeholder="请输入学号..." v-model="studentInfo.id"></Input>
                         </FormItem>
                        <FormItem label="姓名">
                            <Input  placeholder="请输入姓名..." v-model="studentInfo.name"></Input>
                        </FormItem>
                        <FormItem label="性别">
                            <Input  placeholder="请输入性别..." v-model="studentInfo.sex"></Input>
                        </FormItem>
                        <FormItem label="出生日期">
                            <Input  placeholder="请输入出生日期..." v-model="studentInfo.birthday"></Input>
                        </FormItem>
                        <FormItem label="入学时间">
                            <Input  placeholder="请输入入学时间..." v-model="studentInfo.intake"></Input>
                        </FormItem>
                        <FormItem label="电话">
                            <Input  placeholder="请输入电话..." v-model="studentInfo.phone"></Input>
                        </FormItem>
                        <FormItem label="地址">
                            <Input  placeholder="请输入地址..." v-model="studentInfo.address"></Input>
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
                /*changeModal:false,*/
                studentInfo : {
                    id: '',
                    name: '',
                    sex: '',
                    birthday: '',
                    intake: '',
                    phone:'',
                    address:'',
                    classId:''
                },
                studentQuery: {
                    studentId:''
                },
                studentTitle:[
                    {
                        title:'学号',
                        key:'id'
                    },
                    {
                        title:'姓名',
                        key:'name'
                    },
                    {
                        title:'性别',
                        key:'sex'
                    },
                    {
                        title:'出生日期',
                        key:'birthday'
                    },
                    {
                        title:'入学时间',
                        key:'intake'
                    },
                    {
                        title:'电话',
                        key:'phone'
                    },
                    {
                        title:'地址',
                        key:'address'
                    },
                    {
                        title:'班级',
                        key:'classId'
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
                                },'查看')]);
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
                this.axios.post('student/list',self.studentQuery)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList;
                            self.studentList = datalist;
                        }
                    })
            },
            addStudent() {
                    this.$Message.info(JSON.stringify(this.studentInfo));
                    var self = this;
                    self.axios.post('http://123.206.28.158:8888/school-system/student/add',self.studentInfo)
                        .then(function(response){
                            if(response.data.success === true){
                                self.queryList();
                            }
                        })
            },
            change(){

            }
        }
    }
</script>
