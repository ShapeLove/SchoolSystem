<template>
    <div>
        <Row>
            <Col span="8" >
            <Button type="primary" shape="circle" icon="edit" @click="leaveModal = true" >新增请假信息</Button>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            <Table border :columns="leaveTitle" :data="leaveList"></Table>
            </Col>
        </Row>
        <Modal
            v-model="leaveModal"
            title="新增请假信息"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addleave">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="学号">
                        <Input  placeholder="请输入学号..." v-model="leaveInfo.studentId"></Input>
                    </FormItem>
                    <FormItem label="请假时间">
                        <Input  placeholder="请输入时间..." v-model="leaveInfo.leaveDate"></Input>
                    </FormItem>
                    <FormItem label="课程">
                        <Input  placeholder="请输入课程..." v-model="leaveInfo.subject"></Input>
                    </FormItem>
                    <FormItem label="原因">
                        <Input  placeholder="请输入原因..." v-model="leaveInfo.reason"></Input>
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
               leaveModal:false,
               leaveInfo:{
                   "leaveDate": null,
                   "reason": "",
                   "studentId": "",
                   "subject": ""
               },
               leaveTitle:[
                   {
                       title:'学生学号',
                       key:'studentId'
                   },
                   {
                       title:'请假时间',
                       key:'leaveDate'
                   },
                   {
                       title:'缺课原因',
                       key:'reason'
                   },
                   {
                       title:'请假课程',
                       key:'subject'
                   },
                   {
                       title:'请假号',
                       key:'id'
                   },
                   {
                       title:'教师',
                       key:'teacherId'
                   }
               ],
               leaveList:[
               ]
           }
       },
        created(){
            this.queryList();
        },
        methods:{
            queryList() {
                var self = this;
                this.axios.post('leave/list',null)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList
                            self.leaveList = datalist;
                        }else{
                            self.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(error.message)
                    })
            },
            addleave() {
                var self = this;
                self.axios.post('leave/add',self.leaveInfo)
                    .then(function(response){
                        if(response.data.success === true){
                            self.queryList();
                        }else{
                            this.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error('错误')
                    })
            }
        }
    }
</script>

<style scoped>

</style>
