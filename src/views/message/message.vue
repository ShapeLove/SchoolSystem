<template>
   <div>
       <div class="center">
           <Card :bordered="false">
               <h4 slot="title"><Icon type="speakerphone"></Icon> 通知栏</h4>
               <p><Icon type="earth"></Icon>小学信息教务处 开发团队:Shape</p>
               <Table :columns="messageTitle" :data="messageList" style="text-align: center"></Table>
                <br/>
               <Button type="primary" shape="circle" icon="speakerphone" @click="tableModal = true" style="position: relative;left: 500px;">
                   发布通知
               </Button>
           </Card>
       </div>
   </div>
</template>

<script>
    export default {
        name: "message",
        data(){
            return {
                messageModal:false,
                messageInfo:{

                },
                messageTitle:[
                    {
                        title:'通知内容',
                        key:'content'
                    },
                    {
                        title:'通知时间',
                        key:'time'
                    }
                ],
                messageList: [
                    {
                        "content": 11,
                        "time":22
                    },
                    {
                        "content": 11,
                        "time":22
                    },
                    {
                        "content": 11,
                        "time":22
                    },
                    {
                        "content": 11,
                        "time":22
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    .height{
        left:400px;
        width:500px;
        height:200px;
    }
    .center{
        font-size: 1.2em;
        text-align: center;
        background:#eee;
        padding: 20px;
    }
</style>
