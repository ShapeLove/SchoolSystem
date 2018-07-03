<template>
    <div>
        <div>留言板</div>
        <Table border :columns="leaveTitle" :data="leaveList"></Table>
        <Modal
            v-model="leaveModal"
            title="新增请假信息"
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
        </Modal>
        <Modal
            v-model="leaveModal"
            title="新增请假信息"
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
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "board",
        data() {
            return {
                leaveModal: false,
                revertModle: {
                    id:'',
                    teacherRevert:''
                },
                leaveList: [
                    {
                        id: 1,
                        studentRevert: '给老师留言',
                        teacherRevert:''
                    }
                ],
                leaveTitle: [
                    {
                        title: "用户id",
                        key:"id"
                    },
                    {
                        title:"教师留言",
                        key:"teacherRevert"
                    },
                    {
                        title:"家长留言",
                        key:"studentRevert"
                    },
                    {
                        title:"操作",
                        key:"Action",
                        render: (h,params) => {
                            return h('div',[
                                h('Button', {
                                props: {
                                    type: 'primary',
                                    size: 'small'
                                },
                                on: {
                                    click: () => {
                                        this.show(params.row.id)
                                    }
                                }
                            },'教师回复')/*,
                            h('Button')*/])
                        }
                    }
                ]
            }
        },
        methods: {
            show(id) {
                this.leaveModal = true;
                this.revertModle.id = id;
            },
            teacherRevert() {
                this.$Message.info(JSON.stringify(this.revertModle))
                this.leaveList[0].teacherRevert = this.revertModle.teacherRevert;
            }
        }
    }
</script>

<style scoped>

</style>
