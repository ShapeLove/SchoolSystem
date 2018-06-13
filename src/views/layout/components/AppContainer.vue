<template>
    <Layout :style="{padding: '0 24px 24px'}">
        <Content :style="{padding: '24px', minHeight: '540px', background: '#fff'}">
            <transition name="fade" mode="out-in">
                <!-- <router-view :key="key"></router-view> -->
                <router-view></router-view>
            </transition>
        </Content>
    </Layout>
</template>

<script>
    export default {
        name: "AppContainer"
    }
</script>

<style scoped>

</style>