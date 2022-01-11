<template>
    <select class="mySelect" v-model="modelValue" @change="changeOptions">
        <option value="" disabled>Выберете из Списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">сортировка {{option.name}}</option>
    </select>
</template>

<script>

export default {
    name: 'my-select',
    props:{
        modelValue:{
            type: String,

        },
        options:{
            type: Array,
            default: ()=>[]

        }
    },
    methods:{
        changeOptions(event){
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>


<style scoped>
    .mySelect{
        border: 1px solid black;
        padding: 5px;
        border-radius: 3px;
    }
</style>