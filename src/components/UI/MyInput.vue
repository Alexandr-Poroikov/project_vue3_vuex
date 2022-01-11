<template>
        <input class="inp" type="text" placeholder="Фамилия"
        :value="modelValue"
        @input="updateInput">

</template>

<script>
    export default {
        name: 'my-input',
        props:{
            modelValue: [String, Number],
        },
        methods:{
            updateInput(event){
                this.$emit('update:modelValue', event.target.value);
            }
        }
    }
</script>


<style scoped>
    .inp{
        border: 2px solid gray;
        border-radius: 3px;
        outline: none;
        width: 300px;
        padding:6px;
    }
    .inp:focus{
        box-shadow: 1px 1px 1px black
    }
</style>