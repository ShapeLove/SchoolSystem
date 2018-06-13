<template>
        <Menu :active-name="$route.name"  theme="dark" width="auto">
            <router-link class="inlineBlock" to="/">
                <MenuItem name="dashboard"><Icon type="ios-home"></Icon>首页</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/student">
                <MenuItem name="student"><Icon type="person-stalker"></Icon>学生管理</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/huodong">
                <MenuItem name="huodong"><Icon type="wineglass"></Icon>活动管理</MenuItem>
            </router-link>
        </Menu>
</template>

<script>
    export default {
        name: "Navbar",
        created() {
        },
        updated() {
            console.log(this.$route)
        }

    }
</script>

<style scoped>

</style>