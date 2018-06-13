<template>
    <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
            <div class="layout-logo">学生信息发布系统</div>
            <div class="layout-nav">
                <MenuItem name="1">
                    <Icon type="ios-navigate"></Icon>
                    登录
                </MenuItem>
            </div>
        </Menu>
    </Header>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
    .layout-logo{
        width: 200px;
        height: 30px;
        float: left;
        position: relative;
        line-height: 30px;
        color: #d5e8fc;
        font-size: 20px;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 120px;
        margin-left: 1200px;
    }
</style>