<template>
        <Menu :active-name="$route.name"  theme="dark" width="auto" class="nav">
            <router-link class="inlineBlock" to="/">
                <MenuItem name="dashboard"><Icon type="ios-home"></Icon>首页</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/score">
                <MenuItem name="score"><Icon type="university"></Icon>成绩管理</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/student">
                <MenuItem name="student"><Icon type="android-contacts"></Icon>学生管理</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/teacher">
                <MenuItem name="teacher"><Icon type="android-people"></Icon>教师信息管理</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/leave">
                <MenuItem name="leave"><Icon type="ios-paperplane"></Icon>请假情况</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/huodong">
                <MenuItem name="huodong"><Icon type="ios-basketball-outline"></Icon>活动管理</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/homework">
                <MenuItem name="homework"><Icon type="compose"></Icon>家庭作业管理</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/classTable">
                <MenuItem name="classTable"><Icon type="calendar"></Icon>课程表信息</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/board">
                <MenuItem name="board"><Icon type="chatbubble-working"></Icon>留言板</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/message">
                <MenuItem name="message"><Icon type="speakerphone"></Icon>通知栏</MenuItem>
            </router-link>
            <router-link class="inlineBlock" to="/eva">
                <MenuItem name="eva"><Icon type="ios-pricetags-outline"></Icon>月评价</MenuItem>
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
