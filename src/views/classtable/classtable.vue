<template>
    <div>
       <Row span="24" class="top">
            <Affix>
                <span class="demo-affix" ><Icon type="paper-airplane"></Icon>课程表<Icon type="paper-airplane"></Icon></span>
            </Affix>
       </Row>
        <br/>
        <Row>
            <Col>
               <Table border :columns="weekday" :data="courseList"></Table>
            </Col>
        </Row>
        <Row :style="{marginTop: '10px'}">
                <Col span="4" >
                      <Button type="primary" shape="circle" icon="edit" @click="courseModal = true">新建课程表</Button>
                </Col>
                <Col span="4" >
                <Button type="warning" shape="circle" icon="trash-a" >删除课程表</Button>
                </Col>
        </Row>
        <Modal
            v-model="courseModal"
            title="新建课程表"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addcourse">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="星期一">
                        <Input  placeholder="上午第一节" v-model="courseInfo11.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courseInfo12.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courseInfo13.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courseInfo14.content"></Input>
                    </FormItem>
                    <FormItem label="星期二">
                        <Input  placeholder="上午第一节" v-model="courseInfo21.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courseInfo22.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courseInfo23.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courseInfo24.content"></Input>
                    </FormItem>
                    <FormItem label="星期三">
                        <Input  placeholder="上午第一节" v-model="courseInfo31.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courseInfo32.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courseInfo33.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courseInfo34.content"></Input>
                    </FormItem>
                    <FormItem label="星期四">
                        <Input  placeholder="上午第一节" v-model="courseInfo41.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courseInfo42.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courseInfo43.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courseInfo44.content"></Input>
                    </FormItem>
                    <FormItem label="星期五">
                        <Input  placeholder="上午第一节" v-model="courseInfo51.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courseInfo52.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courseInfo53.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courseInfo54.content"></Input>
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
               courseModal:false,
               courseInfoList:[],
               courseInfo:{
                   "classId":'',
                   "content": "",
                   "jie": '',
                   "week": ''
               },
               courseInfo11 :{
                   "content": "",
                   "jie": 1,
                   "week": 1
               },
               courseInfo12 :{
                   "content": "",
                   "jie": 2,
                   "week": 1
               },
               courseInfo13 :{
                   "content": "",
                   "jie": 3,
                   "week": 1
               },
               courseInfo14 :{
                   "content": "",
                   "jie": 4,
                   "week": 1
               },
               courseInfo21 :{
                   "content": "",
                   "jie": 1,
                   "week": 2
               },
               courseInfo22 :{
                   "content": "",
                   "jie": 2,
                   "week": 2
               },
               courseInfo23 :{
                   "content": "",
                   "jie": 3,
                   "week": 2
               },
               courseInfo24 :{
                   "content": "",
                   "jie": 4,
                   "week": 2
               },
               courseInfo31 :{
                   "content": "",
                   "jie": 1,
                   "week": 3
               },
               courseInfo32 :{
                   "content": "",
                   "jie": 2,
                   "week": 3
               },
               courseInfo33 :{
                   "content": "",
                   "jie": 3,
                   "week": 3
               },
               courseInfo34 :{
                   "content": "",
                   "jie": 4,
                   "week": 3
               },
               courseInfo41 :{
                   "content": "",
                   "jie": 1,
                   "week": 4
               },
               courseInfo42 :{
                   "content": "",
                   "jie": 2,
                   "week": 4
               },
               courseInfo43 :{
                   "content": "",
                   "jie": 3,
                   "week": 4
               },
               courseInfo44 :{
                   "content": "",
                   "jie": 4,
                   "week": 4
               },
               courseInfo51 :{
                   "content": "",
                   "jie": 1,
                   "week": 5
               },
               courseInfo52 :{
                   "content": "",
                   "jie": 2,
                   "week": 5
               },
               courseInfo53 :{
                   "content": "",
                   "jie": 3,
                   "week": 5
               },
               courseInfo54 :{
                   "content": "",
                   "jie": 4,
                   "week": 5
               },
               weekday:[
                   {
                       title:'时间',
                       key:'time'
                   },
                   {
                       title:'星期一',
                       key:'Monday'
                   },
                   {
                       title:'星期二',
                       key:'Tuesday'
                   },
                   {
                       title:'星期三',
                       key:'Wednesday'
                   },
                   {
                       title:'星期四',
                       key:'Thursday'
                   },
                   {
                       title:'星期五',
                       key:'Friday'
                   }
               ],
               courseList:[
//                   {
//                       "time":'上午第一节',
//                       "Monday":"语文",
//                       "Tuesday":"数学",
//                       "Wednesday":"英语",
//                       "Thursday":"语文",
//                       "Friday":"数学"
//                   },
//                   {
//                       "time":'上午第二节',
//                       "Monday":"语文",
//                       "Tuesday":"数学",
//                       "Wednesday":"英语",
//                       "Thursday":"语文",
//                       "Friday":"数学"
//                   },
//                   {
//                       "time":'下午第一节',
//                       "Monday":"语文",
//                       "Tuesday":"数学",
//                       "Wednesday":"英语",
//                       "Thursday":"语文",
//                       "Friday":"数学"
//                   },
//                   {
//                       "time":'下午第二节',
//                       "Monday":"语文",
//                       "Tuesday":"数学",
//                       "Wednesday":"英语",
//                       "Thursday":"语文",
//                       "Friday":"数学"
//                   }
               ],
               jieEnum: {
                   1 : "上午第一节",
                   2 : "上午第二节",
                   3 : "下午第一节",
                   4 : "下午第二节"
               },
               weekEnum: {
                   1 : "星期一",
                   2 : "星期二",
                   3 : "星期三",
                   4 : "星期四",
                   5 : "星期五"
               }
           }
       },
        created(){
            this.queryList();
        },
        methods:{
            queryList() {
                var self = this;
                this.axios.post('courcetable/list',{"classId":1})
                    .then(function(response){
                        if(response.data.success === true){
                            self.$Message.success("成功啦！");
                            var datalist = response.data.data;
                            var realdata = [];
                            realdata.push(self.findCource(1,datalist));
                            realdata.push(self.findCource(2,datalist));
                            realdata.push(self.findCource(3,datalist));
                            realdata.push(self.findCource(4,datalist));
                            self.courseList = realdata;
                        }
                    })
            },
            findCource(jie, courseList) {
                var temp = {};
                temp.time = this.jieEnum[jie];
                courseList.forEach(function(item) {
                    if (item.jie == jie) {
                        if (item.week == 1) {
                            temp.Monday = item.content;
                        }
                        if (item.week == 2) {
                            temp.Tuesday = item.content;
                        }
                        if (item.week == 3) {
                            temp.Wednesday =item.content;
                        }
                        if (item.week == 4) {
                            temp.Thursday = item.content;
                        }
                        if (item.week == 5) {
                            temp.Friday = item.content;
                        }
                    }
                }.bind(this));
                return temp;
            },
            addcourse() {
                var self = this;
                self.axios.post('courcetable/add',[this.courseInfo11, this.courseInfo12,this.courseInfo13,this.courseInfo14,this.courseInfo21,this.courseInfo22,this.courseInfo23,this.courseInfo24,this.courseInfo31,this.courseInfo32,this.courseInfo33,this.courseInfo34,this.courseInfo41,this.courseInfo42,this.courseInfo43,this.courseInfo44,this.courseInfo51,this.courseInfo52,this.courseInfo53,this.courseInfo54])
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
    .top{
         text-align: center;
         font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
         font-size:1.3em;
         color:#ff9900;
     }
</style>
