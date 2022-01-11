<template>
    <div class="dialog" v-if="$store.state.posts.dialogVisible" @click="$store.commit('setDialogVisible')">
        <div class="dialog__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show:{
            type: Boolean,
            default: false
        }
    }
    
}
</script>

<style scoped>
    .dialog{
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0, .5)
    }
    .dialog__content{
        margin: auto;
        background: white;
        border-radius: 12px;
        padding: 20px;
    }
</style>