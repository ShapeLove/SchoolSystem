<template>
    <div>
        <Row>
            <Col span="8" >
            <Button type="primary" shape="circle" icon="edit" @click="addBbsModal = true" >发布留言</Button>
            </Col>
        </Row>
        <br />
        <Table border :columns="bbsTitle" :data="bbsList"></Table>
        <Modal
            v-model="addBbsModal"
            title="家长新增留言"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addBbs">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="家长新增留言">
                        <Input  placeholder="请输入留言..." v-model="bbsInfo.content"></Input>
                    </FormItem>
                    <FormItem label="留言教师">
                        <Input  placeholder="请输入教师工号..." v-model="bbsInfo.teacherId"></Input>
                    </FormItem>
                </Form>
                </Col>
            </Row>
        </Modal>
        <Modal
            v-model="teacherModal"
            title="教师回复"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addTeacherRevert">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="发布留言">
                        <Input  placeholder="请输入留言..." v-model="revertInfo.teacherRevert"></Input>
                    </FormItem>
                </Form>
                </Col>
            </Row>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "board",
        data() {
            return {
                addBbsModal: false,
                teacherModal:false,
                revertInfo:{
                    id:'',
                    teacherRevert:''
                },
                bbsInfo:{
                    "bbsDate": null,
                    "content": "",
                    "teacherId": ""
                },
                bbsList: [
                ],
                bbsTitle: [
                    {
                        title:'留言',
                        key:'id'
                    },
                    {
                        title: "时间",
                        key:"bbsDate"
                    },
                    {
                        title:"学号",
                        key:"studentId"
                    },
                    {
                        title:"教师",
                        key:"teacherId"
                    },
                    {
                        title:"家长留言",
                        key:"content"
                    },
                    {
                        title:"教师回复",
                        key:"teacherRevert"
                    },
                    {
                        title:"操作",
                        key:"Action",
                        render: (h,params) => {
                            return h('div',[
                                h('Button', {
                                props: {
                                    type: 'warning',
                                    size: 'small'
                                },
                                    style:{
                                        marginRight: '5px'
                                    },
                                on: {
                                    click: () => {
                                        this.show(params.row.id)
                                    }
                                 }
                             },'教师回复')])
                        }
                    }
                ]
            }
        },
        methods: {
            show(id) {
                this.teacherModal = true;
                this.revertInfo.id = id;
            },
            addBbs(){
                var self = this;
                self.axios.post('bbs/add',self. bbsInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }
                    })
            },
            queryList(){
                var self = this;
                this.axios.post('bbs/list',{})
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data;
                            self.evaList = datalist;
                        }
                    })
            },
            addTeacherRevert() {
 /*               this.bbsList[0].teacherRevert = this.revertModle.teacherRevert;*/
                var self = this;
                self.axios.post('bbs/revert',self.teacherRevertInfo)
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

</style>
