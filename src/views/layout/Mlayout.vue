<template>
    <div class="layout">
        <Layout class="add-height">
            <Top></Top>
            <Layout ><!-- 整体（除顶部）侧边栏和中间栏内容-->
                <Sider hide-trigger :style="{background: '#495060;'}" class="sider">
                     <Navbar></Navbar><!-- 左侧导航栏具体显示内容ul-->
                </Sider>
                 <AppContainer class="container"></AppContainer>
             </Layout>
        </Layout>
    </div>
</template>

<script>
    import {Top,Navbar,AppContainer} from "./components";

    export default {
        name: "Mlayout",
        components: {
            Top,
            Navbar,
            AppContainer
        }
    }
</script>

<style scoped>
    .layout {
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top:0;
        border-radius: 4px;
        overflow: auto;
    }
    .add-height{
        height:100%;
    }
    .sider{
        width:300px;
        position: relative;
        overflow: auto;
        bottom:0;
    }
    .container{
        position: relative;
    }
</style>
