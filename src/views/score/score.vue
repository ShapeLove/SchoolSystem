<template>
    <div>
        <Row :style="{marginTop: '20px'}">
            <Col span="8">
                <Form :label-width="80" :inline="isLine">
                    <FormItem label="学号：">
                        <Input  placeholder="请输入..."> </Input>
                    </FormItem>
                    <FormItem>
                        <Button type="primary">提交</Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
        <Row>
            <Col>
                <Table :columns="scoreTitle" :data="scoreList"></Table>
            </Col>
            <br/>
            <Col span="8" >
                  <Button type="primary" shape="circle" icon="edit" @click="scoreModal = true" >录入学生成绩</Button>
            </Col>
        </Row>
        <Modal
            v-model="scoreModal"
            title="录入成绩"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addScore">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="学号" >
                        <Input  placeholder="请输入学号..." v-model="scoreInfo.studentId"></Input>
                    </FormItem>
                    <FormItem label="语文">
                        <Input  placeholder="请输入性别..." v-model="scoreInfo.chinese"></Input>
                    </FormItem>
                    <FormItem label="数学">
                        <Input  placeholder="请输入出生日期..." v-model="scoreInfo.math"></Input>
                    </FormItem>
                    <FormItem label="英语">
                        <Input  placeholder="请输入入学时间..." v-model="scoreInfo.english"></Input>
                    </FormItem>
                    <FormItem label="美术">
                        <Input  placeholder="请输入电话..." v-model="scoreInfo.music"></Input>
                    </FormItem>
                    <FormItem label="体育">
                        <Input  placeholder="请输入地址..." v-model="scoreInfo.gym"></Input>
                    </FormItem>
                </Form>
                </Col>
            </Row>
        </Modal>
    </div>
</template>
<script>
    export default {
        name: 'score',
        data() {
            return {
                isLine:true,
                scoreModal:false,
                scoreInfo: {
                    "studentId": "",
                    "chinese": '',
                    "math": '',
                    "english": '',
                    "music": '',
                    "gym": ''
                },
                scoreQuery:{
                    "studentId": ""
                },
                scoreTitle: [
/*                    {
                        type: 'selection',
                        width:80
                    },*/
                    {
                        title: "学号",
                        key: "studentId"
                    },
                    {
                        title: "语文",
                        key: "chinese"
                    },
                    {
                        title: "数学",
                        key: "math"
                    },
                    {
                        title: "英语",
                        key: "english"
                    },
                    {
                        title: "美术",
                        key: "music"
                    },
                    {
                        title: "体育",
                        key: "gym"
                    },
                    {
                        title: "最高分",
                        key: "max",
                        render:(h,params) => {
                            var rowValue = params.row;
                            var scoreList = [rowValue.chinese, rowValue.math,rowValue.english, rowValue.music,rowValue.gym];
                            return h('p', scoreList.sort((a,b) => a-b)[4])
                        }
                    },
                    {
                        title: "总分",
                        key: "sum",
                        render:(h,params) => {
                            var rowValue = params.row;
                            var scoreList = [rowValue.chinese, rowValue.math,rowValue.english, rowValue.music,rowValue.gym];
                            return h('p',scoreList.reduce((acc, val) => acc + val, 0))
                        }
                    },
                    {
                        title: "平均分",
                        key: "ave",
                        render:(h,params) => {
                            var rowValue = params.row;
                            var scoreList = [rowValue.chinese, rowValue.math,rowValue.english, rowValue.music,rowValue.gym];
                            return h('p',scoreList.reduce((acc, val) => acc + val, 0) / scoreList.length)
                          }
                    }
                ],
                scoreList: [
                ]
            }
        },
        created () {
            this.queryList();
        },
        methods:{
            queryList() {
                var self = this;
                this.axios.post('score/list',self.scoreQuery)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList;
                            self.scoreList = datalist;
                        }
                    })
            },
            addScore() {
                var self = this;
                self.axios.post('score/add',self.scoreInfo)
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
