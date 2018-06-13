<template>
    <div class="layout">
        <Layout>
            <Top></Top>
            <Layout>
                <Sider hide-trigger :style="{background: '#495060;'}"><Navbar></Navbar></Sider>
                <AppContainer></AppContainer>
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
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
</style>