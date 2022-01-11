<template>
    <div class="navbar">
        <h2 class="navbar__title" @click="$router.push('/')">Vue 3 (vuex + router)</h2>
        <div calss="navbar__buttons">
            <my-button @click="$router.push('/Posts')">Посты</my-button>
            <my-button @click="$router.push('/About')">О разработке</my-button>
        </div>
    </div>
</template>

<script>

    export default{
      
      
    }
</script>

<style scooped>
    .navbar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        min-height: 70px;
        background-color: cadetblue;
        margin-bottom: 30px;
    }
    .navbar__title{
        cursor: pointer;
    }


</style>