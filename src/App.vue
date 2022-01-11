<template>
    <navbar></navbar>
    <router-view></router-view>
</template>

<script>
    import Navbar from '@/components/Navbar'
    export default{
      components:{
          Navbar
      }
      
    }
</script>

<style>
    html,body{
        width: 100%;
        height: 100%;
    }
    *{
        margin: 5px;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

</style>
