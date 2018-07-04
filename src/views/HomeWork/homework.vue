<template>
    <div>
        <div>
            <div class="center">
                <Card :bordered="false">
                    <h4 slot="title"><Icon type="edit"></Icon> 作业公告栏</h4>
                        <Table border :columns="workTitle" :data="workList" @on-selection-change="selectChange"></Table>
                    <br/><hr/>
                    <br/>
                    <Button type="primary" shape="circle" icon="edit"  style="position: relative;left: 250px;" @click="workModal = true">布置作业</Button>
                    <Button type="primary" shape="circle" icon="edit"  style="position: relative;left: 250px;" @click="deleteHomework">删除作业</Button>
                </Card>
            </div>
            <br/>
            <Modal
                v-model="workModal"
                title="布置作业"
                ok-text="OK"
                cancel-text="Cancel"
                @on-ok="addHomework">
                <Row>
                    <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="班级">
                            <Input  placeholder="请输入班级..." v-model="workInfo.classId"></Input>
                        </FormItem>
                        <FormItem label="作业内容">
                            <Input  placeholder="请输入作业内容..." v-model="workInfo.content"></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Modal>
            <Modal
                v-model="studentRevertModal"
                title="家长回复"
                ok-text="OK"
                cancel-text="Cancel"
                @on-ok="addStudentRevert">
                <Row>
                    <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="家长回复">
                            <Input  placeholder="请输入家长回复..." v-model=" studentRevertInfo.studentRevert"></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Modal>
            <Modal
                v-model="teacherRevertModal"
                title="教师回复"
                ok-text="OK"
                cancel-text="Cancel"
                @on-ok="addTeacherRevert">
                <Row>
                    <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="教师回复">
                            <Input  placeholder="请输入教师回复..." v-model="teacherRevertInfo.teacherRevert"></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Modal>
        </div>
    </div>
</template>

<script>
    export default{
        name:'homework',
        data(){
            return {
                workModal:false,
                studentRevertModal:false,
                teacherRevertModal:false,
                homeworkDeleteList: [],
                workInfo: {
                    "classId": '',
                    "content": ""
                },
                teacherRevertInfo:{
                    "id": 1,
                    "teacherRevert": ""
                },
                studentRevertInfo:{
                    "id": 1,
                    "studentRevert": ""
                },
                workList:[
                ],
                workTitle:[
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title:'作业号',
                        key:'id',
                        width:50
                    },
                    {
                        title:'班级',
                        key:'classId',
                        width:50
                    },
                    {
                        title:'作业内容',
                        key:'content'
                    },
                    {
                        title:'家长汇报作业情况',
                        key:'studentRevert'
                    },
                    {
                        title:'留作业老师',
                        key:'teacherId',
                        width:80
                    },
                    {
                        title:'教师回复',
                        key:'teacherRevert'
                    },
                    {
                        title:'学号',
                        key:'studentId'
                    },
                    {
                        title:'操作',
                        key:'action',
                        render:(h,params) => {
                            return h('div',[
                                h('Button',{
                                    props:{
                                        type:'primary',
                                        size:'small'
                                    },
                                    on:{
                                        click:() => {
                                            this.show(params.row.id,true);
                                         }
                                    }
                                },'家长回复'),
                                h('Button',{
                                    props:{
                                        type:'warning',
                                        size:'small'
                                    },
                                    on:{
                                        click: ()=>{
                                         this.show(params.row.id,false);
                                        }
                                    }
                                },'教师回复')])
                        }
                    }
                ]
            }
        },
        created(){
            this.queryList();
        },
        methods:{
            addHomework(){
                var self = this;
                self.axios.post('homework/add',self.workInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                    })
            },
            queryList(){
                var self = this;
                this.axios.post('homework/list',{})
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList
                            self.workList = datalist;
                        }
                    })
            },
            /*家长回复*/
            addStudentRevert(){
                var self = this;
                self.axios.post('homework/revert',self.studentRevertInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                    })
            },
            /*教师回复*/
            addTeacherRevert(){
                var self = this;
                self.axios.post('homework/revert',self.teacherRevertInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                    })
            },
            show(id,flag){
                if(flag === true){//家长
                    this.studentRevertModal = true;
                    this. studentRevertInfo.id = id;
                } else {
                    this.teacherRevertModal = true;
                    this. teacherRevertInfo.id = id;
                }
            },
            selectChange(selection) {
                this.homeworkDeleteList = [];
                selection.forEach(function(item) {
                    this.homeworkDeleteList.push(item.id);
                }.bind(this));
                console.log(JSON.stringify(this.homeworkDeleteList));
            },
            deleteHomework() {
                if (this.homeworkDeleteList.length <= 0) {
                    this.$Message.error("请选择");
                }else {
                    var self=this;
                    this.axios.post ('homework/delete',this.homeworkDeleteList)
                        .then(function(response){
                            if(response.data.success === true){
                                self.queryList();
                            }
                        })
                }
            }
        }
    }
</script>

<style scoped>
    .show{
        width:500px;
        height: 100px;
        background-color: rgba(100,200,300,0.2);
        border-radius:0px 50px 0px;
    }
    .hometitle{
        text-align: center;
    }
    .center{
        font-size: 1.2em;
        text-align: center;
        background:#eee;
        padding: 20px;
    }
</style>
