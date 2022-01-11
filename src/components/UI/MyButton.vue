<template>
        <button class="btn"><slot></slot></button>
</template>
<script>
    export default {
        name: 'my-button',
        methods:{

        }

    }
</script>

<style scoped>
    .btn{
        display: inline;
        padding: 10px 15px;
        border-radius: 10px;
        cursor: pointer;
        border: 2px solid green;
        
    }
    .btn:hover{
        background: #ecf9e2;
    }
</style>