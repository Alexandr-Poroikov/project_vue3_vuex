<template>
    <div class="wrapper">
        <h1 class="title">Добро пожаловать!!</h1>
        <router-link to="/Posts"> Наши посты </router-link>
        <router-link to="/About"> Краткая инфо </router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .wrapper{
        text-align: center;
    }
    .title{
        margin-bottom: 20px;
    }
    h1{
        font-size: 56px;
        color: #318000;
        margin-bottom: 30px;
    }
</style>
