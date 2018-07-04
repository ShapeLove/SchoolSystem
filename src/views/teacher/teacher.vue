<template>
    <div>
        <Row>
            <Col span="8">
            <Form :label-width="80">
                <FormItem label="学号">
                    <Input  placeholder="请输入学号..." v-model="teacherQuery.id"></Input>
                </FormItem>
            </Form>
            </Col>
            <Col span="8" offset="1">
                 <Button type="primary" icon="social-twitter"  @click="queryList">查询</Button>
            </Col>
        </Row>
        <Row>
            <Col>
            <Table border :columns="teacherTitle" :data="teacherList"></Table>
            </Col>
        </Row>
        <Row :style="{marginTop: '10px'}">
            <Col span="8" >
                    <Button type="primary" shape="circle" icon="edit" @click="teacherModal = true" >录入教师信息</Button>
            </Col>
            <Col span="4" :style="{float: 'right'}">
            <Page :current="1" :total="1" simple></Page>
            </Col>
        </Row>
        <Modal
            v-model="changeTeacherModal"
            title="修改教师"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="change">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="学号" >
                        <Input  placeholder="请输入教师号..." v-model="teacherInfo.id" class="input-width"></Input>
                    </FormItem>
                    <FormItem label="姓名">
                        <Input  placeholder="请输入姓名..." v-model="teacherInfo.name"></Input>
                    </FormItem>
                    <FormItem label="性别">
                        <Input  placeholder="请输入性别..." v-model="teacherInfo.sex"></Input>
                    </FormItem>
                    <FormItem label="出生年龄">
                        <Input  placeholder="请输入年龄..." v-model="teacherInfo.age"></Input>
                    </FormItem>
                    <FormItem label="职称">
                        <Input  placeholder="请输入职称..." v-model="teacherInfo.level"></Input>
                    </FormItem>
                    <FormItem label="电话">
                        <Input  placeholder="请输入电话..." v-model="teacherInfo.phone"></Input>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input  placeholder="邮箱..." v-model="teacherInfo.email"></Input>
                    </FormItem>
                    <FormItem label="工作地点">
                        <Input  placeholder="工作地点.." v-model="teacherInfo.address"></Input>
                    </FormItem>
                </Form>
                </Col>
            </Row>
            </Modal>
        <Modal
            v-model="teacherModal"
            title="添加教师"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addTeacher">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="学号" >
                        <Input  placeholder="请输入教师号..." v-model="teacherInfo.id" class="input-width"></Input>
                    </FormItem>
                    <FormItem label="姓名">
                        <Input  placeholder="请输入姓名..." v-model="teacherInfo.name"></Input>
                    </FormItem>
                    <FormItem label="性别">
                        <Input  placeholder="请输入性别..." v-model="teacherInfo.sex"></Input>
                    </FormItem>
                    <FormItem label="出生年龄">
                        <Input  placeholder="请输入年龄..." v-model="teacherInfo.age"></Input>
                    </FormItem>
                    <FormItem label="职称">
                        <Input  placeholder="请输入职称..." v-model="teacherInfo.level"></Input>
                    </FormItem>
                    <FormItem label="电话">
                        <Input  placeholder="请输入电话..." v-model="teacherInfo.phone"></Input>
                    </FormItem>
                    <FormItem label="邮箱">
                        <Input  placeholder="邮箱..." v-model="teacherInfo.email"></Input>
                    </FormItem>
                    <FormItem label="工作地点">
                        <Input  placeholder="工作地点.." v-model="teacherInfo.address"></Input>
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
                teacherModal:false,
                changeTeacherModal:false,
                teacherInfo:{
                    "id": "",
                    "name": "",
                    "sex":'',
                    "age": '',
                    "level": "",
                    "phone": "",
                    "email": "",
                    "address": ""
                },
                teacherQuery:{
                    id:''
                },
                teacherTitle : [
                    {
                        title:'工号',
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
                        title:'年龄',
                        key:'age'
                    },
                    {
                        title:'职称',
                        key:'level'
                    },
                    {
                        title:'电话',
                        key:'phone'
                    },
                    {
                        title:'邮箱',
                        key:'email'
                    },
                    {
                        title:'地址',
                        key:'address'
                    }
                ],
                teacherList:[
                ]
            }
        },
        created(){
            this.queryList();
        },
        methods:{
            queryList() {
                this.$Message.info("查询了")
                var self = this;
                this.axios.post('teacher/list',self.teacherQuery)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList;
                            self.teacherList = datalist;
                        }else{
                            self.$Message.error(JSON.stringify(response.data.message));
                        }
                    })
                    .catch(function(error){
                        self.$Message.error(error.message);
                    })
            },
            addTeacher() {
                this.$Message.info(JSON.stringify(this.teacherInfo));
                var self = this;
                self.axios.post('teacher/add',self.teacherInfo)
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
            }
        }
    }
</script>

<style scoped>
/*    .input-width{
        width:20px;
    }*/
</style>
