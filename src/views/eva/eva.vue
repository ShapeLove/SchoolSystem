<template>
    <div>
        <Row>
            <Col span="8">
            <Form :label-width="80">
                <FormItem label="学号">
                    <Input  placeholder="请输入学号..." ></Input>
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
            title="添加评价"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addEva">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="学号">
                        <Input  placeholder="请输入学号..." v-model="addEvaInfo.studentId"></Input>
                    </FormItem>
                    <FormItem label="对该学生的评价">
                        <Input  placeholder="请输入评价内容..." v-model="addEvaInfo.teacherEvaluate"></Input>
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
                        <Input  placeholder="请输入家长回复..." v-model=" studentRevertInfo.studentEvaluate"></Input>
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
                evaModal:false,
                studentRevertModal:false,
                addEvaInfo: {
                    "studentId": "",
                    "teacherEvaluate": ""
                },
                studentRevertInfo:{
                    "id": 0,
                    "studentEvaluate": "",
                },
                evaList:[
                ],
                evaTitle:[
                    {
                        title:'月评价号',
                        key:'id'
                    },
                    {
                        title:'学生号',
                        key:'studentId'
                    },
                    {
                        title:'家长回复',
                        key:'studentEvaluate'
                    },
                    {
                        title:'班主任评价',
                        key:'teacherEvaluate'
                    },
                    {
                        title:'班主任',
                        key:'teacherId',
                        width:80
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
                                    },'家长回复')])
                        }
                    }
                ]
            }
        },
        created(){
            this.queryList();
        },
        methods:{
            addEva(){
                var self = this;
                self.axios.post('evaluate/add',self.addEvaInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                    })
            },
            queryList(){
                var self = this;
                this.axios.post('evaluate/list',{})
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data;
                            self.evaList = datalist;
                        }
                    })
            },
            /*家长回复*/
            addStudentRevert(){
                var self = this;
                self.axios.post('evaluate/revert',self.studentRevertInfo)
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
 /*                   this.teacherRevertModal = true;
                    this. teacherRevertInfo.id = id;*/
                }
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
