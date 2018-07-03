<template>
    <div>
        <div>
            <div class="center">
                <Card :bordered="false">
                    <h4 slot="title"><Icon type="edit"></Icon> 作业公告栏</h4>
                    <Table border :columns="workTitle" :data="workList"></Table>
                    <br/><hr/>
                    <br/>
                    <Button type="warning" shape="circle" icon="edit" style="position: relative;left: 550px;">删除作业</Button>
                    <Button type="primary" shape="circle" icon="edit"  style="position: relative;left: 250px;" @click="workModal = true">布置作业</Button>
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
<!--            <Modal
                v-model="uploadModal"
                title="提交作业"
                ok-text="OK"
                cancel-text="Cancel"
                @on-ok=" addUploadHomework">
                <Row>
                    <Col span="20">
                    <Form :label-width="80">
                        <FormItem label="班级">
                            <Input  placeholder="请输入班级..." v-model="workInfo.classId"></Input>
                        </FormItem>
                        <FormItem label="作业号">
                            <Input  placeholder="请输入作业号码..." v-model="workInfo.id"></Input>
                        </FormItem>
                        <FormItem label="家长回复">
                            <Input  placeholder="请输入学号..." v-model="workInfo.studentRevert"></Input>
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
                        <FormItem label="作业号">
                            <Input  placeholder="请输入作业号码..." v-model="workInfo.id"></Input>
                        </FormItem>
                        <FormItem label="学生学号">
                            <Input  placeholder="请输入学号..." v-model="workInfo.studentId"></Input>
                        </FormItem>
                        <FormItem label="教师回复">
                            <Input  placeholder="请输入学号..." v-model="workInfo.teacherRevert"></Input>
                        </FormItem>
                    </Form>
                    </Col>
                </Row>
            </Modal>-->
        </div>
    </div>
</template>

<script>
    export default{
        name:'homework',
        data(){
            return {
                workModal:false,
                uploadModal:false,
                teacherRevertModal:false,
                workInfo: {
                    "classId": '',
                    "content": "",
                    "id": '',
                    "studentId": "",
                    "studentRevert": "",
                    "teacherId": "",
                    "teacherRevert": ""
                },
                workTitle:[
                    {
                        title:'班级',
                        key:'classId'
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
                        title:'教师回复',
                        key:'teacherRevert'
                    },
                    {
                        title:'作业号',
                        key:'id'
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
                                        type:'error',
                                        size:'small'
                                    },
                                    on:{
                                        click:() => {
                                            this.addUploadHomework();
                                         }
                                    }
                                },'家长回复'),
                                h('Button',{
                                    props:{
                                        type:'error',
                                        size:'small'
                                    },
                                    on:{
                                        click: ()=>{
                                            this.addTeacherRevert();
                                        }
                                    }
                                },'教师回复'),
                                h('Button',{
                                    props:{
                                        type:'error',
                                        size:'small'
                                    },
                                    on:{
                                        click:()=>{

                                         }
                                    }
                                },'删除作业')])
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
                self.axios.post('',self.workInfo)
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
            queryList(){
                var self = this;
                this.axios.post('',{})
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
            /*家长回复*/
            addUploadHomework(){
                var self = this;
                self.axios.post('',{})
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }else{
                            this.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(error.message);
                    })
            },
            /*教师回复*/
            addTeacherRevert(){

            },
            remove (index) {
                this.studentList.splice(index, 1);
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
