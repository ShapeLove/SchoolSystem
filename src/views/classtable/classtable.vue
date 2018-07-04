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
               <Table border :columns="weekday" :data="courceList"></Table>
            </Col>
        </Row>
        <Row :style="{marginTop: '10px'}">
                <Col span="4" >
                      <Button type="primary" shape="circle" icon="edit" @click="courceModal = true">新建课程表</Button>
                </Col>
                <Col span="4" >
                <Button type="warning" shape="circle" icon="trash-a" >删除课程表</Button>
                </Col>
        </Row>
        <Modal
            v-model="courceModal"
            title="新建课程表"
            ok-text="OK"
            cancel-text="Cancel"
            @on-ok="addcource">
            <Row>
                <Col span="20">
                <Form :label-width="80">
                    <FormItem label="星期一">
                        <Input  placeholder="上午第一节" v-model="courceInfo11.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courceInfo12.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courceInfo13.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courceInfo14.content"></Input>
                    </FormItem>
                    <FormItem label="星期二">
                        <Input  placeholder="上午第一节" v-model="courceInfo21.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courceInfo21.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courceInfo23.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courceInfo24.content"></Input>
                    </FormItem>
                    <FormItem label="星期三">
                        <Input  placeholder="上午第一节" v-model="courceInfo31.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courceInfo32.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courceInfo33.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courceInfo34.content"></Input>
                    </FormItem>
                    <FormItem label="星期四">
                        <Input  placeholder="上午第一节" v-model="courceInfo41.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courceInfo42.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courceInfo43.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courceInfo44.content"></Input>
                    </FormItem>
                    <FormItem label="星期五">
                        <Input  placeholder="上午第一节" v-model="courceInfo51.content"></Input>
                        <Input  placeholder="上午第二节" v-model="courceInfo52.content"></Input>
                        <Input  placeholder="下午第一节" v-model="courceInfo53.content"></Input>
                        <Input  placeholder="下午第二节" v-model="courceInfo54.content"></Input>
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
               courceModal:false,
               courseInfoList:[],
               courceInfo11:{
                   "classId":'',
                   "content": "",
                   "jie": '',
                   "week": ''
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
               courceList:[
                   {
                       "time":'上午第一节',
                       "Monday":"语文",
                       "Tuesday":"数学",
                       "Wednesday":"英语",
                       "Thursday":"语文",
                       "Friday":"数学"
                   },
                   {
                       "time":'上午第二节',
                       "Monday":"语文",
                       "Tuesday":"数学",
                       "Wednesday":"英语",
                       "Thursday":"语文",
                       "Friday":"数学"
                   },
                   {
                       "time":'下午第一节',
                       "Monday":"语文",
                       "Tuesday":"数学",
                       "Wednesday":"英语",
                       "Thursday":"语文",
                       "Friday":"数学"
                   },
                   {
                       "time":'下午第二节',
                       "Monday":"语文",
                       "Tuesday":"数学",
                       "Wednesday":"英语",
                       "Thursday":"语文",
                       "Friday":"数学"
                   }
               ]
           }
       },
        methods:{
            created(){
                this.queryList();
            },
            queryList() {
                var self = this;
                this.axios.post('courcetable/list',null)
                    .then(function(response){
                        if(response.data.success === true){
                            var datalist = response.data.data.dataList
                            self.leaveList = datalist;
                        }
                    })
            },
            addcource() {
                this.$Message.info(JSON.stringify(this.tableInfo));
                var self = this;
                self.axios.post('courcetable/add',self.tableInfo)
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
